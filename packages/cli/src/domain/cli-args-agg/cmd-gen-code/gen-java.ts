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
            description: $t(
              'question.subcommand.genCode.java.additions.springFramework',
            ),
          },
          {
            title: define.java.JavaGeneratorAddition.Jpa,
            value: define.java.JavaGeneratorAddition.Jpa,
            selected: false,
            description: $t('question.subcommand.genCode.java.additions.jpa'),
          },
          {
            title: define.java.JavaGeneratorAddition.Lombok,
            value: define.java.JavaGeneratorAddition.Lombok,
            selected: true,
            description: $t(
              'question.subcommand.genCode.java.additions.lombok',
            ),
          },
          {
            title: define.java.JavaGeneratorAddition.LombokBuilder,
            value: define.java.JavaGeneratorAddition.LombokBuilder,
            description: $t(
              'question.subcommand.genCode.java.additions.lombokBuilder',
            ),
          },
          {
            title: define.java.JavaGeneratorAddition.CommandHandler,
            value: define.java.JavaGeneratorAddition.CommandHandler,
            selected: true,
            description: $t(
              'question.subcommand.genCode.java.additions.commandHandler',
            ),
          },
          {
            title: define.java.JavaGeneratorAddition.RecordValueObject,
            value: define.java.JavaGeneratorAddition.RecordValueObject,
            description: $t(
              'question.subcommand.genCode.java.additions.recordValueObject',
            ),
          },
          {
            title: define.java.JavaGeneratorAddition.Timezone,
            value: define.java.JavaGeneratorAddition.Timezone,
            selected: true,
            description: $t(
              'question.subcommand.genCode.java.additions.timezone',
            ),
          },
        ],
        hint: $t('question.subcommand.genCode.additions.hint'),
      },
    ],
    { onCancel: signal.onCancel },
  )
  let nonNullAnnotation: string | undefined = (additions as string[]).includes(
    define.java.JavaGeneratorAddition.SpringFramework,
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
    (additions as define.java.JavaGeneratorAddition[]).includes(
      define.java.JavaGeneratorAddition.Jpa,
    )
  ) {
    const { idGenStrategy } = await prompts(
      [
        {
          name: 'idGenStrategy',
          type: 'select',
          message: $t('question.subcommand.genCode.java.idGenStrategy'),
          choices: [
            { title: 'TABLE', value: define.java.IdGenStrategy.TABLE },
            { title: 'SEQUENCE', value: define.java.IdGenStrategy.SEQUENCE },
            { title: 'IDENTITY', value: define.java.IdGenStrategy.IDENTITY },
            { title: 'UUID', value: define.java.IdGenStrategy.UUID },
            { title: 'AUTO', value: define.java.IdGenStrategy.AUTO },
          ],
        },
      ],
      { onCancel: signal.onCancel },
    )
    context.idGenStrategy = idGenStrategy as define.java.IdGenStrategy
  }

  context.namespace = namespace
  context.additions = new Set(additions)
  context.moduleName = ''
  context.nonNullAnnotation = nonNullAnnotation!
  return context
}
