import { getRunWebScript, UpdateWorkspaceCommandArgs } from './define'
import fs from 'fs'
import path from 'path'
import packageInfo from '@/utils/package-info'
import log from '@/utils/log'
import { copyFolderRecursive, deleteFolderRecursive } from '@/utils/io'

export default async function (args: Readonly<UpdateWorkspaceCommandArgs>) {
  const distDir = path.join(args.source)
  log.printInfo('================ 更新依赖: Starting... ================')
  if (!fs.existsSync(path.join(distDir, 'node_modules')) || fs.existsSync(path.join(args.source, 'package.json'))) {
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
  if (runWebScript) {
    fs.rmSync(path.join(distDir, runWebScript.name))
  }

  copyFolderRecursive(path.join(args.webRoot, 'templates'), distDir, { ignore: ['示例.ts'] })
  if (runWebScript) {
    fs.writeFileSync(path.join(distDir, runWebScript.name), runWebScript.content, 'utf-8')
  }

  log.print(`目录已更新至 ${packageInfo.version}`)

  log.printSuccess('================ 更新依赖: Succeeded ================')
}
