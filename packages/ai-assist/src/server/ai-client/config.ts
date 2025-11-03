export const URL_CONFIG = Object.freeze({
  DeepSeek: {
    baseUrl: 'https://api.deepseek.com',
  },
  OpenAI: {
    baseUrl: 'https://api.deepseek.com',
  },
})

export type AIName = keyof typeof URL_CONFIG
export const URL_SELECTIONS = Object.freeze(Object.keys(URL_CONFIG) as AIName[])
