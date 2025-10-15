import { parentPort } from 'worker_threads'
import './worker'

parentPort?.on('message', () => {})
