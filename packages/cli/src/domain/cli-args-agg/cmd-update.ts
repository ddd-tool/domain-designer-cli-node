import { Reactive, Ref } from '@vue/reactivity'
import {
  SubcommandEnum,
  UpdateWorkspaceCommandArgs,
  getGenCodeScript,
  getGitignore,
  getRunWebScript,
} from './define'
import { Command } from 'commander'
import fs from 'fs'
import path from 'path'
import packageInfo from '@/utils/package-info'
import log from '@/utils/log'
import { copyFolderRecursive, deleteFolderRecursive } from '@/utils/io'
import { useEnvironmentAgg } from '../environment-agg'

const environmentAgg = useEnvironmentAgg()

export function requireUpdateWorkspaceCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateWorkspaceCommandArgs>
}) {
  return new Command()
    .name('update')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.UpdateWorkspace
      if (options.source) {
        params.args.source = path.resolve(options.source)
      }
    })
    .addHelpText('before', 'Update the workspace.\n')
    .addHelpText('before', '更新工作空间\n')
}

export async function requireUpdateWorkspaceCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateWorkspaceCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.UpdateWorkspace
}

export async function execute(args: Readonly<UpdateWorkspaceCommandArgs>) {
  const distDir = path.join(args.source)
  log.printInfo('================ 更新依赖: Starting... ================')
  if (
    !fs.existsSync(path.join(distDir, 'node_modules')) ||
    fs.existsSync(path.join(args.source, 'package.json'))
  ) {
    log.printWarn('该目录不是工作空间，无法更新')
    log.printWarn('================ 更新依赖: End ================')
    return
  }

  const versionFilePath = path.join(distDir, 'node_modules', 'version.txt')
  const workspaceVer = !fs.existsSync(versionFilePath)
    ? 'unknown'
    : !fs.statSync(versionFilePath).isFile()
      ? 'unknown'
      : fs.readFileSync(versionFilePath).toString().trim()

  if (workspaceVer === packageInfo.version) {
    log.print('工作目录已是最新版本，无需更新')
    log.printSuccess('================ 更新依赖: Succeeded ================')
    return
  }
  log.print('工作目录版本：', workspaceVer)

  deleteFolderRecursive(path.join(distDir, 'node_modules'))
  const runWebScript = getRunWebScript()
  if (runWebScript && fs.existsSync(path.join(distDir, runWebScript.name))) {
    fs.rmSync(path.join(distDir, runWebScript.name))
  }
  const genCodeScript = getGenCodeScript()
  if (genCodeScript && fs.existsSync(path.join(distDir, genCodeScript.name))) {
    fs.rmSync(path.join(distDir, genCodeScript.name))
  }
  const gitignore = getGitignore()
  if (fs.existsSync(path.join(distDir, gitignore.name))) {
    fs.rmSync(path.join(distDir, gitignore.name))
  }

  copyFolderRecursive(
    path.join(environmentAgg.states.webRoot.value, 'templates'),
    distDir,
    {
      ignore: [
        'simple-example.ts',
        'complex-example.ts',
        'complex-example-detail',
      ],
    },
  )
  if (runWebScript) {
    fs.writeFileSync(
      path.join(distDir, runWebScript.name),
      runWebScript.content,
      'utf-8',
    )
  }
  if (genCodeScript) {
    fs.writeFileSync(
      path.join(distDir, genCodeScript.name),
      genCodeScript.content,
      'utf-8',
    )
  }
  fs.writeFileSync(
    path.join(distDir, gitignore.name),
    gitignore.content,
    'utf-8',
  )

  log.print(`目录已更新至 ${packageInfo.version}`)

  log.printSuccess('================ 更新依赖: Succeeded ================')
}
