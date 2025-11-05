export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | undefined
export type AIQueryRequestParam = {
  model?: string
  query: string
  attachments?: string[]
}
export type AIUploadRequestParam = {
  model?: string
  filePath: string
}
