import * as esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

// 获取命令行参数
const args = process.argv.slice(2) // 从第3个元素开始截取（跳过node和脚本路径）
// 查找并解析 --source 参数
let sourcePath = null
for (const arg of args) {
  if (arg.startsWith('--source=')) {
    sourcePath = arg.split('=')[1] // 提取等号后面的值
    break
  }
}
if (!sourcePath) {
  throw new Error('missing --source=<path>')
}

if (
  !fs.existsSync(path.join(sourcePath, 'node_modules')) ||
  !fs.statSync(path.join(sourcePath, 'node_modules')).isDirectory() ||
  fs.existsSync(path.join(sourcePath, 'package.json'))
) {
  throw new Error('not a workspace: ' + sourcePath)
}
const esmPath = path.resolve(sourcePath, '.output', 'esm')
if (fs.existsSync(esmPath)) {
  fs.rmSync(esmPath, { recursive: true, force: true })
}
fs.mkdirSync(esmPath, { recursive: true })

copyFolderRecursive(path.join(sourcePath, 'node_modules'), path.join(esmPath, 'node_modules'))

const files = fs.readdirSync(sourcePath)
for (const file of files) {
  if (file.endsWith('.ts')) {
    console.log('compile', `${sourcePath.replaceAll('\\', '/')}/${file}`)
    esbuild.build({
      bundle: true,
      external: ['@ddd-tool/domain-designer-core'],
      entryPoints: [`${sourcePath.replaceAll('\\', '/')}/${file}`],
      drop: ['debugger'],
      minify: true,
      outfile: `${esmPath.replaceAll('\\', '/')}/${file.replace(/\.ts$/, '.mjs')}`,
      // sourcemap: true,
      format: 'esm',
      // format: 'cjs',
      platform: 'node',
      plugins: [],
      target: 'node18',
      // tsconfig: path.join(__dirname, '..', 'tsconfig.build-cli.json'),
    })
  }
}

function copyFolderRecursive(src, dest, opts = {}) {
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
