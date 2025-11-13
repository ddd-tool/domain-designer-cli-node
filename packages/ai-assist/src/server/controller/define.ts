import { AIName } from '../ai-client/config'

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | undefined
export type AIQueryRequestParam = {
  host: AIName
  query: string
  attachments?: string[]
}
export type AIUploadRequestParam = {
  model: 'DeepSeek'
  filePath: string
}

export type Choise = {
  index: number
  delta: {
    role: string
    content: string
  }
  logprobs: null
  finish_reason: null
}

export type SseEvent = {
  id: string
  object: string
  created: number
  model: string
  system_fingerprint: string
  choices: Choise[]
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
    prompt_tokens_details: {
      cached_tokens: number
    }
    prompt_cache_hit_tokens: number
    prompt_cache_miss_tokens: number
  }
}
