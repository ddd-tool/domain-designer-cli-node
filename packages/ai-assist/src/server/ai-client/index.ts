import OpenAI from 'openai'
import { AIName, URL_CONFIG } from './config'
import fs from 'fs'

const clientMap: { [name in AIName]?: OpenAI } = {}

export function getClient(name: AIName, key: string) {
  if (!clientMap[name]) {
    clientMap[name] = new OpenAI({
      baseURL: URL_CONFIG[name].baseUrl,
      apiKey: key,
    })
  }
  return clientMap[name]
}

export async function queryStream(aiName: AIName, key: string, query: string) {
  const client = getClient(aiName, key)
  return await client.responses.create({
    input: [
      {
        role: 'system',
        content: '你是一个编程助手，请回答用户的问题。',
      },
      { role: 'user', content: query },
    ],
    stream: true,
  })
}

export async function upload(aiName: AIName, key: string, fileStream: fs.ReadStream) {
  try {
    const client = getClient(aiName, key)
    return await client.files.create({
      file: fileStream,
      purpose: 'assistants',
    })
  } finally {
    fileStream && !fileStream.closed && fileStream.close()
  }
}
