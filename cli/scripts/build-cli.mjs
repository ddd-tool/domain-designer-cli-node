import * as esbuild from 'esbuild'
import fs from 'node:fs'
import path from 'node:path'
import { readPackageSync } from 'read-pkg'

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
}

function esBuild() {
  esbuild.build({
    bundle: true,
    entryPoints: [path.join(__dirname, '..', 'src', 'index.ts')],
    drop: ['debugger'],
    minify: true,
    outfile: path.join(__dirname, '..', '..', 'bin', 'domain-designer-cli.cjs'),
    sourcemap: true,
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
  })
}
