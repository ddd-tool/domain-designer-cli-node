import { queryStream } from '../ai-client'
import type { AIQueryRequestParam } from '../define'
import { type HttpWrapper } from '../wrapper'

function isAIQueryRequestParam(data: Record<string, any>): data is AIQueryRequestParam {
  return typeof data.query === 'string' && !!data.query && data.model === 'DeepSeek'
}

export async function handleQuery(httpWrapper: HttpWrapper) {
  const data = await httpWrapper.readReqBodyJson<Record<string, string>>()
  const token = httpWrapper.getReqHeaders().authorization?.substring('Bearer '.length)
  if (!token?.length) {
    httpWrapper.replyJson(401, { error: 'Need a token in header. Authorization: Bearer <token>' })
    return
  } else if (!isAIQueryRequestParam(data)) {
    httpWrapper.replyJson(400, { error: 'Invalid request' })
    return
  }
  const stream = await queryStream(data.model, token, data.query, data.attachments || [])
  for await (const evnet of stream) {
    httpWrapper.sendMessage(JSON.stringify(evnet))
  }
  httpWrapper.close()
}
