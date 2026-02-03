export type ConversationMessage = {
  id: string //前端自动生成
  messageContextId?: string //大模型的消息id
  creator: 'User' | 'Ai'
  status: 'Completed' | 'Cancelled' | 'Failed' | 'Running'
  fileList: FileDetail[]
  text: string[]
  done: boolean
}

export type CreateMessageOptions = Partial<Omit<ConversationMessage, 'id'>>

export type Conversation = {
  id: string //前端自动生成
  conversationContextId?: string //大模型的会话id
  title: string
  content: ConversationMessage[]
  running: boolean

  createMessage: (opts: CreateMessageOptions) => void
  startWorkflow: () => void
  finishWorkflow: () => void
  startNode: () => void
  finishNode: () => void
  onMessage: (text: string) => void
  onError: () => void
}

export type FileDetail = {
  id: string
  name: string
  size: number
  extension: string
}

export type Choise = {
  index: number
  delta: {
    role: string
    content: string
    reasoning_content: string
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
