export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | undefined
export type AIQueryRequestParam = {
  model: 'DeepSeek'
  query: string
  attachments?: string[]
}
export type AIUploadRequestParam = {
  model: 'DeepSeek'
  filePath: string
}
