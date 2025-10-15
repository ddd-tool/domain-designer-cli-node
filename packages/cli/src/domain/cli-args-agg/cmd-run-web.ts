import { spawnSync } from 'child_process'
import { Worker } from 'worker_threads'
import { RunWebCommandArgs, SubcommandEnum } from './define'
import path from 'path'
import fs from 'fs'
import { useI18nAgg } from '../i18n-agg'
import log from '@/utils/log'
import packageInfo from '@/utils/package-info'
import chalk from 'chalk'
import { Reactive, Ref } from '@vue/reactivity'
import { Command } from 'commander'
import { useEnvironmentAgg } from '../environment-agg'
import { PackageManager } from '../environment-agg/define'
import { nextTick } from 'process'

const $t = useI18nAgg().commands.t
const environmentAgg = useEnvironmentAgg()

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
  const webRoot = environmentAgg.states.webRoot.value
  log.printDebug('webRoot路径', webRoot)
  const packageManager = environmentAgg.states.packageManager.value

  log.printInfo('================ 安装运行依赖: Starting... ================')
  if (packageManager === PackageManager.BUN) {
    const cmd = `bun i --cwd "${webRoot}"`
    log.printDebug(cmd)
    spawnSync(cmd, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  } else if (packageManager === PackageManager.PNPM) {
    const cmd = `pnpm i --prefix "${webRoot}"`
    log.printDebug(cmd)
    spawnSync(cmd, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  } else if (packageManager === PackageManager.NPM) {
    const cmd = `npm i --prefix "${webRoot}"`
    log.printDebug(cmd)
    spawnSync(cmd)
  } else {
    isNever(packageManager)
  }
  log.printSuccess('================ 安装运行依赖: Succeeded ================')

  log.printInfo('================ 装配代码文件: Starting... ================')
  configSource(webRoot, args.source)
  log.printSuccess('================ 装配代码文件: Succeeded ================')

  log.printInfo('================ 运行Web服务: Starting... ================')

  const worker = new Worker(`${webRoot}/scripts/sse-worker.cjs`)
  worker.on('online', () => {
    log.printDebug('worker online')
  })
  console.debug('worker threadId', worker.threadId)
  // spawn('bun', ['run', '${webRoot}/scripts/example.ts'])
  // spawnSync(`bun run ./scripts/example.ts`, {
  //   encoding: 'utf-8',
  //   stdio: 'inherit',
  //   shell: true,
  // })

  if (packageManager === PackageManager.BUN) {
    const cmd = `bun --cwd "${webRoot}" dev`
    log.printDebug(cmd)
    spawnSync(cmd, {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    })
  } else if (packageManager === PackageManager.PNPM) {
    const cmd = `pnpm --prefix "${webRoot}" dev`
    log.printDebug(cmd)
    spawnSync(cmd, {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    })
  } else if (packageManager === PackageManager.NPM) {
    const cmd = `npm --prefix "${webRoot}" run dev`
    log.printDebug(cmd)
    spawnSync(cmd, {
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
    log.printWarn(
      $t('warning.needUpdate{workspaceVer}{scriptVer}', {
        workspaceVer: fs.readFileSync(versionFilePath, 'utf-8').trim(),
        scriptVer: packageInfo.version,
      })
    )
    log.print(
      chalk.bgYellow(`${environmentAgg.states.packageManager.value === 'bun' ? 'bunx ' : ''}domain-designer-cli update`)
    )
  }

  const designs: { name: string; flag: string; importCode: string }[] = []
  const tsSuffixMatcher = new RegExp(/(.+)\.ts$/)
  let i = 0
  fs.readdirSync(source).forEach((file) => {
    if (tsSuffixMatcher.test(file)) {
      const name = tsSuffixMatcher.exec(file)![1]
      designs.push({
        name,
        flag: `__d${++i}`,
        importCode: `(await import('${path.resolve(source, name).replace(/\\/g, '/')}')).default`,
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

  fs.writeFileSync(path.join(webRoot, 'packages', 'playground', 'src', 'views', 'index.ts'), mergedTsCode, {
    encoding: 'utf-8',
  })
}
