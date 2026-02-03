import { types } from '@ddd-tool/domain-designer-generator'
import * as signal from '@/utils/signal'
import { useI18nAgg } from '@/domain/i18n-agg'
import prompts from 'prompts'

const { t: $t } = useI18nAgg().commands

export async function requireGenKotlinContext(): Promise<types.kotlin.KotlinContext> {
  const context = {} as types.kotlin.KotlinContext
  const { namespace, additions } = await prompts(
    [
      {
        name: 'namespace',
        type: 'text',
        message: $t('question.subcommand.genCode.package'),
        initial: 'com.github.example',
      },
      {
        name: 'additions',
        type: 'multiselect',
        message: $t('question.subcommand.genCode.kotlin.additions'),
        choices: [
          {
            title: types.kotlin.KotlinGeneratorAddition.CommandHandler,
            value: types.kotlin.KotlinGeneratorAddition.CommandHandler,
            selected: true,
            description: $t('question.subcommand.genCode.kotlin.additions.commandHandler'),
          },
          {
            title: types.kotlin.KotlinGeneratorAddition.ValueClass,
            value: types.kotlin.KotlinGeneratorAddition.ValueClass,
            selected: true,
            description: $t('question.subcommand.genCode.kotlin.additions.valueClass'),
          },
          {
            title: types.kotlin.KotlinGeneratorAddition.Timezone,
            value: types.kotlin.KotlinGeneratorAddition.Timezone,
            description: $t('question.subcommand.genCode.kotlin.additions.timezone'),
          },
        ],
        hint: $t('question.subcommand.genCode.additions.hint'),
      },
    ],
    { onCancel: signal.onCancel },
  )
  context.namespace = namespace
  context.additions = new Set(additions)
  return context
}
