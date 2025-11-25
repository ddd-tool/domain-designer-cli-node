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

  log.printInfo('================ 装配代码与环境变量: Starting... ================')
  configSource(webRoot, args.source)
  configEnvironment(webRoot, args.source)
  log.printSuccess('================ 装配代码与环境变量: Succeeded ================')

  log.printInfo('================ 运行Web服务: Starting... ================')
  if (environmentAgg.states.osType.value === 'windows') {
    // 禁用 Windows 的 Ctrl+C 批处理提示
    process.stdin.on('data', () => {})
  }
  const worker = new Worker(`${webRoot}/scripts/ai-assist-worker.cjs`)
  // worker启动一个http.server
  worker.on('online', () => {
    log.printDebug('worker online')
  })
  async function onExit() {
    await worker.terminate()
  }
  process.on('SIGINT', onExit)
  process.on('SIGTERM', onExit)
  process.on('SIGQUIT', onExit)
  console.debug('worker threadId', worker.threadId)

  process.nextTick(() => {
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
  })
}

const tsSuffixMatcher = new RegExp(/(.+)\.ts$/)
const detailSuffix = '-detail'

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

  const designs: { name: string; identifier: string; importCode: string }[] = []
  let i = 0
  fs.readdirSync(source).forEach((file) => {
    if (tsSuffixMatcher.test(file)) {
      const name = tsSuffixMatcher.exec(file)![1]
      designs.push({
        name,
        identifier: `__d${++i}`,
        importCode: `(await import('${path.resolve(source, name).replace(/\\/g, '/')}')).default`,
      })
    }
  })

  const mergedTsCode = `import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

${designs
  .map((d) => {
    return `const ${d.identifier} = ${d.importCode}`
  })
  .join('\n')}

const data: Record<string, DomainDesigner> = {}

${designs
  .map((d) => {
    return `if (isDomainDesigner(${d.identifier})) {
  data['${d.name}'] = ${d.identifier}
}`
  })
  .join('\n')}

export default data
`

  fs.writeFileSync(path.join(webRoot, 'packages', 'playground', 'src', 'views', 'index.ts'), mergedTsCode, {
    encoding: 'utf-8',
  })
}

function configEnvironment(webRoot: string, workspacePath: string) {
  const result: Record<string, string[]> = {}
  fs.readdirSync(workspacePath).forEach((file) => {
    if (tsSuffixMatcher.test(file)) {
      const name = tsSuffixMatcher.exec(file)![1]
      const paths: string[] = [path.resolve(workspacePath, file)]
      const detailDir = path.join(workspacePath, name + detailSuffix)
      if (fs.existsSync(detailDir) && fs.statSync(detailDir).isDirectory()) {
        findFilesRecursive(detailDir, tsSuffixMatcher, paths)
      }
      result[name] = paths
    }
  })
  const envFilePath = path.join(webRoot, 'packages', 'playground', '.env')
  fs.writeFileSync(envFilePath, `VITE_DESIGNER_PATHS=${JSON.stringify(result)}`, { encoding: 'utf-8' })
}

function findFilesRecursive(dir: string, filter: RegExp, result: string[] = []): string[] {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      findFilesRecursive(filePath, filter, result)
    } else if (filter.test(filePath)) {
      result.push(filePath)
    }
  })
  return result
}
