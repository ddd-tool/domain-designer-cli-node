export const URL_CONFIG = Object.freeze({
  DeepSeek: {
    baseUrl: 'https://api.deepseek.com',
    model: 'deepseek-chat',
  },
  OpenAI: {
    baseUrl: 'https://api.deepseek.com',
    model: 'gpt-3.5-turbo',
  },
  QWen: {
    baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    model: 'qwen-plus',
  },
  Kimi: {
    baseUrl: 'https://api.moonshot.cn/v1',
    model: 'kimi-k2-thinking',
  },
})

export type AIName = keyof typeof URL_CONFIG
export const URL_SELECTIONS = Object.freeze(Object.keys(URL_CONFIG) as AIName[])
