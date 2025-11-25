import { reactive, ref } from 'vue'
import { createBroadcastEvent, createSingletonAgg, createPluginHelperByAgg } from 'vue-fn/domain'
import type { Conversation, SseEvent } from './define'
import { genId } from './common'
import { createConversation } from './conversation'

const agg = createSingletonAgg(() => {
  let eventSource: EventSource | undefined = undefined
  const apiName = ref('DeepSeek')
  const apiKey = ref('')
  const isCacheAiKey = ref(true)

  const conversationMap = reactive<Record<string, Conversation>>({})
  const currentConversationId = ref<null | string>(null)

  const onQueryStartedEvent = createBroadcastEvent<{ conversationId: string; query: string; filesPath: string[] }>()
  const onConnectedEvent = createBroadcastEvent<{}>()
  const onDisconnectedEvent = createBroadcastEvent<{ error: Event }>()
  const paths = ref(JSON.parse(import.meta.env.VITE_DESIGNER_PATHS || '{}'))

  return {
    states: {
      apiName,
      apiKey,
      isCacheAiKey,
      paths,
      conversationMap,
    },
    commands: {
      connect(connectUrl: string) {
        if (eventSource) {
          return
        }
        eventSource = new EventSource(connectUrl)
        eventSource.onopen = () => {
          console.debug('connected', connectUrl)
          onConnectedEvent.publish({})
        }
        eventSource.onerror = (error) => {
          onDisconnectedEvent.publish({ error })
        }
        eventSource.onmessage = (event) => {
          console.debug('received event, ', event.data)
          if (!event.data?.startsWith('event:')) {
            return
          }
          let data = event.data
          if (!currentConversationId.value || !data || typeof data !== 'string' || data.startsWith('data:')) {
            return
          }
          data = data.replace('data:', '').trim()
          const sseEvent: SseEvent = JSON.parse(data)
          const content = sseEvent?.choices[0]?.delta?.content || ''
          if (!content) {
            return
          }
          const conversation = conversationMap[currentConversationId.value]
          if (!conversation) {
            throw new Error('conversation not found')
          }
          conversation.onMessage(content)
        }
      },
      disconnect() {
        if (eventSource) {
          eventSource.close()
          eventSource = undefined
        }
      },
      getEventSource() {
        return eventSource
      },
      setIsCacheAiKey(b: boolean) {
        isCacheAiKey.value = b
      },
      setAiKey(v: string) {
        if (!v) {
          return 'ai key is required'
        } else if (!/sk-[a-zA-Z0-9]{10,}/g.test(v)) {
          return 'invalid format'
        }
        apiKey.value = v
        return ''
      },
      query(str: string) {
        if (!str) {
          return
        }
        const conversationId = currentConversationId.value || genId()
        if (!currentConversationId.value) {
          conversationMap[conversationId] = createConversation(str)
          currentConversationId.value = conversationId
        }
        const conversation = conversationMap[currentConversationId.value]
        if (!conversation) {
          throw new Error('conversation not found')
        }
        conversation.createMessage({ creator: 'User', text: [str], done: true, status: 'Completed' })
        conversation.createMessage({ creator: 'Ai', text: [], done: true, status: 'Completed' })
        conversation.startWorkflow()
        conversation.startNode()
        onQueryStartedEvent.publish({ conversationId, query: str, filesPath: paths.value[str] || [] })
      },
      conversationOnMessage(conversationId: string, text: string) {
        const conversation = conversationMap[conversationId]
        if (!conversation) {
          throw new Error('conversation not found')
        }
        conversation.onMessage(text)
      },
    },
    events: {
      onQueryStartedEvent,
      onConnectedEvent,
      onDisconnectedEvent,
    },
  }
})

export const AiAssistAggPluginHelper = createPluginHelperByAgg(agg)
AiAssistAggPluginHelper.registerAgg(agg)

export function useAiAssistAgg() {
  return agg.api
}
