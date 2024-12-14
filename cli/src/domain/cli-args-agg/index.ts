import { reactive, ref } from '@vue/reactivity'
import { Command } from 'commander'
import prompts from 'prompts'
import * as BusinessUtil from '@/utils/business'
import { createSingletonAgg } from 'vue-fn/domain-server'
import { SubcommandEnum, InitCommandArgs } from './define'
import {
  requireInitCommand,
  requireInfoCommand,
  // requireUpdateCommand,
  requireInitCommandArgs,
  requireHelloCommandArgs,
  requireUpdateCommandArgs,
  requireRunWebCommand,
  requireRunWebCommandArgs,
} from './require-subcommand'
import { useI18nAgg } from '../i18n-agg'
import executeInfo from './execute-info'
import executeRunWeb from './execute-run-web'
import executeInit from './execute-init'
import path from 'node:path'

const { t: $t, setCurrentLang } = useI18nAgg().commands
function getWebRoot() {
  return path.resolve(path.dirname(process.argv[1]), '..').replace(/\\/g, '/')
}

const agg = createSingletonAgg(() => {
  const isReady = ref(false)
  const currentCommand = ref(SubcommandEnum.None)
  const debugMode = ref(false)
  const webRoot = getWebRoot()
  const source = process.cwd()
  const initCommandArgs = reactive<InitCommandArgs>({ webRoot, source })
  const updateCommandArgs = reactive<InitCommandArgs>({ webRoot, source })
  const runWebCommandArgs = reactive<InitCommandArgs>({ webRoot, source })

  const program = new Command()
    .name('domain-designer-cli')
    .option('--debug', '调试模式', false)
    .action((options) => {
      debugMode.value = options.debug
    })
    .addCommand(requireInitCommand({ currentCommand, args: initCommandArgs }))
    .addCommand(requireInfoCommand({ currentCommand }))
    // .addCommand(requireUpdateCommand({ currentCommand, args: updateCommandArgs }))
    .addCommand(requireRunWebCommand({ currentCommand, args: runWebCommandArgs }))

  function configArgsFromCommandLine() {
    program.parse(process.argv)
    if (SubcommandEnum.None !== currentCommand.value) {
      isReady.value = true
    }
  }
  configArgsFromCommandLine()

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
            // {
            //   title: $t('question.subcommand.updateDeps'),
            //   value: SubcommandEnum.UpdateDeps,
            // },
            {
              title: $t('question.subcommand.runWeb'),
              value: SubcommandEnum.RunWeb,
            },
            {
              title: $t('question.subcommand.hello'),
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
    } else if (subcommand === SubcommandEnum.UpdateDeps) {
      await requireUpdateCommandArgs({ currentCommand, args: updateCommandArgs })
    } else if (subcommand === SubcommandEnum.RunWeb) {
      await requireRunWebCommandArgs({ currentCommand, args: runWebCommandArgs })
    } else if (subcommand === SubcommandEnum.Info) {
      await requireHelloCommandArgs({ currentCommand })
    } else if (subcommand === SubcommandEnum.None) {
      return
    } else {
      isNever(subcommand)
    }
  }

  return {
    states: {
      initCommandArgs,
      updateCommandArgs,
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
        } else if (c === SubcommandEnum.UpdateDeps) {
          // await executeUpdate(updateCommandArgs)
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
