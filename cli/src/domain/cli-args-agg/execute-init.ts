import path from 'node:path'
import fs from 'node:fs'

import { getRunWebScript, InitCommandArgs } from './define'
import { useI18nAgg } from '../i18n-agg'
import { copyFolderRecursive } from '@/utils/io'
import log from '@/utils/log'

const $t = useI18nAgg().commands.t

export default async function (args: InitCommandArgs) {
  const distDir = path.join(args.source)
  if (!fs.existsSync(distDir) || !fs.statSync(distDir).isDirectory()) {
    throw new Error($t('error.shouldBeValidDir{dir}', { dir: distDir }))
  } else if (fs.readdirSync(distDir).length > 0) {
    throw new Error($t('error.shouldBeEmptyDir{dir}', { dir: distDir }))
  }

  log.printInfo('================ 初始化工作空间: Starting... ================')
  copyFolderRecursive(path.join(args.webRoot, 'templates'), distDir)
  const runWebScript = getRunWebScript()
  if (runWebScript) {
    fs.writeFileSync(path.join(distDir, runWebScript.name), runWebScript.content, 'utf-8')
  }

  log.printSuccess('================ 初始化工作空间: Succeeded ================')
}
