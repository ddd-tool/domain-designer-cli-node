import { reactive, ref } from '@vue/reactivity'
import { Command, Option } from 'commander'
import prompts from 'prompts'
import log from '@/utils/log'
import * as signal from '@/utils/signal'
import { createSingletonAgg } from 'vue-fn/domain-server'
import {
  Subcommand,
  InitCommandArgs,
  UpdateWorkspaceCommandArgs,
  RunWebCommandArgs,
  GenCodeCommandArgs,
} from './types'
import { useI18nAgg } from '../i18n-agg'
import packageInfo from '@/utils/package-info'
import { requireInitCommand, requireInitCommandArgs, execute as executeInit } from './cmd-init'
import { requireInfoCommand, requireInfoCommandArgs, execute as executeInfo } from './cmd-info'
import {
  requireUpdateWorkspaceCommand,
  requireUpdateWorkspaceCommandArgs,
  execute as executeUpdate,
} from './cmd-update'
import {
  requireRunWebCommand,
  requireRunWebCommandArgs,
  execute as executeRunWeb,
} from './cmd-run-web'
import {
  requireGenCodeCommand,
  requireGenCodeCommandArgs,
  execute as executeGenCode,
} from './cmd-gen-code'
import { useEnvironmentAgg } from '../environment-agg'

const { t: $t, setCurrentLang } = useI18nAgg().commands
const environmentAgg = useEnvironmentAgg()

const agg = createSingletonAgg(() => {
  const isReady = ref(false)
  const currentCommand = ref<Subcommand>(Subcommand.None)
  const source = process.cwd()
  const initCommandArgs = reactive<InitCommandArgs>({ source })
  const updateWorkspaceCommandArgs = reactive<UpdateWorkspaceCommandArgs>({
    source,
  })
  const runWebCommandArgs = reactive<RunWebCommandArgs>({ source })
  const genCodeCommandArgs = reactive<GenCodeCommandArgs>({ source })

  async function init() {
    if (isReady.value) {
      return
    }
    const program = new Command()
      .name('domain-designer-cli')
      .version(packageInfo.version)
      .addOption(new Option('--debug', 'debug mode').default(false))
      .hook('preAction', (thisCommand) => {
        const debugMode = thisCommand.opts().debug
        if (debugMode === true) {
          log.printDebug('调试模式已开启')
          environmentAgg.commands.setDebugMode(true)
        } else {
          environmentAgg.commands.setDebugMode(false)
        }
      })
      .addCommand(requireInitCommand({ currentCommand, args: initCommandArgs }))
      .addCommand(requireInfoCommand({ currentCommand }))
      .addCommand(
        requireUpdateWorkspaceCommand({
          currentCommand,
          args: updateWorkspaceCommandArgs,
        }),
      )
      .addCommand(requireRunWebCommand({ currentCommand, args: runWebCommandArgs }))
      .addCommand(requireGenCodeCommand({ currentCommand, args: genCodeCommandArgs }))

    program.parse(process.argv)

    if (environmentAgg.states.debugMode.value === true) {
      log.printDebug('- DEBUG: args信息：', `[\n\t${process.argv.join('\n\t')}\n]`)
      log.printDebug('- DEBUG: packageManager', environmentAgg.states.packageManager.value)
    }

    if (Subcommand.GenCode !== currentCommand.value && Subcommand.None !== currentCommand.value) {
      isReady.value = true
      return
    }

    await configArgsFromUserChoise()
    isReady.value = true
  }

  async function configArgsFromUserChoise(): Promise<void> {
    let lang = environmentAgg.states.osLanguage.value as 'zh' | 'en'
    if (lang.startsWith('zh')) {
      lang = 'zh'
    } else if (lang.startsWith('en')) {
      lang = 'en'
    } else {
      const { language } = await prompts(
        [
          {
            name: 'language',
            type: 'select',
            message: 'Choose The language during this creation process',
            choices: [
              { title: '中文', value: 'zh' },
              { title: 'English', value: 'en' },
            ],
          },
        ],
        { onCancel: signal.onCancel },
      )
      lang = language
    }
    setCurrentLang(lang)

    if (currentCommand.value === Subcommand.None) {
      const result = await prompts(
        [
          {
            name: 'subcommand',
            type: 'select',
            message: $t('question.subcommand'),
            choices: [
              {
                title: $t('question.subcommand.genCode'),
                value: Subcommand.GenCode,
              },
              {
                title: $t('question.subcommand.init'),
                value: Subcommand.Init,
              },
              {
                title: $t('question.subcommand.updateWorkspace'),
                value: Subcommand.UpdateWorkspace,
              },
              {
                title: $t('question.subcommand.runWeb'),
                value: Subcommand.RunWeb,
              },
              {
                title: $t('question.subcommand.info'),
                value: Subcommand.Info,
              },
            ],
          },
        ],
        { onCancel: signal.onCancel },
      )
      currentCommand.value = result.subcommand
    }
    const subcommand = currentCommand.value

    if (subcommand === Subcommand.Init) {
      await requireInitCommandArgs({ currentCommand, args: initCommandArgs })
    } else if (subcommand === Subcommand.UpdateWorkspace) {
      await requireUpdateWorkspaceCommandArgs({
        currentCommand,
        args: updateWorkspaceCommandArgs,
      })
    } else if (subcommand === Subcommand.RunWeb) {
      await requireRunWebCommandArgs({
        currentCommand,
        args: runWebCommandArgs,
      })
    } else if (subcommand === Subcommand.Info) {
      await requireInfoCommandArgs({ currentCommand })
    } else if (subcommand === Subcommand.GenCode) {
      await requireGenCodeCommandArgs({
        currentCommand,
        args: genCodeCommandArgs,
      })
    } else if (subcommand === Subcommand.None) {
      return
    } else {
      isNever(subcommand)
    }
  }

  return {
    states: {
      initCommandArgs,
      updateCommandArgs: updateWorkspaceCommandArgs,
    },
    commands: {
      init,
      async exec() {
        const c = currentCommand.value
        if (c === Subcommand.Info) {
          await executeInfo()
        } else if (c === Subcommand.Init) {
          await executeInit(initCommandArgs)
        } else if (c === Subcommand.RunWeb) {
          await executeRunWeb(runWebCommandArgs)
        } else if (c === Subcommand.UpdateWorkspace) {
          await executeUpdate(updateWorkspaceCommandArgs)
        } else if (c === Subcommand.GenCode) {
          await executeGenCode(genCodeCommandArgs as Required<GenCodeCommandArgs>)
        } else if (c === Subcommand.None) {
        } else {
          isNever(c)
        }
      },
    },
  }
})

export function useCliArgsAgg() {
  return agg.api
}
