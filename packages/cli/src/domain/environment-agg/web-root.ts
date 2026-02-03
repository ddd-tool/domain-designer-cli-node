import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { OsType, PackageManager } from './types'

export function findWebRoot(osType: OsType, packageManager: PackageManager): string {
  let webRoot = path.resolve(path.dirname(process.argv[1]), '..').replace(/\\/g, '/')
  if (!verifyWebRoot(webRoot)) {
    if (packageManager === PackageManager.BUN) {
      webRoot = path
        .resolve(
          path.dirname(process.argv[1]),
          '..',
          'install',
          'global',
          'node_modules',
          '@ddd-tool',
          'domain-designer-cli',
        )
        .replace(/\\/g, '/')
    } else if (packageManager === PackageManager.PNPM || packageManager === PackageManager.NPM) {
      if (osType === 'windows') {
        const result = spawnSync('where.exe domain-designer-cli', {
          encoding: 'utf-8',
          shell: true,
        })
        if (result.status !== 0) {
          throw new Error('domain-designer-cli not found')
        }
        const paths = path.dirname(result.stdout.split('\n')[0].trim())
        for (let p of paths.split('\n')) {
          p = path.resolve(p.trim(), '..')
          if (verifyWebRoot(p)) {
            webRoot = p
            break
          }
          // fnm
          p = path.resolve(p, 'lib', 'node_modules', '@ddd-tool', 'domain-designer-cli')
          if (verifyWebRoot(p)) {
            webRoot = p
            break
          }
        }
        mustBeWebRoot(webRoot)
      } else if (osType === 'linux' || osType === 'mac') {
        const result = spawnSync('whereis domain-designer-cli', {
          encoding: 'utf-8',
          shell: true,
        })
        if (result.status !== 0) {
          throw new Error('domain-designer-cli not found')
        }
        const paths = result.stdout.split('\n')[0].split(':')[1].trim()
        for (let p of paths.split(' ')) {
          p = path.resolve(path.dirname(p.trim()), '..')
          if (verifyWebRoot(p)) {
            webRoot = p
            break
          }
          // fnm
          p = path.resolve(p, 'lib', 'node_modules', '@ddd-tool', 'domain-designer-cli')
          if (verifyWebRoot(p)) {
            webRoot = p
            break
          }
        }
        mustBeWebRoot(webRoot)
      } else if (osType === 'undefined') {
        throw new Error('unknown os type')
      } else {
        isNever(osType)
      }
    } else {
      throw new Error('unknown webRoot manager')
    }
  }
  return webRoot
}

function verifyWebRoot(dirPath: string): boolean {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
    return false
  }
  const templatesDir = path.join(dirPath, 'templates')
  if (!fs.existsSync(templatesDir) || !fs.statSync(templatesDir).isDirectory()) {
    return false
  }
  return true
}

function mustBeWebRoot(dirPath: string): void {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
    throw new Error('webRoot is invalid')
  }
  const templatesDir = path.join(dirPath, 'templates')
  if (!fs.existsSync(templatesDir) || !fs.statSync(templatesDir).isDirectory()) {
    throw new Error('webRoot is invalid')
  }
}
