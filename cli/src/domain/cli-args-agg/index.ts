import { reactive, ref } from '@vue/reactivity'
import { Command, Option } from 'commander'
import prompts from 'prompts'
import log from '@/utils/log'
import * as BusinessUtil from '@/utils/signal'
import { createSingletonAgg } from 'vue-fn/domain-server'
import { SubcommandEnum, InitCommandArgs, UpdateWorkspaceCommandArgs, RunWebCommandArgs } from './define'
import {
  requireInitCommand,
  requireInitCommandArgs,
  requireInfoCommand,
  requireInfoCommandArgs,
  requireUpdateWorkspaceCommand,
  requireUpdateWorkspaceCommandArgs,
  requireRunWebCommand,
  requireRunWebCommandArgs,
} from './require-subcommand'
import { useI18nAgg } from '../i18n-agg'
import packageInfo from '@/utils/package-info'
import executeInfo from './execute-info'
import executeInit from './execute-init'
import executeRunWeb from './execute-run-web'
import executeUpdate from './execute-update'
import path from 'path'

const { t: $t, setCurrentLang } = useI18nAgg().commands
function getWebRoot() {
  return path.resolve(path.dirname(process.argv[1]), '..').replace(/\\/g, '/')
}

const agg = createSingletonAgg(() => {
  const isReady = ref(false)
  const currentCommand = ref(SubcommandEnum.None)
  const webRoot = getWebRoot()
  const source = process.cwd()
  const initCommandArgs = reactive<InitCommandArgs>({ webRoot, source })
  const updateWorkspaceCommandArgs = reactive<UpdateWorkspaceCommandArgs>({ webRoot, source })
  const runWebCommandArgs = reactive<RunWebCommandArgs>({ webRoot, source })

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

  program.parse(process.argv)

  if (SubcommandEnum.None !== currentCommand.value) {
    isReady.value = true
  }

  if (process.env.DEBUG_MODE === 'T') {
    log.printDebug(typeof process.env.DEBUG_MODE, process.env.DEBUG_MODE)
    log.printDebug('- DEBUG: args信息：', `[\n\t${process.argv.join('\n\t')}\n]`)
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
      { onCancel: BusinessUtil.onCancel }
    )
    setCurrentLang(langurage)

    const result = await prompts(
      [
        {
          name: 'subcommand',
          type: 'select',
          message: $t('question.subcommand'),
          choices: [
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
      { onCancel: BusinessUtil.onCancel }
    )

    const subcommand = result.subcommand as SubcommandEnum
    currentCommand.value = subcommand

    if (subcommand === SubcommandEnum.Init) {
      await requireInitCommandArgs({ currentCommand, args: initCommandArgs })
    } else if (subcommand === SubcommandEnum.UpdateWorkspace) {
      await requireUpdateWorkspaceCommandArgs({ currentCommand, args: updateWorkspaceCommandArgs })
    } else if (subcommand === SubcommandEnum.RunWeb) {
      await requireRunWebCommandArgs({ currentCommand, args: runWebCommandArgs })
    } else if (subcommand === SubcommandEnum.Info) {
      await requireInfoCommandArgs({ currentCommand })
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
