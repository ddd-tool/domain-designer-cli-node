import { useI18nAgg } from '@/domain/i18n-agg'
import { types } from '@ddd-tool/domain-designer-generator'
import prompts from 'prompts'
import * as signal from '@/utils/signal'

const { t: $t } = useI18nAgg().commands

export async function requireGenCsharpContext(): Promise<types.csharp.CSharpContext> {
  const context = {} as types.csharp.CSharpContext
  const { namespace, additions } = await prompts(
    [
      {
        name: 'namespace',
        type: 'text',
        message: $t('question.subcommand.genCode.namespace'),
        initial: 'WebApplication1.Domain',
      },
      {
        name: 'additions',
        type: 'multiselect',
        message: $t('question.subcommand.genCode.csharp.additions'),
        choices: [
          {
            title: types.csharp.CSharpGeneratorAddition.Timezone,
            value: types.csharp.CSharpGeneratorAddition.Timezone,
            selected: true,
            description: $t('question.subcommand.genCode.csharp.additions.timezone'),
          },
          {
            title: types.csharp.CSharpGeneratorAddition.RecordStruct,
            value: types.csharp.CSharpGeneratorAddition.RecordStruct,
            selected: true,
            description: $t('question.subcommand.genCode.csharp.additions.recordStruct'),
          },
          {
            title: types.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            value: types.csharp.CSharpGeneratorAddition.PrimaryConstructor,
            selected: true,
            description: $t('question.subcommand.genCode.csharp.additions.primaryConstructor'),
          },
          {
            title: types.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            value: types.csharp.CSharpGeneratorAddition.CommandHandlerInterface,
            selected: false,
            description: $t('question.subcommand.genCode.csharp.additions.commandHandlerInterface'),
          },
          {
            title: types.csharp.CSharpGeneratorAddition.AggInterface,
            value: types.csharp.CSharpGeneratorAddition.AggInterface,
            selected: false,
            description: $t('question.subcommand.genCode.csharp.additions.aggInterface'),
          },
        ],
        hint: $t('question.subcommand.genCode.additions.hint'),
      },
    ],
    { onCancel: signal.onCancel },
  )
  context.additions = new Set(additions)
  context.namespace = namespace

  if (context.additions.has(types.csharp.CSharpGeneratorAddition.CommandHandlerInterface)) {
    const { commandHandlerInterface } = await prompts(
      [
        {
          name: 'commandHandlerInterface',
          type: 'text',
          message: $t('question.subcommand.genCode.csharp.additions.commandHandlerInterface.hint'),
        },
      ],
      { onCancel: signal.onCancel },
    )
    context.commandHandlerInterface = commandHandlerInterface
  }
  if (context.additions.has(types.csharp.CSharpGeneratorAddition.AggInterface)) {
    const { aggInterface } = await prompts(
      [
        {
          name: 'aggInterface',
          type: 'text',
          message: $t('question.subcommand.genCode.csharp.additions.aggInterface.hint'),
        },
      ],
      { onCancel: signal.onCancel },
    )
    context.aggInterface = aggInterface
  }
  return context
}
