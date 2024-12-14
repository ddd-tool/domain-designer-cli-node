import path from 'node:path'
import fs from 'node:fs'
import os from 'node:os'
import { InitCommandArgs } from './define'
import { useI18nAgg } from '../i18n-agg'

const $t = useI18nAgg().commands.t

export default async function (args: InitCommandArgs) {
  const distDir = path.join(args.source)
  if (!fs.existsSync(distDir) || !fs.statSync(distDir).isDirectory()) {
    throw new Error($t('error.shouldBeValidDir{dir}', { dir: distDir }))
  } else if (fs.readdirSync(distDir).length > 0) {
    throw new Error($t('error.shouldBeEmptyDir{dir}', { dir: distDir }))
  }

  copyFolderRecursive(path.join(args.webRoot, 'templates'), distDir)
  const runWebScript = getRunWebScript()
  if (runWebScript) {
    fs.writeFileSync(path.join(distDir, runWebScript.name), runWebScript.content, 'utf-8')
  }
}

/**
 * 递归复制文件夹内容
 * @param {string} src 源文件夹路径
 * @param {string} dest 目标文件夹路径
 */
function copyFolderRecursive(src: string, dest: string) {
  // 检查源文件夹是否存在
  if (!fs.existsSync(src)) {
    throw new Error(`Source folder does not exist: ${src}`)
  }

  // 如果目标文件夹不存在，则创建
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  // 读取源文件夹中的所有文件和子文件夹
  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name) // 源路径
    const destPath = path.join(dest, entry.name) // 目标路径

    if (entry.isDirectory()) {
      // 如果是文件夹，递归复制
      copyFolderRecursive(srcPath, destPath)
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

type Script = {
  name: string
  content: string
}

function getRunWebScript(): Script | undefined {
  const winScript = `@echo off
setlocal
set "scriptPath=%~dp0"

domain-designer-cli runWeb --source=%scriptPath%
`

  const linuxScript = `#!/bin/bash
domain-designer-cli runWeb --source="$(pwd)"
`

  const macScript = `#!/bin/bash
domain-designer-cli runWeb --source="$(pwd)"
`

  const osType = os.type()
  if (osType === 'Windows_NT') {
    return {
      name: 'RunWeb.bat',
      content: winScript,
    }
  } else if (osType === 'Linux') {
    return {
      name: 'RunWeb.sh',
      content: linuxScript,
    }
  } else if (osType === 'Darwin') {
    return {
      name: 'RunWeb.sh',
      content: macScript,
    }
  } else {
    console.error(`Unsupported OS: ${osType}`)
  }
}
