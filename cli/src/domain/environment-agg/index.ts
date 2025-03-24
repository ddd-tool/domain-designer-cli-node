import { spawnSync } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'
import { ref } from '@vue/reactivity'
import { createSingletonAgg } from 'vue-fn/domain-server'
import { PackageManager } from './define'

const agg = createSingletonAgg(() => {
  const debugMode = ref(false)
  const executable = path.basename(process.argv[0])
  const packageManager = ref<PackageManager>(PackageManager.NPM)
  if (executable.includes('bun')) {
    packageManager.value = PackageManager.BUN
  } else if (executable.includes('node')) {
    if (checkPnpm()) {
      packageManager.value = PackageManager.PNPM
    } else {
      packageManager.value = PackageManager.NPM
    }
  } else {
    throw new Error('unknown package manager')
  }

  const webRoot = ref(path.resolve(path.dirname(process.argv[1]), '..').replace(/\\/g, '/'))
  if (
    !fs.existsSync(path.join(webRoot.value, 'templates')) ||
    !fs.statSync(path.join(webRoot.value, 'templates')).isDirectory()
  ) {
    if (packageManager.value === PackageManager.BUN) {
      webRoot.value = path
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
    } else {
      throw new Error('unknown webRoot manager')
    }
  }

  const osLanguage = ref(
    (function (): string {
      if (Intl && Intl.DateTimeFormat) {
        const options = Intl.DateTimeFormat().resolvedOptions()
        if (options && options.locale) {
          return options.locale
        }
      }
      if (typeof navigator !== 'undefined') {
        const nav = navigator as any
        return nav.language || nav.userLanguage || nav.browserLanguage || nav.systemLanguage || 'en-US'
      }
      if (typeof process !== 'undefined') {
        const env = process.env
        const locale = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE
        return locale ? locale.split(/\./)[0].replace('_', '-') : 'en-US'
      }

      return 'en-US'
    })()
  )

  function checkBun(): boolean {
    const osType = checkOS()
    let status: number | null = null
    if (osType === 'windows') {
      status = spawnSync('where.exe bun', { encoding: 'utf-8', shell: true }).status
    } else if (osType === 'linux') {
      status = spawnSync('hash bun', { encoding: 'utf-8', shell: true }).status
    } else if (osType === 'mac') {
      status = spawnSync('hash bun', { encoding: 'utf-8', shell: true }).status
    }
    return status === 0
  }

  function checkPnpm(): boolean {
    const osType = checkOS()
    let status: number | null = null
    if (osType === 'windows') {
      status = spawnSync('where.exe pnpm', { encoding: 'utf-8', shell: true }).status
    } else if (osType === 'linux') {
      status = spawnSync('hash pnpm', { encoding: 'utf-8', shell: true }).status
    } else if (osType === 'mac') {
      status = spawnSync('hash pnpm', { encoding: 'utf-8', shell: true }).status
    }
    return status === 0
  }

  function checkNpm(): boolean {
    const osType = checkOS()
    let status: number | null = null
    if (osType === 'windows') {
      status = spawnSync('where.exe npm', { encoding: 'utf-8', shell: true }).status
    } else if (osType === 'linux') {
      status = spawnSync('hash npm', { encoding: 'utf-8', shell: true }).status
    } else if (osType === 'mac') {
      status = spawnSync('hash npm', { encoding: 'utf-8', shell: true }).status
    }
    return status === 0
  }

  function checkOS() {
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
  return {
    states: {
      packageManager,
      webRoot,
      osLanguage,
      debugMode,
    },
    commands: {
      checkBun,
      checkNpm,
      checkPnpm,
      checkOS,
      setDebugMode(v: boolean) {
        debugMode.value = v
      },
    },
  }
})

export function useEnvironmentAgg() {
  return agg.api
}
