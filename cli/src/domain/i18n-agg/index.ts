import { ref } from '@vue/reactivity'
import { createSingletonAgg } from 'vue-fn/domain-server'
import enUS from './locale/en-US'
import zhCN from './locale/zh-CN'
import { I18nMessages, I18nMessagesKey } from './messages'
import log from '@/utils/log'

export const validLanguages = ['en', 'zh'] as const
export type Language = (typeof validLanguages)[number]

const agg = createSingletonAgg(() => {
  const currentLang = ref<Language>('zh')
  const locale = ref<I18nMessages>(enUS)

  function t(key: I18nMessagesKey, defaultValue?: string): string
  function t(key: I18nMessagesKey, attr: Record<string, string | number>, defaultValue?: string): string
  function t(key: I18nMessagesKey, attr1?: string | Record<string, string | number>, attr2?: string): string {
    let v = locale.value[key]
    if (!v) {
      if (typeof attr1 === 'string') {
        v = attr1
      } else if (typeof attr2 === 'string') {
        v = attr2
      }
    }
    if (!v) {
      log.printWarn(`i18n not found: ${key}`)
      return ''
    }
    if (typeof attr1 === 'object') {
      v = v.replace(/\{\s*([a-zA-z_]+)\s*\}/g, (_, name) => {
        return String(attr1[name])
      })
    }
    return v
  }

  return {
    states: {
      currentLang,
    },
    commands: {
      t,
      setCurrentLang(lang: Language): void {
        if (lang === 'en') {
          locale.value = enUS
        } else if (lang === 'zh') {
          locale.value = zhCN
        } else {
          isNever(lang)
        }
        currentLang.value = lang
      },
    },
  }
})

export function useI18nAgg() {
  return agg.api
}
