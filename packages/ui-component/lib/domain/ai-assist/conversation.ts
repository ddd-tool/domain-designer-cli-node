import type { Conversation, CreateMessageOptions } from './types'
import { genId } from './common'

export function createConversation(id: string): Conversation {
  return {
    id,
    conversationContextId: undefined,
    title: '新对话',
    content: [],
    running: false,
    createMessage(opts: CreateMessageOptions) {
      this.content.push({
        id: genId(),
        creator: opts.creator || 'Ai',
        status: opts.status || 'Completed',
        fileList: opts.fileList || [],
        text: opts.text || [],
        done: opts.done || false,
      })
    },
    startWorkflow() {
      this.running = true
      const message = this.content[this.content.length - 1]
      if (!message) {
        return
      }
      message.status = 'Running'
    },
    finishWorkflow() {
      this.running = false
      const message = this.content[this.content.length - 1]
      if (!message) {
        return
      }
      message.status = 'Completed'
      message.done = true
    },
    startNode() {
      const message = this.content[this.content.length - 1]
      if (!message) {
        return
      }
      message.text.push('')
    },
    finishNode() {},
    onMessage(text: string) {
      const message = this.content[this.content.length - 1]
      if (!message || message.text.length === 0) {
        console.error('onMessage error, no text container to append')
        return
      }
      message.text[message.text.length - 1] += text
    },
    onError() {
      const message = this.content[this.content.length - 1]
      if (!message) {
        return
      }
      message.status = 'Failed'
    },
  }
}
