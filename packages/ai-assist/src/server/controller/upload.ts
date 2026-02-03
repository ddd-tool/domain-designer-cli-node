import fs from 'node:fs'
import type { AIUploadRequestParam } from './define'
import { HttpWrapper } from '../wrapper'
import { upload } from '../ai-client'

function isAIUploadRequestParam(
  data: Record<string, string>,
): data is AIUploadRequestParam {
  return data?.filePath?.length > 0 && data?.model.length > 0
}

export async function handleUpload(httpWrapper: HttpWrapper) {
  const data = await httpWrapper.readReqBodyJson<Record<string, string>>()
  const token = httpWrapper
    .getReqHeaders()
    .authorization?.substring('Bearer '.length)
  if (!token?.length) {
    httpWrapper.replyJson(401, {
      error: 'Need a token in header. Authorization: Bearer <token>',
    })
    return
  } else if (!isAIUploadRequestParam(data)) {
    httpWrapper.replyJson(400, { error: 'Invalid request' })
    return
  } else if (!fs.existsSync(data.filePath)) {
    httpWrapper.replyJson(400, { error: 'File not found' })
    return
  }
  const stream = fs.createReadStream(data.filePath)
  // const file = await upload(data.model, token, stream)
  httpWrapper.replyJson(200, { status: 'ok' })
}
