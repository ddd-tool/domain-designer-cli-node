import { ref } from 'vue'
import { createBroadcastEvent, createSingletonAgg } from 'vue-fn/domain'

const agg = createSingletonAgg(() => {
  let eventSource: EventSource | undefined = undefined
  const apiName = ref('DeepSeek')
  const apiKey = ref('')
  const aiAssistVisible = ref(false)

  const onQueryStartedEvent = createBroadcastEvent<{ query: string }>()
  const onConnectedEvent = createBroadcastEvent<{}>()
  const onDisconnectedEvent = createBroadcastEvent<{ error: Event }>()
  return {
    states: {
      apiName,
      apiKey,
      aiAssistVisible,
    },
    commands: {
      connect(connectUrl: string) {
        eventSource = new EventSource(connectUrl)
        eventSource.onopen = () => {
          onConnectedEvent.publish({})
        }
        eventSource.onerror = (error) => {
          onDisconnectedEvent.publish({ error })
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
      query(str: string) {
        if (!str) {
          return
        }
        onQueryStartedEvent.publish({ query: str })
      },
    },
    events: {
      onQueryStartedEvent,
      onConnectedEvent,
      onDisconnectedEvent,
    },
  }
})

export function useAiAssistAgg() {
  return agg.api
}
