import path from 'path'
import fs from 'fs'

import { getGenCodeScript, getGitignore, getRunWebScript, InitCommandArgs, SubcommandEnum } from './define'
import { useI18nAgg } from '../i18n-agg'
import { copyFolderRecursive } from '@/utils/io'
import log from '@/utils/log'
import { Reactive, Ref } from '@vue/reactivity'
import { Command } from 'commander'
import { useEnvironmentAgg } from '../environment-agg'

const $t = useI18nAgg().commands.t
const environmentAgg = useEnvironmentAgg()

export function requireInitCommand(params: { currentCommand: Ref<SubcommandEnum>; args: Reactive<InitCommandArgs> }) {
  return new Command()
    .name('init')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.Init
      if (options.source) {
        params.args.source = path.resolve(options.source)
      }
    })
    .addHelpText('before', 'Initialize the workspace.\n')
    .addHelpText('before', '初始化一个工作空间\n')
}

export async function requireInitCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<InitCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.Init
}

export async function execute(args: InitCommandArgs) {
  const distDir = path.join(args.source)
  if (!fs.existsSync(distDir) || !fs.statSync(distDir).isDirectory()) {
    throw new Error($t('error.shouldBeValidDir{dir}', { dir: distDir }))
  }
  const existsFiles = fs.readdirSync(distDir)
  const copyIgnores: string[] = []
  if (existsFiles.length > 0) {
    if (existsFiles.filter((name) => name.endsWith('.ts')).length === 0) {
      throw new Error($t('error.shouldBeValidWorkspaceOrEmptyDir{dir}', { dir: distDir }))
    }
    copyIgnores.push('simple-example.ts')
    copyIgnores.push('complex-example.ts')
    copyIgnores.push('complex-example-detail')
    copyIgnores.push('node_modules')
  }

  log.printInfo('================ 初始化工作空间: Starting... ================')
  copyFolderRecursive(path.join(environmentAgg.states.webRoot.value, 'templates'), distDir, { ignore: copyIgnores })
  const runWebScript = getRunWebScript()
  if (runWebScript) {
    fs.writeFileSync(path.join(distDir, runWebScript.name), runWebScript.content, 'utf-8')
  }
  const genCodeScript = getGenCodeScript()
  if (genCodeScript) {
    fs.writeFileSync(path.join(distDir, genCodeScript.name), genCodeScript.content, 'utf-8')
  }
  const gitignore = getGitignore()
  fs.writeFileSync(path.join(distDir, gitignore.name), gitignore.content, 'utf-8')

  log.printSuccess('================ 初始化工作空间: Succeeded ================')
}
