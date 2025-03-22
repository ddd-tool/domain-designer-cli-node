import { reactive, ref } from '@vue/reactivity'
import { Command, Option } from 'commander'
import prompts from 'prompts'
import log from '@/utils/log'
import * as signal from '@/utils/signal'
import { createSingletonAgg } from 'vue-fn/domain-server'
import {
  SubcommandEnum,
  InitCommandArgs,
  UpdateWorkspaceCommandArgs,
  RunWebCommandArgs,
  GenCodeCommandArgs,
} from './define'
import { useI18nAgg } from '../i18n-agg'
import packageInfo from '@/utils/package-info'
import path from 'path'
import { requireInitCommand, requireInitCommandArgs, execute as executeInit } from './cmd-init'
import { requireInfoCommand, requireInfoCommandArgs, execute as executeInfo } from './cmd-info'
import {
  requireUpdateWorkspaceCommand,
  requireUpdateWorkspaceCommandArgs,
  execute as executeUpdate,
} from './cmd-update'
import { requireRunWebCommand, requireRunWebCommandArgs, execute as executeRunWeb } from './cmd-run-web'
import { requireGenCodeCommand, requireGenCodeCommandArgs, execute as executeGenCode } from './cmd-gen-code'
import { getWebRoot } from '@/utils/check-env'

const { t: $t, setCurrentLang } = useI18nAgg().commands

const agg = createSingletonAgg(() => {
  const isReady = ref(false)
  const currentCommand = ref(SubcommandEnum.None)
  const webRoot = getWebRoot()
  const source = process.cwd()
  const initCommandArgs = reactive<InitCommandArgs>({ webRoot, source })
  const updateWorkspaceCommandArgs = reactive<UpdateWorkspaceCommandArgs>({ webRoot, source })
  const runWebCommandArgs = reactive<RunWebCommandArgs>({ webRoot, source })
  const genCodeCommandArgs = reactive<GenCodeCommandArgs>({ webRoot, source })

  const program = new Command()
    .name('domain-designer-cli')
    .version(packageInfo.version)
    .addOption(new Option('--debug', 'debug mode').default(false))
    .hook('preAction', (thisCommand) => {
      const debugMode = thisCommand.opts().debug
      if (debugMode === true) {
        log.printDebug('调试模式已开启')
        process.env.DEBUG_MODE === 'T'
      } else {
        process.env.DEBUG_MODE === 'F'
      }
    })
    .addCommand(requireInitCommand({ currentCommand, args: initCommandArgs }))
    .addCommand(requireInfoCommand({ currentCommand }))
    .addCommand(requireUpdateWorkspaceCommand({ currentCommand, args: updateWorkspaceCommandArgs }))
    .addCommand(requireRunWebCommand({ currentCommand, args: runWebCommandArgs }))
    .addCommand(requireGenCodeCommand({ currentCommand, args: genCodeCommandArgs }))

  program.parse(process.argv)

  if (SubcommandEnum.GenCode !== currentCommand.value && SubcommandEnum.None !== currentCommand.value) {
    isReady.value = true
  }

  if (process.env.DEBUG_MODE === 'T') {
    log.printDebug(typeof process.env.DEBUG_MODE, process.env.DEBUG_MODE)
    log.printDebug('- DEBUG: args信息：', `[\n\t${process.argv.join('\n\t')}\n]`)
    log.printDebug('- DEBUG: packageManager', process.env.PACKAGE_MANAGER)
  }

  async function configArgsFromUserChoise(): Promise<void> {
    const { langurage } = await prompts(
      [
        {
          name: 'langurage',
          type: 'select',
          message: 'Choose The language during this creation process',
          choices: [
            { title: '中文', value: 'zh' },
            { title: 'English', value: 'en' },
          ],
        },
      ],
      { onCancel: signal.onCancel }
    )
    setCurrentLang(langurage)

    if (currentCommand.value === SubcommandEnum.None) {
      const result = await prompts(
        [
          {
            name: 'subcommand',
            type: 'select',
            message: $t('question.subcommand'),
            choices: [
              {
                title: $t('question.subcommand.genCode'),
                value: SubcommandEnum.GenCode,
              },
              {
                title: $t('question.subcommand.init'),
                value: SubcommandEnum.Init,
              },
              {
                title: $t('question.subcommand.updateWorkspace'),
                value: SubcommandEnum.UpdateWorkspace,
              },
              {
                title: $t('question.subcommand.runWeb'),
                value: SubcommandEnum.RunWeb,
              },
              {
                title: $t('question.subcommand.info'),
                value: SubcommandEnum.Info,
              },
            ],
          },
        ],
        { onCancel: signal.onCancel }
      )
      currentCommand.value = result.subcommand
    }
    const subcommand = currentCommand.value

    if (subcommand === SubcommandEnum.Init) {
      await requireInitCommandArgs({ currentCommand, args: initCommandArgs })
    } else if (subcommand === SubcommandEnum.UpdateWorkspace) {
      await requireUpdateWorkspaceCommandArgs({ currentCommand, args: updateWorkspaceCommandArgs })
    } else if (subcommand === SubcommandEnum.RunWeb) {
      await requireRunWebCommandArgs({ currentCommand, args: runWebCommandArgs })
    } else if (subcommand === SubcommandEnum.Info) {
      await requireInfoCommandArgs({ currentCommand })
    } else if (subcommand === SubcommandEnum.GenCode) {
      await requireGenCodeCommandArgs({ currentCommand, args: genCodeCommandArgs })
    } else if (subcommand === SubcommandEnum.None) {
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
      async init() {
        if (isReady.value) {
          return
        }
        await configArgsFromUserChoise()
        isReady.value = true
      },
      async exec() {
        const c = currentCommand.value
        if (c === SubcommandEnum.Info) {
          await executeInfo()
        } else if (c === SubcommandEnum.Init) {
          await executeInit(initCommandArgs)
        } else if (c === SubcommandEnum.RunWeb) {
          await executeRunWeb(runWebCommandArgs)
        } else if (c === SubcommandEnum.UpdateWorkspace) {
          await executeUpdate(updateWorkspaceCommandArgs)
        } else if (c === SubcommandEnum.GenCode) {
          await executeGenCode(genCodeCommandArgs as Required<GenCodeCommandArgs>)
        } else if (c === SubcommandEnum.None) {
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
