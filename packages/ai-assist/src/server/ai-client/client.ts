import OpenAI from 'openai'
import { AIName, URL_CONFIG } from './config'

const clientMap: { [name in AIName]?: { instance: OpenAI; model: string } } = {}

export function getClient(name: AIName, key: string) {
  if (!clientMap[name]) {
    clientMap[name] = {
      instance: new OpenAI({
        baseURL: URL_CONFIG[name].baseUrl,
        apiKey: key,
      }),
      model: URL_CONFIG[name].model,
    }
  }
  return clientMap[name]
}
