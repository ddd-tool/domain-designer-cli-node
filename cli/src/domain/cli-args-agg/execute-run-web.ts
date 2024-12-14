import { spawnSync } from 'child_process'
import { RunWebCommandArgs } from './define'
import path from 'node:path'
import fs from 'node:fs'

export default async function (args: RunWebCommandArgs) {
  console.log('================ 安装运行依赖: Starting... ================')
  spawnSync('npm i', { encoding: 'utf-8', stdio: 'inherit', shell: true })
  console.log('================ 安装运行依赖: Succeeded ================')
  console.log('================ 装配代码文件: Starting... ================')
  configSource(args.source)
  console.log('================ 装配代码文件: Succeeded ================')
  console.log('================ 运行Web服务: Starting... ================')
  spawnSync('npm run dev', { encoding: 'utf-8', stdio: 'inherit', shell: true })
}

async function configSource(source: string) {
  const projectRoot = path.join(__dirname, '..')

  const mergedTsCode = `import type { DomainDesigner } from '@ddd-tool/domain-designer-core'
  const data: Record<string, DomainDesigner> = {
    'design-zh': (await import('./design-zh')).default,
    'design-en': (await import('./design-en')).default,
  }

  export default data
  `

  fs.writeFileSync(path.join(projectRoot, 'src', 'views', 'index.ts'), mergedTsCode, { encoding: 'utf-8' })
}
