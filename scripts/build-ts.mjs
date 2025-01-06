import * as esbuild from 'esbuild'
import fs from 'fs'

if (fs.existsSync('F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/.output/esm')) {
  fs.rmSync('F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/.output/esm', { recursive: true, force: true })
}
fs.mkdirSync('F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/.output/esm', { recursive: true })

const files = fs.readdirSync('F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo')
for (const file of files) {
  if (file.endsWith('.ts')) {
    console.log('gen', file)
    esbuild.build({
      bundle: true,
      entryPoints: [`F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/${file}`],
      drop: ['debugger'],
      minify: true,
      outfile: `F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/.output/esm/${file.replace(
        /\.ts$/,
        '.mjs'
      )}`,
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
