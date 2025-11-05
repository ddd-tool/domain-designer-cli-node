import * as esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'
import { readPackageSync } from 'read-pkg'

const rootDir = path.join(__dirname, '..', '..', '..')
const cliRootDir = path.join(__dirname, '..')

writeEnvFile()
esBuild()

function writeEnvFile() {
  const packageInfo = readPackageSync()
  const targetFilePath = path.join(__dirname, '..', 'src', 'utils', 'package-info.ts')
  if (!fs.existsSync(targetFilePath)) {
    throw new Error(`${targetFilePath} not found`)
  } else if (!fs.statSync(targetFilePath).isFile()) {
    throw new Error(`${targetFilePath} is not a file`)
  }
  delete packageInfo.scripts
  delete packageInfo.devDependencies
  fs.writeFileSync(targetFilePath, `export default ${JSON.stringify(packageInfo, null, 2)}`, 'utf-8')
  fs.writeFileSync(path.join(rootDir, 'templates', 'node_modules', 'version.txt'), packageInfo.version, 'utf-8')

  // 将dts复制到模板目录
  // 递归删除
  fs.rmSync(path.join(rootDir, 'templates', 'node_modules', '@ddd-tool', 'domain-designer-core'), {
    recursive: true,
    force: true,
  })

  // 递归复制所有.d.ts文件
  copyFolderRecursive(
    path.join(cliRootDir, 'node_modules', '@ddd-tool', 'domain-designer-core'),
    path.join(rootDir, 'templates', 'node_modules', '@ddd-tool', 'domain-designer-core'),
    { pattern: /^.+\.d\.ts$/ }
  )
}

function esBuild() {
  esbuild.build({
    bundle: true,
    entryPoints: [path.join(__dirname, '..', 'src', 'index.ts')],
    drop: ['debugger'],
    minify: false,
    outfile: path.join(rootDir, 'bin', 'domain-designer-cli.cjs'),
    // sourcemap: true,
    loader: {
      '.wasm': 'file',
    },
    publicPath: 'pkg',
    // format: 'esm',
    format: 'cjs',
    platform: 'node',
    plugins: [],
    target: 'node18',
    tsconfig: path.join(__dirname, '..', 'tsconfig.build-cli.json'),
    banner: {
      js: '#!/usr/bin/env node',
    },
  })
}

/**
 * 递归复制文件夹内容
 * @param {string} src 源文件夹路径
 * @param {string} dest 目标文件夹路径
 * @param {object} opts 配置选项
 * @param {string[]} [opts.ignore] 要忽略的文件或文件夹名称
 */
export function copyFolderRecursive(src, dest, opts = {}) {
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

    // 检查是否需要忽略
    if (opts.ignore && opts.ignore.includes(entry.name)) {
      continue // 跳过忽略的文件或文件夹
    }
    if (opts.pattern && !opts.pattern.test(entry.name)) {
      continue // 跳过不匹配的文件或文件夹
    }

    if (entry.isDirectory()) {
      // 如果是文件夹，递归复制
      copyFolderRecursive(srcPath, destPath)
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(srcPath, destPath)
    }
  }
}
