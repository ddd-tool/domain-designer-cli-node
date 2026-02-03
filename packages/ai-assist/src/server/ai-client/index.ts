import OpenAI from 'openai'
import { AIName } from './config'
import fs from 'fs'
import { getClient } from './client'
import type { AiMessage } from './define'
import { FileCreateParams } from 'openai/resources/files.mjs'

type DeepSeekChatCompletionMessageParam =
  OpenAI.Chat.ChatCompletionMessageParam & {
    attachments?: {
      file_id: string
      tools: { type: 'file_search' }[]
    }[]
  }

export async function queryStream(
  aiName: AIName,
  key: string,
  query: string,
  attachments: string[] = [],
  messageResult: AiMessage[] = [],
) {
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
      ...messageResult,
      {
        role: 'system',
        content: '你是一个编程助手，请回答用户的问题。',
      },
      userMessage,
    ],
    tools: [],
    temperature: 0,
    stream: true,
  })
}

export async function kimiQueryStream(
  aiName: 'Kimi',
  key: string,
  query: string,
  messageResult: AiMessage[] = [],
) {
  const client = getClient(aiName, key)
  return await client.instance.chat.completions.create({
    model: client.model,
    messages: [
      ...messageResult,
      {
        role: 'system',
        content: '你是一个编程助手，请回答用户的问题。',
      },
      {
        role: 'user',
        content: query,
      },
    ],
    temperature: 0,
    stream: true,
  })
}

export async function upload(
  aiName: AIName,
  key: string,
  fileStream: fs.ReadStream,
) {
  // try {
  //   const client = getClient(aiName, key)
  //   const file = await client.instance.files.create({
  //     file: fileStream,
  //     purpose: 'user_data',
  //   })
  //   return file
  // } finally {
  //   fileStream && !fileStream.closed && fileStream.close()
  // }
}

export async function kimiUpload(
  aiName: 'Kimi',
  key: string,
  filePath: string,
  messageResult: AiMessage[] = [],
) {
  const client = getClient(aiName, key)
  if (!fs.existsSync(filePath)) {
    console.error('文件不存在', filePath)
    throw new Error('文件不存在')
  }
  const file_object = await client.instance.files.create({
    file: fs.createReadStream(filePath),
    purpose: 'file-extract',
  } as unknown as FileCreateParams)
  let content = await (
    await client.instance.files.content(file_object.id)
  ).text()
  // const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
  messageResult.push({
    role: 'system',
    content,
  })
  return messageResult
}
