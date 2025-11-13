import { kimiQueryStream, kimiUpload, queryStream } from '../ai-client'
import type { AIQueryRequestParam } from './define'
import { type HttpWrapper } from '../wrapper'
import { AiMessage } from '../ai-client/define'

function isAIQueryRequestParam(data: Record<string, any>): data is AIQueryRequestParam {
  return data?.query?.length > 0 && data?.host?.length > 0
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
  if (data.host === 'Kimi') {
    let fileMessageResult: AiMessage[] = []
    if (!data.attachments?.length) {
      httpWrapper.replyJson(400, { error: 'Invalid request' })
      return
    } else {
      for (const filePath of data.attachments) {
        fileMessageResult = await kimiUpload('Kimi', token, filePath, fileMessageResult)
      }
    }
    if (fileMessageResult.length === 0) {
      httpWrapper.replyJson(400, { error: 'Invalid request' })
      return
    }
    console.info('fileMessageResult', fileMessageResult)
    const stream = await kimiQueryStream('Kimi', data.host, token, fileMessageResult)
    for await (const evnet of stream) {
      httpWrapper.sendMessage(JSON.stringify(evnet))
    }
    httpWrapper.close()
    return
  }
  const stream = await queryStream(data.host, token, data.query, data.attachments || [])
  for await (const evnet of stream) {
    httpWrapper.sendMessage(JSON.stringify(evnet))
  }
  httpWrapper.close()
}
