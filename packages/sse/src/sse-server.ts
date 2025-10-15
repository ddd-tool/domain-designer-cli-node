import http from 'node:http'

type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | undefined
type SseWrapper = ReturnType<typeof sseWrapper>
type AIQueryRequestParam = {
  model?: string
  query: string
}

const clientMap: Map<number, SseWrapper> = new Map()
const aiBaseURL = 'https://api.chatanywhere.org/v1'
const model = 'gpt-4o'
const serverPort = 3000

async function aiRequest(wrapper: SseWrapper, apiKey: string, data: AIQueryRequestParam) {
  const messages = [
    {
      role: 'system',
      content: '你是一个编程助手，请回答用户的问题。',
    },
    { role: 'user', content: data.query },
  ]
  const aiRes = await fetch(`${aiBaseURL}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      stream: true,
      model: data.model || model,
      messages,
    }),
  })

  const reader = aiRes.body?.getReader()
  const decoder = new TextDecoder('utf-8')
  for (;;) {
    const { value, done } = await reader!.read()
    if (done) break
    const str = decoder.decode(value, { stream: true })
    // 这里根据你的格式处理：直接输出、按 \n 切行、或拼到 buffer 再解析
    for (const id of clientMap.keys()) {
      console.debug('write chunk clientId: ', id, 'content: ', str)
      clientMap.get(id)?.sendMessage(str)
    }
  }
  // 可选：flush 尾部
  decoder.decode()
  // FIXME-wong 给 clientId 推消息 或者 报异常
}

function isAIQueryRequestParam(data: Record<string, string>): data is AIQueryRequestParam {
  return typeof data.query === 'string' && !!data.query
}

function nextClientId() {
  let id = 0
  return ++id
}

function sseWrapper(req: http.IncomingMessage, res: http.ServerResponse) {
  let clientId = 0
  let errorCode = NaN
  const url = new URL(req.url || '/', `http://${req.headers.host}`)
  const reqMethod = req.method?.toUpperCase() as HttpMethod
  const reqPathname = url.pathname
  console.debug('request with', reqMethod, reqPathname)

  function replyJson(statusCode: number, data: object): void
  function replyJson(statusCode: number, data: string): void
  function replyJson(statusCode: number, data: string | object) {
    let dataStr = typeof data === 'string' ? data : JSON.stringify(data)
    res.writeHead(statusCode, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    })
    res.end(dataStr)
    console.debug('reply with', statusCode, data)
  }
  return {
    getClientId() {
      return clientId
    },
    getErrorCode() {
      return errorCode
    },
    getReqMethod(): HttpMethod {
      return reqMethod
    },
    getReqPathname() {
      return reqPathname
    },
    isMatchRoute(method: HttpMethod, path: string): boolean {
      return method === reqMethod && path === reqPathname
    },
    KeepAlive() {
      clientId = nextClientId()
      clientMap.set(clientId, this)
      res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
        // CORS 视情况而定（若浏览器跨域访问）
        'Access-Control-Allow-Origin': '*',
        'X-Accel-Buffering': 'no',
        'X-Accel-Charset': 'utf-8',
      })
      this.sendHeartbeat()
      const intervalId = setInterval(() => {
        this.sendHeartbeat()
      }, 8000)
      req.on('close', () => {
        clientMap.delete(clientId)
        intervalId && clearInterval(intervalId)
      })
    },
    sendHeartbeat() {
      res.write(': heartbeat\n')
    },
    sendMessage(data: string) {
      res.write(`data: ${data}\n\n`)
    },
    getReqParams() {
      return url.searchParams
    },
    getReqHeaders() {
      return req.headers
    },
    async readReqBodyJson<T>(): Promise<T> {
      return await new Promise((resolve, reject) => {
        const chunks: Buffer[] = []
        req.on('data', (c) => chunks.push(c))
        req.on('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString()))
          } catch (error) {
            errorCode = 400
            reject(error)
          }
        })
        req.on('error', reject)
      })
    },
    replyJson,
    reply(statusCode: number, data: string = '') {
      res.writeHead(statusCode, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      })
      res.end(data)
      console.debug('reply with', statusCode, data)
    },
  }
}

export function startServer() {
  const server = http.createServer(async (req, res) => {
    const wrapper = sseWrapper(req, res)

    try {
      if (wrapper.isMatchRoute('GET', '/connect')) {
        wrapper.KeepAlive()
      } else if (wrapper.isMatchRoute('POST', '/query')) {
        const data = await wrapper.readReqBodyJson<Record<string, string>>()
        const token = wrapper.getReqHeaders().authorization?.substring('Bearer '.length)
        if (!token?.length) {
          wrapper.replyJson(403, { error: 'Need a token in header. Authorization: Bearer <token>' })
          return
        } else if (!isAIQueryRequestParam(data)) {
          wrapper.replyJson(400, { error: 'Invalid request' })
          return
        }
        aiRequest(wrapper, token, data)
        wrapper.replyJson(200, {})
      } else if (wrapper.isMatchRoute('GET', '/test')) {
        wrapper.reply(200, 'OK')
      } else {
        wrapper.replyJson(404, { error: 'Not found' })
        return
      }
    } catch (e) {
      wrapper.replyJson(wrapper.getErrorCode() || 500, { error: e })
      console.error(e)
    }
  })
  server.listen(serverPort, () => {
    console.log(`SSE Server listening on http://localhost:${serverPort}`)
  })
}
