import { spawnSync } from 'child_process'
import { RunWebCommandArgs, SubcommandEnum } from './define'
import path from 'path'
import fs from 'fs'
import { useI18nAgg } from '../i18n-agg'
import log from '@/utils/log'
import packageInfo from '@/utils/package-info'
import chalk from 'chalk'
import { Reactive, Ref } from '@vue/reactivity'
import { Command } from 'commander'

const $t = useI18nAgg().commands.t

export function requireRunWebCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<RunWebCommandArgs>
}) {
  return new Command()
    .name('runWeb')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.RunWeb
      if (options.source) {
        params.args.source = options.source
      }
    })
    .addHelpText('before', 'Run web server.\n')
    .addHelpText('before', '运行 web 服务\n')
}

export async function requireRunWebCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<RunWebCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.RunWeb
}

export async function execute(args: RunWebCommandArgs) {
  const webRoot = args.webRoot
  log.printDebug('webRoot路径', webRoot)
  const packageManager = process.env.PACKAGE_MANAGER!

  log.printInfo('================ 安装运行依赖: Starting... ================')
  if (packageManager === 'bun') {
    spawnSync(`bun i --cwd "${webRoot}"`, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  } else if (packageManager === 'pnpm') {
    spawnSync(`pnpm i --prefix "${webRoot}"`, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  } else {
    isNever(packageManager)
  }
  log.printSuccess('================ 安装运行依赖: Succeeded ================')

  log.printInfo('================ 装配代码文件: Starting... ================')
  configSource(webRoot, args.source)
  log.printSuccess('================ 装配代码文件: Succeeded ================')

  log.printInfo('================ 运行Web服务: Starting... ================')
  if (packageManager === 'bun') {
    spawnSync(`bun --cwd "${webRoot}" dev`, {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    })
  } else if (packageManager === 'pnpm') {
    spawnSync(`pnpm --prefix "${webRoot}" dev`, {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    })
  } else {
    isNever(packageManager)
  }
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
    log.printWarn('检测到工作目录版本与脚手架版本不匹配')
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
