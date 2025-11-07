import http from 'node:http'
import { useWrapper } from './wrapper'
import { handleQuery } from './controller/query'
import { handleTest } from './controller/test'
import { handleUpload } from './controller/upload'
import { handleConnect } from './controller/connent'

export function startServer(serverPort: number = 3000) {
  const server = http.createServer(async (req, res) => {
    const wrapper = useWrapper('', req, res)
    try {
      if (wrapper.isMatchRoute('GET', '/connect')) {
        handleConnect(wrapper)
      } else if (wrapper.isMatchRoute('POST', '/query')) {
        await handleQuery(wrapper)
      } else if (wrapper.isMatchRoute('POST', '/upload')) {
        await handleUpload(wrapper)
      } else if (wrapper.isMatchRoute('GET', '/test')) {
        handleTest(wrapper)
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
    console.log(`SSE Server listening on http://127.0.0.1:${serverPort}`)
  })
}
