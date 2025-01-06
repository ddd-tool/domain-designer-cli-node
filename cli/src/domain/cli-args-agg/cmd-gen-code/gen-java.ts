import { useI18nAgg } from '@/domain/i18n-agg'
import { define } from '@ddd-tool/domain-designer-generator'
import prompts from 'prompts'
import * as signal from '@/utils/signal'

const { t: $t } = useI18nAgg().commands

export async function requireGenJavaContext(): Promise<define.java.JavaContext> {
  const context = {} as define.java.JavaContext
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
        message: $t('question.subcommand.genCode.java.additions'),
        choices: [
          {
            title: define.java.JavaGeneratorAddition.SpringFramework,
            value: define.java.JavaGeneratorAddition.SpringFramework,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.springFramework'),
          },
          {
            title: define.java.JavaGeneratorAddition.Lombok,
            value: define.java.JavaGeneratorAddition.Lombok,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.lombok'),
          },
          {
            title: define.java.JavaGeneratorAddition.LombokBuilder,
            value: define.java.JavaGeneratorAddition.LombokBuilder,
            description: $t('question.subcommand.genCode.java.additions.lombokBuilder'),
          },
          {
            title: define.java.JavaGeneratorAddition.CommandHandler,
            value: define.java.JavaGeneratorAddition.CommandHandler,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.commandHandler'),
          },
          {
            title: define.java.JavaGeneratorAddition.RecordVakueObject,
            value: define.java.JavaGeneratorAddition.RecordVakueObject,
            description: $t('question.subcommand.genCode.java.additions.recordVakueObject'),
          },
          {
            title: define.java.JavaGeneratorAddition.Timezone,
            value: define.java.JavaGeneratorAddition.Timezone,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.timezone'),
          },
        ],
        hint: $t('question.subcommand.genCode.java.additions.hint'),
      },
    ],
    { onCancel: signal.onCancel }
  )
  let nonNullAnnotation: string | undefined = (additions as string[]).includes(
    define.java.JavaGeneratorAddition.SpringFramework
  )
    ? 'org.springframework.lang.NonNull'
    : undefined
  if (nonNullAnnotation === undefined) {
    nonNullAnnotation = (
      await prompts(
        [
          {
            name: 'nonNullAnnotation',
            type: 'select',
            message: $t('question.subcommand.genCode.java.nonNullAnnotation'),
            choices: [
              { title: 'org.springframework.lang.NonNull', value: 'org.springframework.lang.NonNull' },
              { title: 'org.jetbrains.annotations.NotNull', value: 'org.jetbrains.annotations.NotNull' },
              { title: 'javax.annotation.Nonnull', value: 'javax.annotation.Nonnull' },
            ],
          },
        ],
        { onCancel: signal.onCancel }
      )
    ).nonNullAnnotation
  }

  context.namespace = namespace
  context.additions = new Set(additions)
  context.moduleName = ''
  context.nonNullAnnotation = nonNullAnnotation!
  return context
}
