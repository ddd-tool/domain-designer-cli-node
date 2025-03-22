import { spawnSync } from 'child_process'
import os from 'os'
import path from 'path'

export function getWebRoot() {
  if (process.env.PACKAGE_MANAGER === 'bun') {
    return path
      .resolve(
        path.dirname(process.argv[1]),
        '..',
        'install',
        'global',
        'node_modules',
        '@ddd-tool',
        'domain-designer-cli'
      )
      .replace(/\\/g, '/')
  }
  return path.resolve(path.dirname(process.argv[1]), '..').replace(/\\/g, '/')
}

export function checkBun(): boolean {
  const osType = checkOS()
  let status: number | null = null
  if (osType === 'windows') {
    status = spawnSync('where bun', { encoding: 'utf-8', shell: true }).status
  } else if (osType === 'linux') {
    status = spawnSync('hash bun', { encoding: 'utf-8', shell: true }).status
  } else if (osType === 'mac') {
    status = spawnSync('hash bun', { encoding: 'utf-8', shell: true }).status
  }
  return status === 0
}

export function checkPnpm(): boolean {
  const osType = checkOS()
  let status: number | null = null
  if (osType === 'windows') {
    status = spawnSync('where pnpm', { encoding: 'utf-8', shell: true }).status
  } else if (osType === 'linux') {
    status = spawnSync('hash pnpm', { encoding: 'utf-8', shell: true }).status
  } else if (osType === 'mac') {
    status = spawnSync('hash pnpm', { encoding: 'utf-8', shell: true }).status
  }
  return status === 0
}

export function checkOS() {
  const osType = os.type()
  if (osType === 'Windows_NT') {
    return 'windows'
  } else if (osType === 'Linux') {
    return 'linux'
  } else if (osType === 'Darwin') {
    return 'mac'
  }
  return 'undefined'
}
