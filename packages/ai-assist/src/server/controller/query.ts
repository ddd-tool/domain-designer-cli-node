import { queryStream } from '../ai-client'
import type { AIQueryRequestParam } from '../define'
import { type HttpWrapper } from '../wrapper'

function isAIQueryRequestParam(data: Record<string, string>): data is AIQueryRequestParam {
  return typeof data.query === 'string' && !!data.query
}

export async function handleQuery(wrapper: HttpWrapper) {
  const data = await wrapper.readReqBodyJson<Record<string, string>>()
  const token = wrapper.getReqHeaders().authorization?.substring('Bearer '.length)
  if (!token?.length) {
    wrapper.replyJson(401, { error: 'Need a token in header. Authorization: Bearer <token>' })
    return
  } else if (!isAIQueryRequestParam(data)) {
    wrapper.replyJson(400, { error: 'Invalid request' })
    return
  }
  const stream = await queryStream('DeepSeek', token, data.query)
  for await (const evnet of stream) {
    wrapper.sendMessage(JSON.stringify(evnet))
  }
}
