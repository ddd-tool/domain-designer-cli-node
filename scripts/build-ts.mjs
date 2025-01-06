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

const files = fs.readdirSync(sourcePath)
for (const file of files) {
  if (file.endsWith('.ts')) {
    console.log('compile', `${sourcePath.replaceAll('\\', '/')}/${file}`)
    esbuild.build({
      bundle: true,
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
      tsconfig: path.join(__dirname, '..', 'tsconfig.json'),
    })
  }
}
