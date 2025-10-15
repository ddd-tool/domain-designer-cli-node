import { parentPort } from 'worker_threads'
import { startServer } from './sse-server'

const server = startServer()
parentPort?.on('message', () => {
  parentPort?.postMessage('ok')
})
