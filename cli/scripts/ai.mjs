#!/usr/bin/env node
const apiKey = process.env.API_KEY
const baseURL = 'https://api.chatanywhere.org/v1'
const model = 'gpt-4o'
const input = `这是什么编程语言？
  pub fn main() !void {
      std.debug.print("Hello, world!", .{});
  }
`
const messages = [
  {
    role: 'system',
    content: '你是一个编程助手，请回答用户的问题。',
  },
  { role: 'user', content: input },
]

const response = await fetch(`${baseURL}/chat/completions`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    stream: false,
    model,
    messages,
  }),
})

if (!response.ok) {
  throw new Error(await response.json())
}

const resData = await response.json()
/*
# Example
{
  id: 'chatcmpl-CJy9DmCD4LsoS8jFmNe33HZ49R4JQ',
  choices: [
    {
      index: 0,
      message: [Object],
      logprobs: null,
      finish_reason: 'stop'
    }
  ],
  created: 1758875475,
  model: 'gpt-4o',
  object: 'chat.completion',
  usage: {
    prompt_tokens: 50,
    completion_tokens: 101,
    total_tokens: 151,
    completion_tokens_details: { audio_tokens: 0, reasoning_tokens: 0 },
    prompt_tokens_details: { audio_tokens: 0, cached_tokens: 0 }
  },
  system_fingerprint: 'fp_8458c98457'
}

# choices.message
{
  role: 'assistant',
  content: '这个代码段是用 Zig 编写的。Zig 是一种通用编程语言，专注于准确性、性能和可读性。具体来说，这段代码定义了一个名为 `main` 的公共函数 ，函数返回类型是 `!void`，表示函数可以抛出错误但不返回值。`std.debug.print` 用来打印 "Hello, world!" 字符串到标准输出。',
  annotations: []
}
*/

console.log(resData?.choices[0]?.message || '抱歉，无法获取回答')
