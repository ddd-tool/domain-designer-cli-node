import { spawnSync } from 'child_process'
import { RunWebCommandArgs } from './define'
import path from 'node:path'
import fs from 'node:fs'
import { useI18nAgg } from '../i18n-agg'
import log from '@/utils/log'
import packageInfo from '@/utils/package-info'
import chalk from 'chalk'

const $t = useI18nAgg().commands.t

export default async function (args: RunWebCommandArgs) {
  const webRoot = args.webRoot
  log.printDebug('webRoot路径', webRoot)

  log.printInfo('================ 安装运行依赖: Starting... ================')
  spawnSync(`pnpm --prefix=${webRoot} i`, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  log.printSuccess('================ 安装运行依赖: Succeeded ================')
  log.printInfo('================ 装配代码文件: Starting... ================')
  configSource(webRoot, args.source)
  log.printSuccess('================ 装配代码文件: Succeeded ================')
  log.printInfo('================ 运行Web服务: Starting... ================')
  spawnSync(`pnpm --prefix=${webRoot} dev`, {
    encoding: 'utf-8',
    stdio: 'inherit',
    shell: true,
  })
}

async function configSource(webRoot: string, source: string) {
  if (!fs.existsSync(source) || !fs.statSync(source).isDirectory()) {
    throw new Error($t('error.shouldBeValidDir{dir}', { dir: source }))
  }

  const versionFilePath = path.join(source, 'node_modules', 'version.txt')
  if (
    !fs.existsSync(versionFilePath) ||
    !fs.statSync(versionFilePath).isFile() ||
    fs.readFileSync(versionFilePath, 'utf-8').trim() !== packageInfo.version
  ) {
    log.printWarn('工作目录版本与脚手架版本不匹配')
    log.printWarn('请执行在工作目录执行update命令进行更新')
    log.print(chalk.bgYellow('domain-designer-cli update'))
  }

  const designs: { name: string; flag: string; importCode: string }[] = []
  const matcher = new RegExp(/(.+)\.ts$/)
  let i = 0
  fs.readdirSync(source).forEach((file) => {
    if (matcher.test(file)) {
      const name = matcher.exec(file)![1]
      designs.push({
        name,
        flag: `__d${++i}`,
        importCode: `(await import('${path.join(source, name).replace(/\\/g, '/')}')).default`,
      })
    }
  })

  const mergedTsCode = `import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

${designs
  .map((d) => {
    return `const ${d.flag} = ${d.importCode}`
  })
  .join('\n')}

const data: Record<string, DomainDesigner> = {}

${designs
  .map((d) => {
    return `if (isDomainDesigner(${d.flag})) {
  data['${d.name}'] = ${d.flag}
}`
  })
  .join('\n')}

export default data
`

  fs.writeFileSync(path.join(webRoot, 'src', 'views', 'index.ts'), mergedTsCode, { encoding: 'utf-8' })
}
