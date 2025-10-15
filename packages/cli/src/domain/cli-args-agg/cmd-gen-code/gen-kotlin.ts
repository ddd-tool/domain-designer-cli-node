import { define } from '@ddd-tool/domain-designer-generator'
import * as signal from '@/utils/signal'
import { useI18nAgg } from '@/domain/i18n-agg'
import prompts from 'prompts'

const { t: $t } = useI18nAgg().commands

export async function requireGenKotlinContext(): Promise<define.kotlin.KotlinContext> {
  const context = {} as define.kotlin.KotlinContext
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
            title: define.kotlin.KotlinGeneratorAddition.CommandHandler,
            value: define.kotlin.KotlinGeneratorAddition.CommandHandler,
            selected: true,
            description: $t('question.subcommand.genCode.kotlin.additions.commandHandler'),
          },
          {
            title: define.kotlin.KotlinGeneratorAddition.ValueClass,
            value: define.kotlin.KotlinGeneratorAddition.ValueClass,
            selected: true,
            description: $t('question.subcommand.genCode.kotlin.additions.valueClass'),
          },
          {
            title: define.kotlin.KotlinGeneratorAddition.Timezone,
            value: define.kotlin.KotlinGeneratorAddition.Timezone,
            description: $t('question.subcommand.genCode.kotlin.additions.timezone'),
          },
        ],
        hint: $t('question.subcommand.genCode.additions.hint'),
      },
    ],
    { onCancel: signal.onCancel }
  )
  context.namespace = namespace
  context.additions = new Set(additions)
  return context
}
