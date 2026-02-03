import { computed, ref, type ComputedRef } from 'vue'
import { createSingletonAgg } from 'vue-fn/domain'
import type { I18nMessages, I18nMessageKeys } from './message'
import enUS from './locale/en-US'
import zhCN from './locale/zh-CN'

export const validLanguages = ['zh-CN', 'en-US'] as const
export type Language = (typeof validLanguages)[number]

const agg = createSingletonAgg(() => {
  const locale = ref<I18nMessages>(zhCN)
  const currentLanguage = ref<Language>('zh-CN')

  function t(key: I18nMessageKeys, defaultValue?: string): string
  function t(
    key: I18nMessageKeys,
    attr: Record<string, string | number>,
    defaultValue?: string,
  ): string
  function t(
    key: I18nMessageKeys,
    attr1?: string | Record<string, string | number>,
    attr2?: string,
  ): string {
    let v = locale.value[key]
    if (!v) {
      if (typeof attr1 === 'string') {
        v = attr1
      } else if (typeof attr2 === 'string') {
        v = attr2
      }
    }
    if (!v) {
      return ''
    }
    if (typeof attr1 === 'object') {
      v = v.replace(/\{\s*([a-zA-z_]+)\s*\}/g, (_, name) => {
        return String(attr1[name])
      })
    }
    return v
  }

  function $t(key: I18nMessageKeys, defaultValue?: string): ComputedRef<string>
  function $t(
    key: I18nMessageKeys,
    attr: Record<string, string | number>,
    defaultValue?: string,
  ): ComputedRef<string>
  function $t(
    key: I18nMessageKeys,
    attr1?: string | Record<string, string | number>,
    attr2?: string,
  ): ComputedRef<string> {
    if (typeof attr1 === 'object') {
      return computed(() => t(key, attr1, attr2))
    }
    return computed(() => t(key, attr1))
  }

  function setLanguage(lang: Language) {
    if (lang === 'en-US') {
      locale.value = enUS
    } else if (lang === 'zh-CN') {
      locale.value = zhCN
    } else {
      isNever(lang)
    }
    currentLanguage.value = lang || 'en-US'
  }
  return {
    states: {
      currentLanguage,
    },
    commands: {
      setLanguage,
      t,
      $t,
    },
  }
})

export function useI18nAgg() {
  return agg.api
}
