import { spawnSync } from 'child_process'
import { RunWebCommandArgs } from './define'
import path from 'node:path'
import fs from 'node:fs'
import { useI18nAgg } from '../i18n-agg'

const $t = useI18nAgg().commands.t

export default async function (args: RunWebCommandArgs) {
  const webRoot = path.resolve(__dirname, '..').replace(/\\/g, '/')

  console.log('================ 安装运行依赖: Starting... ================')
  spawnSync(`pnpm --prefix=${webRoot} i`, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  console.log('================ 安装运行依赖: Succeeded ================')
  console.log('================ 装配代码文件: Starting... ================')
  configSource(webRoot, args.source)
  console.log('================ 装配代码文件: Succeeded ================')
  console.log('================ 运行Web服务: Starting... ================')
  spawnSync(`pnpm --prefix=${webRoot} run dev`, {
    encoding: 'utf-8',
    stdio: 'inherit',
    shell: true,
  })
}

async function configSource(webRoot: string, source: string) {
  if (!fs.existsSync(source) || !fs.statSync(source).isDirectory()) {
    throw new Error($t('error.shouldBeValidDir{dir}', { dir: source }))
  }

  const codes: string[] = []
  const matcher = new RegExp(/(.+)\.ts$/)
  fs.readdirSync(source).forEach((file) => {
    if (matcher.test(file)) {
      const name = matcher.exec(file)![1]
      codes.push(`'${name}': (await import('${path.join(source, name).replace(/\\/g, '/')}')).default,`)
    }
  })

  const mergedTsCode = `import type { DomainDesigner } from '@ddd-tool/domain-designer-core'
const data: Record<string, DomainDesigner> = {
  ${codes.join('\n  ')}
}

export default data
  `

  fs.writeFileSync(path.join(webRoot, 'src', 'views', 'index.ts'), mergedTsCode, { encoding: 'utf-8' })
}
