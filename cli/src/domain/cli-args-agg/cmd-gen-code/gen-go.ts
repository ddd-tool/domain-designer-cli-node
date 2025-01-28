import { define } from '@ddd-tool/domain-designer-generator'
import prompts from 'prompts'
import * as signal from '@/utils/signal'
import { useI18nAgg } from '@/domain/i18n-agg'

const { t: $t } = useI18nAgg().commands

export async function requireGenGoContext(): Promise<define.go.GoContext> {
  const context = {} as define.go.GoContext
  const { namespace /* additions */ } = await prompts(
    [
      {
        name: 'namespace',
        type: 'text',
        message: $t('question.subcommand.genCode.namespace'),
        initial: 'ComGithub.Example',
      },
      // {
      //   name: 'additions',
      //   type: 'multiselect',
      //   message: $t('question.subcommand.genCode.csharp.additions'),
      //   choices: [],
      //   hint: $t('question.subcommand.genCode.additions.hint'),
      // },
    ],
    { onCancel: signal.onCancel }
  )
  context.namespace = namespace
  context.additions = new Set()
  return context
}
