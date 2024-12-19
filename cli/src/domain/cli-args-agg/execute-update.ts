import { getRunWebScript, UpdateWorkspaceCommandArgs } from './define'
import fs from 'node:fs'
import path from 'node:path'
import packageInfo from '@/utils/package-info'
import { copyFolderRecursive, deleteFolderRecursive } from '@/utils/io'

export default function (args: Readonly<UpdateWorkspaceCommandArgs>) {
  const distDir = path.join(args.source)
  console.log('================ 更新依赖: Starting... ================')
  if (!fs.existsSync(path.join(distDir, 'node_modules')) || fs.existsSync(path.join(args.source, 'package.json'))) {
    console.log('该目录不是工作空间，无法更新')
    console.log('================ 更新依赖: End ================')
    return
  }

  const versionFilePath = path.join(distDir, 'node_modules', 'version.txt')
  const workspaceVer = !fs.existsSync(versionFilePath)
    ? 'unknown'
    : !fs.statSync(versionFilePath).isFile()
    ? 'unknown'
    : fs.readFileSync(versionFilePath).toString().trim()

  if (workspaceVer === packageInfo.version) {
    console.log('工作目录已是最新版本，无需更新')
    console.log('================ 更新依赖: Succeeded ================')
    return
  }
  console.log('工作目录版本：', workspaceVer)

  deleteFolderRecursive(path.join(distDir, 'node_modules'))
  const runWebScript = getRunWebScript()
  if (runWebScript) {
    fs.rmSync(path.join(distDir, runWebScript.name))
  }

  copyFolderRecursive(path.join(args.webRoot, 'templates'), distDir, { ignore: ['示例.ts'] })
  if (runWebScript) {
    fs.writeFileSync(path.join(distDir, runWebScript.name), runWebScript.content, 'utf-8')
  }

  console.log(`目录已更新至 ${packageInfo.version}`)

  console.log('================ 更新依赖: Succeeded ================')
}
