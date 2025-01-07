import log from '@/utils/log'
import fs from 'fs'
import path from 'path'
import { GenCodeCommandArgs, SubcommandEnum } from '../define'
import { spawnSync } from 'child_process'
import { DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'
import {
  useGeneratorAgg,
  GeneratorPliginHelper,
  GENERATOR_JAVA_PLUGIN,
  GENERATOR_KOTLIN_PLUGIN,
  define,
} from '@ddd-tool/domain-designer-generator'
import { useI18nAgg } from '../../i18n-agg'
import { Command } from 'commander'
import { Reactive, Ref } from '@vue/reactivity'
import prompts from 'prompts'
import * as signal from '@/utils/signal'
import { requireGenJavaContext } from './gen-java'
import { deleteFolderRecursive } from '@/utils/io'
import { requireGenKotlinContext } from './gen-kotlin'

const { t: $t } = useI18nAgg().commands

export function requireGenCodeCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<GenCodeCommandArgs>
}) {
  return new Command()
    .name('genCode')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.GenCode
      if (options.source) {
        params.args.source = options.source
      }
    })
    .addHelpText('before', 'Generate code.\n')
    .addHelpText('before', '生成代码\n')
}

export async function requireGenCodeCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<GenCodeCommandArgs>
}) {
  const language: define.Language = (
    await prompts(
      [
        {
          name: 'language',
          type: 'select',
          message: $t('question.subcommand.genCode.language'),
          choices: [
            {
              title: define.Language.Java,
              value: define.Language.Java,
            },
            {
              title: define.Language.Kotlin,
              value: define.Language.Kotlin,
            },
          ],
        },
      ],
      { onCancel: signal.onCancel }
    )
  ).language
  params.args.language = language

  if (language === define.Language.Java) {
    params.args.context = await requireGenJavaContext()
  } else if (language === define.Language.Kotlin) {
    params.args.context = await requireGenKotlinContext()
  } else if (language === define.Language.CSharp) {
    throw new Error('C# not support, yet...')
  } else if (language === define.Language.Go) {
    throw new Error('GoLang not support, yet...')
  } else {
    isNever(language)
  }
}

export async function execute(args: Required<GenCodeCommandArgs>) {
  const webRoot = args.webRoot
  const sourcePath = args.source
  const packageManager = process.env.PACKAGE_MANAGER!

  log.printInfo('================ Install dependencies: Starting... ================')
  if (packageManager === 'bun') {
    spawnSync(`bun i --cwd "${webRoot}"`, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  } else if (packageManager === 'pnpm') {
    spawnSync(`pnpm i --prefix "${webRoot}"`, { encoding: 'utf-8', stdio: 'inherit', shell: true })
  } else {
    isNever(packageManager)
  }
  log.printSuccess('================ Install dependencies: Succeeded ================')

  log.printInfo('================ Compliling ts code: Starting... ================')
  const exeCmd = packageManager === 'bun' ? 'bunx' : 'pnpx'
  // spawnSync(`pnpx zx ${webRoot.replace('\\', '/')}/scripts/build-ts.mjs --source=${sourcePath}`, {
  spawnSync(`${exeCmd} zx ${webRoot.replace(/\\/g, '/')}/scripts/build-ts.mjs --source=${sourcePath}`, {
    encoding: 'utf-8',
    stdio: 'inherit',
    shell: true,
  })
  log.printSuccess('================ Compliling ts code: Succeeded ================')

  log.printInfo('================ Generating code: Starting... ================')

  const files = fs.readdirSync(path.join(sourcePath, '.output', 'esm'))

  let agg: ReturnType<typeof useGeneratorAgg>
  let pluginLoaded = false

  deleteFolderRecursive(`${sourcePath.replace(/\\/g, '/')}/.output/${args.language}`)

  for (const file of files) {
    if (fs.statSync(path.join(sourcePath, '.output', 'esm', file)).isDirectory() || !file.endsWith('.mjs')) {
      continue
    }
    const m = await import(`file://${sourcePath.replace(/\\/g, '/')}/.output/esm/${file}`)
    if (!isDomainDesigner(m.default)) {
      continue
    }
    const designer = m.default as DomainDesigner
    if (!pluginLoaded) {
      if (args.language === define.Language.Java) {
        GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
      } else if (args.language === define.Language.Kotlin) {
        GeneratorPliginHelper.registerPlugin(GENERATOR_KOTLIN_PLUGIN)
      } else if (args.language === define.Language.CSharp) {
        throw new Error('C# not support, yet...')
      } else if (args.language === define.Language.Go) {
        throw new Error('GoLang not support, yet...')
      } else {
        isNever(args.language)
      }
      pluginLoaded = true
    }
    agg = useGeneratorAgg(designer)
    agg.commands.setDomainDesigner(designer)
    args.context.moduleName = designer._getContext().getModuleName() || file.split('.')[0]
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
