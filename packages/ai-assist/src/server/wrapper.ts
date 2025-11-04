import http from 'node:http'
import type { HttpMethod } from './define'
import { nextClientId } from './common'

export type HttpWrapper = ReturnType<typeof useWrapper>

const clientMap = new Map<number, HttpWrapper>()

export function useWrapper(prefix: string, req: http.IncomingMessage, res: http.ServerResponse) {
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
      return method === reqMethod && prefix + path === reqPathname
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
