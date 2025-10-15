import * as esbuild from 'esbuild'
import path from 'path'

const rootDir = path.join(__dirname, '..', '..', '..')

esBuild()

function esBuild() {
  esbuild.build({
    bundle: true,
    entryPoints: [path.join(__dirname, '..', 'src', 'index.ts')],
    drop: ['debugger'],
    minify: false,
    outfile: path.join(rootDir, 'scripts', 'sse-worker.cjs'),
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
