// import { useI18nAgg } from '@/domain/i18n-agg'
// import { define } from '@ddd-tool/domain-designer-generator'
// import prompts from 'prompts'
// import * as signal from '@/utils/signal'

// const { t: $t } = useI18nAgg().commands

// export async function requireGenCsharpContext(): Promise<csharp.CsharpContext> {
//   const context = define.csharp
//   const { namespace, additions } = await prompts(
//     [
//       {
//         name: 'namespace',
//         type: 'text',
//         message: $t('question.subcommand.genCode.namespace'),
//         initial: 'ComGithub.Example',
//       },
//       {
//         name: 'additions',
//         type: 'multiselect',
//         message: $t('question.subcommand.genCode.csharp.additions'),
//         choices: [],
//         hint: '- Space to select. Return to submit',
//       },
//     ],
//     { onCancel: signal.onCancel }
//   )
//   return context
// }
