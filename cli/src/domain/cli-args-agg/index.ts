import { reactive, ref } from '@vue/reactivity'
import { Command } from 'commander'
import prompts from 'prompts'
import * as BusinessUtil from '@/utils/business'
import { createSingletonAgg } from 'vue-fn/domain-server'
import { SubcommandEnum, InitCommandArgs } from './define'
import {
  requireInitCommand,
  requireHelloCommand,
  requireUpdateCommand,
  requireInitCommandArgs,
  requireHelloCommandArgs,
  requireUpdateCommandArgs,
  requireRunWebCommand,
  requireRunWebCommandArgs,
} from './require-subcommand'
import { useI18nAgg } from '../i18n-agg'
import executeHello from './execute-hello'
import executeRunWeb from './execute-run-web'

const { t: $t, setCurrentLang } = useI18nAgg().commands

const agg = createSingletonAgg(() => {
  const isReady = ref(false)
  const currentCommand = ref(SubcommandEnum.None)
  const debugMode = ref(false)
  const initCommandArgs = reactive<InitCommandArgs>({ source: '' })
  const updateCommandArgs = reactive<InitCommandArgs>({ source: '' })
  const runWebCommandArgs = reactive<InitCommandArgs>({ source: '' })

  const program = new Command()
    .name('domain-designer-cli')
    .option('--debug', '调试模式', false)
    .action((options) => {
      debugMode.value = options.debug
    })
    .addCommand(requireInitCommand({ currentCommand, args: initCommandArgs }))
    .addCommand(requireHelloCommand({ currentCommand }))
    .addCommand(requireUpdateCommand({ currentCommand, args: updateCommandArgs }))
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
            {
              title: $t('question.subcommand.updateDeps'),
              value: SubcommandEnum.UpdateDeps,
            },
            {
              title: $t('question.subcommand.runWeb'),
              value: SubcommandEnum.RunWeb,
            },
            {
              title: $t('question.subcommand.hello'),
              value: SubcommandEnum.Hello,
            },
          ],
        },
      ],
      { onCancel: BusinessUtil.onCancel }
    )

    const subcommand = result.subcommand as SubcommandEnum
    currentCommand.value = subcommand

    if (subcommand === SubcommandEnum.Init) {
      await requireInitCommandArgs()
    } else if (subcommand === SubcommandEnum.UpdateDeps) {
      await requireUpdateCommandArgs()
    } else if (subcommand === SubcommandEnum.RunWeb) {
      await requireRunWebCommandArgs({ currentCommand, args: runWebCommandArgs })
    } else if (subcommand === SubcommandEnum.Hello) {
      await requireHelloCommandArgs()
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
        if (c === SubcommandEnum.Hello) {
          await executeHello()
        } else if (c === SubcommandEnum.RunWeb) {
          await executeRunWeb(runWebCommandArgs)
        }
      },
    },
  }
})

export function useCliArgsAgg() {
  return agg.api
}
