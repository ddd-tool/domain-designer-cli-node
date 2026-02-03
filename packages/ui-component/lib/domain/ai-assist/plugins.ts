import { watch, type WatchHandle } from 'vue'
import { AiAssistAggPluginHelper } from './index'

export const AI_ASSIST_PLUGIN = AiAssistAggPluginHelper.createHotSwapPlugin({
  mount({ api }) {
    console.debug('加载ai-assist存储插件')
    const API_KEY_KEY = 'ai-api-key'
    const IS_CACHE_AI_KEY = 'ai-is-cache-ai-key'
    const existIsCacheAiKey = localStorage.getItem(IS_CACHE_AI_KEY)
    const existAiKey = localStorage.getItem(API_KEY_KEY)
    if (existIsCacheAiKey === 'false') {
      api.commands.setIsCacheAiKey(false)
    } else if (existAiKey) {
      api.commands.setAiKey(existAiKey)
    }
    watch(api.states.isCacheAiKey, (value) => {
      if (value) {
        aiKeyHandle = watch(api.states.apiKey, aiKeyWatcher)
        localStorage.setItem(IS_CACHE_AI_KEY, 'true')
        if (api.states.apiKey.value) {
          localStorage.setItem(API_KEY_KEY, api.states.apiKey.value)
        }
      } else {
        aiKeyHandle && aiKeyHandle.stop()
        localStorage.setItem(IS_CACHE_AI_KEY, 'false')
        localStorage.removeItem(API_KEY_KEY)
      }
    })
    const aiKeyWatcher = (k: string) => {
      localStorage.setItem(API_KEY_KEY, k)
    }
    let aiKeyHandle: WatchHandle | null = (() => {
      return api.states.isCacheAiKey.value ? watch(api.states.apiKey, aiKeyWatcher) : null
    })()
  },
  unmount() {},
})
