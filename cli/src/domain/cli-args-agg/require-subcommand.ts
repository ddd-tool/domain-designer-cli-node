import { Command } from 'commander'
import type { Reactive, Ref } from '@vue/reactivity'
import {
  GenCodeCommandArgs,
  InitCommandArgs,
  RunWebCommandArgs,
  SubcommandEnum,
  UpdateWorkspaceCommandArgs,
} from './define'
import prompts from 'prompts'
import { useI18nAgg } from '../i18n-agg'
import * as signal from '@/utils/signal'
import { define } from '@ddd-tool/domain-designer-generator'
const { t: $t } = useI18nAgg().commands

export function requireInfoCommand(params: { currentCommand: Ref<SubcommandEnum> }) {
  return new Command()
    .name('info')
    .action(() => {
      params.currentCommand.value = SubcommandEnum.Info
    })
    .addHelpText('before', 'Print info.\n')
    .addHelpText('before', '打印信息\n')
}

export async function requireInfoCommandArgs(params: { currentCommand: Ref<SubcommandEnum> }) {
  params.currentCommand.value = SubcommandEnum.Info
}

export function requireInitCommand(params: { currentCommand: Ref<SubcommandEnum>; args: Reactive<InitCommandArgs> }) {
  return new Command()
    .name('init')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.Init
      if (options.source) {
        params.args.source = options.source
      }
    })
    .addHelpText('before', 'Initialize the workspace.\n')
    .addHelpText('before', '初始化一个工作空间\n')
}

export async function requireInitCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<InitCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.Init
}

export function requireUpdateWorkspaceCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateWorkspaceCommandArgs>
}) {
  return new Command()
    .name('update')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.UpdateWorkspace
      if (options.source) {
        params.args.source = options.source
      }
    })
    .addHelpText('before', 'Update the workspace.\n')
    .addHelpText('before', '更新工作空间\n')
}

export async function requireUpdateWorkspaceCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateWorkspaceCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.UpdateWorkspace
}

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
  const Language = define.Language
  const java = define.java
  const { language } = await prompts(
    [
      {
        name: 'language',
        type: 'select',
        message: $t('question.subcommand.genCode.language'),
        choices: [
          {
            title: Language.Java,
            value: Language.Java,
          },
          // {
          //   title: Language.Kotlin,
          //   value: Language.Kotlin,
          // },
        ],
      },
    ],
    { onCancel: signal.onCancel }
  )
  params.args.language = language

  const additionOptions = (() => {
    if (language === (Language.Java as string)) {
      return [
        {
          title: java.JavaGeneratorAddition.Lombok,
          value: java.JavaGeneratorAddition.Lombok,
          selected: true,
          description: '@lombok.Getter',
        },
        {
          title: java.JavaGeneratorAddition.LombokBuilder,
          value: java.JavaGeneratorAddition.LombokBuilder,
          description: '@lombok.Builder',
        },
        {
          title: java.JavaGeneratorAddition.CommandHandler,
          value: java.JavaGeneratorAddition.CommandHandler,
          selected: true,
          description: 'Generate CommandHandler',
        },
        {
          title: java.JavaGeneratorAddition.RecordVakueObject,
          value: java.JavaGeneratorAddition.RecordVakueObject,
          description: 'public record ValueObject (String value) {}',
        },
        {
          title: java.JavaGeneratorAddition.Timezone,
          value: java.JavaGeneratorAddition.Timezone,
          selected: true,
          description: 'OffsetDateTime time',
        },
      ]
    }
    return []
  })()
  const { namespace, additions } = await prompts(
    [
      {
        name: 'namespace',
        type: 'text',
        message: $t(
          language === (Language.Java as string)
            ? 'question.subcommand.genCode.package'
            : 'question.subcommand.genCode.namespace'
        ),
        initial: language === (Language.Java as string) ? 'com.github.example' : 'ComGithub.Example',
      },
      {
        name: 'additions',
        type: 'multiselect',
        message: $t('question.subcommand.genCode.additions'),
        choices: additionOptions,
        hint: '- Space to select. Return to submit',
      },
    ],
    { onCancel: signal.onCancel }
  )
  params.args.context = {
    moduleName: '',
    namespace,
    additions: new Set(additions),
  }
}
