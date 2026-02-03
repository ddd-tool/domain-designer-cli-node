import { useI18nAgg } from '@/domain/i18n-agg'
import { types } from '@ddd-tool/domain-designer-generator'
import prompts from 'prompts'
import * as signal from '@/utils/signal'

const { t: $t } = useI18nAgg().commands

export async function requireGenJavaContext(): Promise<types.java.JavaContext> {
  const context = {} as types.java.JavaContext
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
            title: types.java.JavaGeneratorAddition.SpringFramework,
            value: types.java.JavaGeneratorAddition.SpringFramework,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.springFramework'),
          },
          {
            title: types.java.JavaGeneratorAddition.Jpa,
            value: types.java.JavaGeneratorAddition.Jpa,
            selected: false,
            description: $t('question.subcommand.genCode.java.additions.jpa'),
          },
          {
            title: types.java.JavaGeneratorAddition.Lombok,
            value: types.java.JavaGeneratorAddition.Lombok,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.lombok'),
          },
          {
            title: types.java.JavaGeneratorAddition.LombokBuilder,
            value: types.java.JavaGeneratorAddition.LombokBuilder,
            description: $t('question.subcommand.genCode.java.additions.lombokBuilder'),
          },
          {
            title: types.java.JavaGeneratorAddition.CommandHandler,
            value: types.java.JavaGeneratorAddition.CommandHandler,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.commandHandler'),
          },
          {
            title: types.java.JavaGeneratorAddition.RecordValueObject,
            value: types.java.JavaGeneratorAddition.RecordValueObject,
            description: $t('question.subcommand.genCode.java.additions.recordValueObject'),
          },
          {
            title: types.java.JavaGeneratorAddition.Timezone,
            value: types.java.JavaGeneratorAddition.Timezone,
            selected: true,
            description: $t('question.subcommand.genCode.java.additions.timezone'),
          },
        ],
        hint: $t('question.subcommand.genCode.additions.hint'),
      },
    ],
    { onCancel: signal.onCancel },
  )
  let nonNullAnnotation: string | undefined = (additions as string[]).includes(
    types.java.JavaGeneratorAddition.SpringFramework,
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
              {
                title: 'org.springframework.lang.NonNull',
                value: 'org.springframework.lang.NonNull',
              },
              {
                title: 'org.jetbrains.annotations.NotNull',
                value: 'org.jetbrains.annotations.NotNull',
              },
              {
                title: 'javax.annotation.Nonnull',
                value: 'javax.annotation.Nonnull',
              },
            ],
          },
        ],
        { onCancel: signal.onCancel },
      )
    ).nonNullAnnotation
  }

  if (
    (additions as types.java.JavaGeneratorAddition[]).includes(types.java.JavaGeneratorAddition.Jpa)
  ) {
    const { idGenStrategy } = await prompts(
      [
        {
          name: 'idGenStrategy',
          type: 'select',
          message: $t('question.subcommand.genCode.java.idGenStrategy'),
          choices: [
            { title: 'TABLE', value: types.java.IdGenStrategy.TABLE },
            { title: 'SEQUENCE', value: types.java.IdGenStrategy.SEQUENCE },
            { title: 'IDENTITY', value: types.java.IdGenStrategy.IDENTITY },
            { title: 'UUID', value: types.java.IdGenStrategy.UUID },
            { title: 'AUTO', value: types.java.IdGenStrategy.AUTO },
          ],
        },
      ],
      { onCancel: signal.onCancel },
    )
    context.idGenStrategy = idGenStrategy as types.java.IdGenStrategy
  }

  context.namespace = namespace
  context.additions = new Set(additions)
  context.moduleName = ''
  context.nonNullAnnotation = nonNullAnnotation!
  return context
}
