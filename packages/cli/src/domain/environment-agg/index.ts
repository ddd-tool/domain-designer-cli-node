import { spawnSync } from 'child_process'
import os from 'os'
import path from 'path'
import { ref } from '@vue/reactivity'
import { createSingletonAgg } from 'vue-fn/domain-server'
import { OsType, PackageManager } from './types'
import { findWebRoot } from './web-root'
import log from '@/utils/log'

const agg = createSingletonAgg(() => {
  const debugMode = ref(false)
  const osType = ref(
    (function () {
      const osType = os.type()
      if (osType === 'Windows_NT') {
        return OsType.Windows
      } else if (osType === 'Linux') {
        return OsType.Linux
      } else if (osType === 'Darwin') {
        return OsType.Mac
      }
      return OsType.Undefined
    })(),
  )

  const executable = path.basename(process.argv[0])
  const packageManager = ref<PackageManager>(PackageManager.NPM)
  if (executable.includes('bun') || process.argv[1].includes('/.bun/')) {
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
        return (
          nav.language || nav.userLanguage || nav.browserLanguage || nav.systemLanguage || 'en-US'
        )
      }
      if (typeof process !== 'undefined') {
        const env = process.env
        const locale = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE
        return locale ? locale.split(/\./)[0].replace('_', '-') : 'en-US'
      }

      return 'en-US'
    })(),
  )

  const webRoot = ref(findWebRoot(osType.value, packageManager.value))

  function checkBun(): boolean {
    let status: number | null = null
    if (osType.value === 'windows') {
      const cmd = 'where.exe bun'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    } else if (osType.value === 'linux') {
      const cmd = 'hash bun'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    } else if (osType.value === 'mac') {
      const cmd = 'hash bun'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    }
    return status === 0
  }

  function checkPnpm(): boolean {
    let status: number | null = null
    if (osType.value === 'windows') {
      const cmd = 'where.exe pnpm'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    } else if (osType.value === 'linux') {
      const cmd = 'hash pnpm'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    } else if (osType.value === 'mac') {
      const cmd = 'hash pnpm'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    }
    return status === 0
  }

  function checkNpm(): boolean {
    let status: number | null = null
    if (osType.value === 'windows') {
      const cmd = 'where.exe npm'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    } else if (osType.value === 'linux') {
      const cmd = 'hash npm'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    } else if (osType.value === 'mac') {
      const cmd = 'hash npm'
      log.printDebug(cmd)
      status = spawnSync(cmd, { encoding: 'utf-8', shell: true }).status
    }
    return status === 0
  }

  return {
    states: {
      packageManager,
      webRoot,
      osLanguage,
      debugMode,
      osType,
    },
    commands: {
      checkBun,
      checkNpm,
      checkPnpm,
      setDebugMode(v: boolean) {
        debugMode.value = v
      },
    },
  }
})

export function useEnvironmentAgg() {
  return agg.api
}
