import log from '@/utils/log'
import fs from 'fs'
import path from 'path'
import { GenCodeCommandArgs, Subcommand } from '../types'
import { spawnSync } from 'child_process'
import { DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'
import {
  useGeneratorAgg,
  GeneratorPliginHelper,
  GENERATOR_JAVA_PLUGIN,
  GENERATOR_KOTLIN_PLUGIN,
  types,
  GENERATOR_CSHARP_PLUGIN,
  GENERATOR_GO_PLUGIN,
} from '@ddd-tool/domain-designer-generator'
import { useI18nAgg } from '../../i18n-agg'
import { Command } from 'commander'
import { Reactive, Ref } from '@vue/reactivity'
import prompts from 'prompts'
import * as signal from '@/utils/signal'
import { requireGenJavaContext } from './gen-java'
import { deleteFolderRecursive } from '@/utils/io'
import { requireGenKotlinContext } from './gen-kotlin'
import { requireGenCsharpContext } from './gen-csharp'
import { requireGenGoContext } from './gen-go'
import chalk from 'chalk'
import packageInfo from '@/utils/package-info'
import { useEnvironmentAgg } from '@/domain/environment-agg'

const { t: $t } = useI18nAgg().commands
const environmentAgg = useEnvironmentAgg()

export function requireGenCodeCommand(params: {
  currentCommand: Ref<Subcommand>
  args: Reactive<GenCodeCommandArgs>
}) {
  return new Command()
    .name('genCode')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = Subcommand.GenCode
      if (options.source) {
        params.args.source = path.resolve(options.source)
      }
    })
    .addHelpText('before', 'Generate code.\n')
    .addHelpText('before', '生成代码\n')
}

export async function requireGenCodeCommandArgs(params: {
  currentCommand: Ref<Subcommand>
  args: Reactive<GenCodeCommandArgs>
}) {
  const language: types.Language = (
    await prompts(
      [
        {
          name: 'language',
          type: 'select',
          message: $t('question.subcommand.genCode.language'),
          choices: [
            {
              title: types.Language.CSharp,
              value: types.Language.CSharp,
            },
            {
              title: types.Language.Go,
              value: types.Language.Go,
            },
            {
              title: types.Language.Java,
              value: types.Language.Java,
            },
            {
              title: types.Language.Kotlin,
              value: types.Language.Kotlin,
            },
          ],
        },
      ],
      { onCancel: signal.onCancel },
    )
  ).language
  params.args.language = language

  if (language === types.Language.Java) {
    params.args.context = await requireGenJavaContext()
  } else if (language === types.Language.Kotlin) {
    params.args.context = await requireGenKotlinContext()
  } else if (language === types.Language.CSharp) {
    params.args.context = await requireGenCsharpContext()
  } else if (language === types.Language.Go) {
    params.args.context = await requireGenGoContext()
  } else {
    isNever(language)
  }
}

export async function execute(args: Required<GenCodeCommandArgs>) {
  const webRoot = environmentAgg.states.webRoot.value
  const sourcePath = args.source
  const packageManager = environmentAgg.states.packageManager.value

  const versionFilePath = path.join(sourcePath, 'node_modules', 'version.txt')
  if (
    !fs.existsSync(versionFilePath) ||
    !fs.statSync(versionFilePath).isFile() ||
    fs.readFileSync(versionFilePath, 'utf-8').trim() !== packageInfo.version
  ) {
    log.printWarn('检测到工作目录版本与脚手架版本不匹配')
    log.printWarn('当前工作目录版本：', fs.readFileSync(versionFilePath, 'utf-8').trim())
    log.printWarn('脚手架版本：      ', packageInfo.version)
    log.printWarn('如果要以本地脚手架版本为准，请执行在工作目录执行update命令进行更新')
    log.print(
      chalk.bgYellow(`${packageManager === 'bun' ? 'bunx ' : ''}domain-designer-cli update`),
    )
  }

  log.printInfo('================ Install dependencies: Starting... ================')
  if (packageManager === 'bun') {
    spawnSync(`bun i --cwd "${webRoot}"`, {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    })
  } else if (packageManager === 'pnpm') {
    spawnSync(`pnpm i --prefix "${webRoot}"`, {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    })
  } else if (packageManager === 'npm') {
    spawnSync(`npm i --prefix "${webRoot}"`, {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    })
  } else {
    isNever(packageManager)
  }
  log.printSuccess('================ Install dependencies: Succeeded ================')

  log.printInfo('================ Compliling ts code: Starting... ================')
  const exeCmd = packageManager === 'bun' ? 'bunx' : 'pnpx'
  // spawnSync(`pnpx zx ${webRoot.replace('\\', '/')}/scripts/build-ts.mjs --source=${sourcePath}`, {
  spawnSync(
    `${exeCmd} zx ${webRoot.replace(/\\/g, '/')}/scripts/build-ts.mjs --source=${sourcePath}`,
    {
      encoding: 'utf-8',
      stdio: 'inherit',
      shell: true,
    },
  )
  log.printSuccess('================ Compliling ts code: Succeeded ================')

  log.printInfo('================ Generating code: Starting... ================')

  const files = fs.readdirSync(path.join(sourcePath, '.output', 'esm'))

  let agg: ReturnType<typeof useGeneratorAgg>
  let pluginLoaded = false

  deleteFolderRecursive(`${sourcePath.replace(/\\/g, '/')}/.output/${args.language}`)

  for (const file of files) {
    if (
      fs.statSync(path.join(sourcePath, '.output', 'esm', file)).isDirectory() ||
      !file.endsWith('.mjs')
    ) {
      continue
    }
    const m = await import(`file://${sourcePath.replace(/\\/g, '/')}/.output/esm/${file}`)
    if (!m || !isDomainDesigner(m.default)) {
      continue
    }
    const designer = m.default satisfies DomainDesigner
    if (!pluginLoaded) {
      if (args.language === types.Language.Java) {
        GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
      } else if (args.language === types.Language.Kotlin) {
        GeneratorPliginHelper.registerPlugin(GENERATOR_KOTLIN_PLUGIN)
      } else if (args.language === types.Language.CSharp) {
        GeneratorPliginHelper.registerPlugin(GENERATOR_CSHARP_PLUGIN)
      } else if (args.language === types.Language.Go) {
        GeneratorPliginHelper.registerPlugin(GENERATOR_GO_PLUGIN)
      } else {
        isNever(args.language)
      }
      pluginLoaded = true
    }
    agg = useGeneratorAgg(designer)
    agg.commands.setDomainDesigner(designer)
    args.context.moduleName =
      designer._getContext().getDesignerOptions().moduleName || file.split('.')[0]
    agg.commands.setContext(args.context)
    const codeFiles = agg.commands.genCodeFiles()
    for (const codeFile of codeFiles) {
      const p = path.join(sourcePath, '.output', args.language, ...codeFile.getParentDir())
      if (!fs.existsSync(p)) {
        fs.mkdirSync(p, { recursive: true })
      }
      fs.writeFileSync(path.join(p, codeFile.getName()), codeFile.getContent(), 'utf-8')
    }
  }

  log.printSuccess('================ Generating code: Succeeded ================')
}
