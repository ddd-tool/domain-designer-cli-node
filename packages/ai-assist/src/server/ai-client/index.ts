import OpenAI from 'openai'
import { AIName, URL_CONFIG } from './config'
import fs from 'fs'

type DeepSeekChatCompletionMessageParam = OpenAI.Chat.ChatCompletionMessageParam & {
  attachments?: {
    file_id: string
    tools: { type: 'file_search' }[]
  }[]
}

const clientMap: { [name in AIName]?: { instance: OpenAI; model: 'deepseek-chat' } } = {}

export function getClient(name: AIName, key: string) {
  if (!clientMap[name]) {
    clientMap[name] = {
      instance: new OpenAI({
        baseURL: URL_CONFIG[name].baseUrl,
        apiKey: key,
      }),
      model: 'deepseek-chat',
    }
  }
  return clientMap[name]
}

export async function queryStream(aiName: AIName, key: string, query: string, attachments: string[] = []) {
  const client = getClient(aiName, key)
  const userMessage: DeepSeekChatCompletionMessageParam = {
    role: 'user',
    content: query,
    attachments: [],
  }
  for (const fileId of attachments) {
    userMessage.attachments?.push({
      file_id: fileId,
      tools: [{ type: 'file_search' }],
    })
  }
  return await client.instance.chat.completions.create({
    model: client.model,
    messages: [
      {
        role: 'system',
        content: '你是一个编程助手，请回答用户的问题。',
      },
      userMessage,
    ],
    tools: [],
    stream: true,
  })
}

export async function upload(aiName: AIName, key: string, fileStream: fs.ReadStream) {
  try {
    const client = getClient(aiName, key)
    const file = await client.instance.files.create({
      file: fileStream,
      purpose: 'user_data',
    })
    return file
  } finally {
    fileStream && !fileStream.closed && fileStream.close()
  }
}
