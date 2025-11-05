import { describe, expect, it } from 'vitest'
import designer1 from './designer-demo1'
import { useGeneratorAgg, GENERATOR_JAVA_PLUGIN, GeneratorPliginHelper } from '..'
import { java } from '../domain/define'

it('base testing', () => {
  const agg = useGeneratorAgg(designer1)
  GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
  const context: java.JavaContext = {
    additions: new Set([java.JavaGeneratorAddition.CommandHandler]),
    moduleName: designer1._getContext().getDesignerOptions().moduleName || 'test',
    namespace: 'com.github.example',
    nonNullAnnotation: 'org.springframework.lang.NonNull',
    nullableAnnotation: 'org.springframework.lang.Nullable',
    idGenStrategy: java.IdGenStrategy.SEQUENCE,
    jdkVersion: '17',
  }
  agg.commands.setContext(context)
  const files = agg.commands.genCodeFiles()
  expect(
    files
      .filter((f) => f.getName() === 'CreateOrderCommand.java')[0]
      .getParentDir()
      .find((_, i, arr) => i === arr.length - 1)
  ).toBe('command')
  expect(
    files
      .filter((f) => f.getName() === 'AutoDeductFacadeCommand.java')[0]
      .getParentDir()
      .find((_, i, arr) => i === arr.length - 1)
  ).toBe('command')
  expect(
    files
      .filter((f) => f.getName() === 'OrderId.java')[0]
      .getParentDir()
      .find((_, i, arr) => i === arr.length - 1)
  ).toBe('value')
  expect(
    files
      .filter((f) => f.getName() === 'OrderSucceedEvent.java')[0]
      .getParentDir()
      .find((_, i, arr) => i === arr.length - 1)
  ).toBe('event')
  expect(files.filter((f) => f.getName() === 'OrderAgg.java')[0].getContent())
    .includes('public OrderId getOrderId()')
    .includes('import com.github.example.order.value.OrderId')
    .includes('import com.github.example.order.command.CreateOrderCommand')
    .includes('String getName()')
    .not.includes('import com.github.example.order.value.Name')
  expect(files.filter((f) => f.getName() === 'OrderAggImpl.java')[0].getContent())
    .includes('import com.github.example.order.command.CreateOrderCommand')
    .includes('String name;')
    .not.includes('import com.github.example.order.value.Name')
})

it('unmount', () => {
  const agg = useGeneratorAgg(designer1)
  GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
  GeneratorPliginHelper.unregisterPlugin(GENERATOR_JAVA_PLUGIN)
  const context: java.JavaContext = {
    additions: new Set([java.JavaGeneratorAddition.CommandHandler]),
    moduleName: designer1._getContext().getDesignerOptions().moduleName || 'test',
    namespace: 'com.github.example',
    nonNullAnnotation: 'org.springframework.lang.NonNull',
    nullableAnnotation: 'org.springframework.lang.Nullable',
    idGenStrategy: java.IdGenStrategy.SEQUENCE,
    jdkVersion: '17',
  }
  agg.commands.setContext(context)
  expect(agg.commands.genCodeFiles()).toStrictEqual([])
})

enum ExpectType {
  IncludeFile = 'IncludeFile',
  IncludeContent = 'IncludeContent',
  ExcludeFile = 'ExcludeFile',
  ExcludeContent = 'ExcludeContent',
}

const testCases = [
  {
    caseName: 'Timezone',
    additions: new Set([java.JavaGeneratorAddition.CommandHandler, java.JavaGeneratorAddition.Timezone]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'OrderSucceedEvent.java',
        contents: ['OrderTime orderTime'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderTime.java',
        contents: ['java.time.OffsetDateTime', 'OffsetDateTime value'],
      },
    ],
  },
  {
    caseName: 'Record',
    additions: new Set([java.JavaGeneratorAddition.CommandHandler, java.JavaGeneratorAddition.RecordValueObject]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'CreateOrderCommand.java',
        contents: ['record CreateOrderCommand'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderSucceedEvent.java',
        contents: ['record OrderSucceedEvent'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'ProductPrice.java',
        contents: ['record ProductPrice'],
      },
    ],
  },
  {
    caseName: 'Lombok',
    additions: new Set([
      java.JavaGeneratorAddition.CommandHandler,
      java.JavaGeneratorAddition.Lombok,
      java.JavaGeneratorAddition.LombokBuilder,
    ]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'CreateOrderCommand.java',
        contents: ['Builder(toBuilder = true)'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderSucceedEvent.java',
        contents: ['Builder(toBuilder = true)'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderAggImpl.java',
        contents: ['@lombok.Getter', '@lombok.AllArgsConstructor'],
      },
    ],
  },
  {
    caseName: 'Spring',
    additions: new Set([java.JavaGeneratorAddition.CommandHandler, java.JavaGeneratorAddition.SpringFramework]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'CreateOrderCommandHandler.java',
        contents: ['org.springframework.stereotype.Component', 'Component'],
      },
    ],
  },
  {
    caseName: 'Jpa',
    additions: new Set([java.JavaGeneratorAddition.CommandHandler, java.JavaGeneratorAddition.Jpa]),
    expect: [
      { type: ExpectType.IncludeContent, file: 'OrderId.java', contents: ['@Embeddable'] },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          '@Entity',
          '@Table(name = "order_agg")',
          '@EmbeddedId',
          '@Embedded',
          '@AttributeOverride',
          '@Column(name = "order_id", updatable = false)',
          'OrderAggImpl()',
        ],
      },
      {
        type: ExpectType.ExcludeContent,
        file: 'OrderAggImpl.java',
        contents: ['@GeneratedValue'],
      },
    ],
  },
  {
    caseName: 'Jpa + Java record',
    additions: new Set([
      java.JavaGeneratorAddition.CommandHandler,
      java.JavaGeneratorAddition.Jpa,
      java.JavaGeneratorAddition.RecordValueObject,
    ]),
    expect: [{ type: ExpectType.IncludeContent, file: 'OrderId.java', contents: ['@Embeddable'] }],
  },
  {
    caseName: 'Jpa + Jdk 8',
    jdkVersion: '8' as const,
    additions: new Set([
      java.JavaGeneratorAddition.CommandHandler,
      java.JavaGeneratorAddition.Timezone,
      java.JavaGeneratorAddition.Jpa,
    ]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'OrderId.java',
        contents: ['javax.persistence.Embeddable'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          '@Entity',
          '@Table(name = "order_agg")',
          'import javax.persistence.EmbeddedId',
          '@EmbeddedId',
          'import javax.persistence.Embedded',
          '@Embedded',
          'import javax.persistence.AttributeOverride',
          '@AttributeOverride',
          'import javax.persistence.Column',
          '@Column(name = "order_id", updatable = false)',
        ],
      },
      {
        type: ExpectType.ExcludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          'jakarta.persistence.Entity',
          'jakarta.persistence.Table',
          'jakarta.persistence.Id',
          'jakarta.persistence.Column',
          'jakarta.persistence.GeneratedValue',
          'jakarta.persistence.AttributeOverride',
          '@GeneratedValue',
        ],
      },
    ],
  },
  {
    caseName: 'Jpa + Jdk8 + Lombok',
    jdkVersion: '8' as const,
    additions: new Set([
      java.JavaGeneratorAddition.CommandHandler,
      java.JavaGeneratorAddition.Timezone,
      java.JavaGeneratorAddition.Jpa,
      java.JavaGeneratorAddition.Lombok,
    ]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'OrderId.java',
        contents: ['javax.persistence.Embeddable'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          '@Entity',
          '@Table(name = "order_agg")',
          'import javax.persistence.EmbeddedId',
          '@EmbeddedId',
          'import javax.persistence.Embedded',
          '@Embedded',
          'import javax.persistence.AttributeOverride',
          '@AttributeOverride',
          'import javax.persistence.Column',
          '@Column(name = "order_id", updatable = false)',
          '@lombok.NoArgsConstructor',
        ],
      },
      {
        type: ExpectType.ExcludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          'jakarta.persistence.Entity',
          'jakarta.persistence.Table',
          'jakarta.persistence.Id',
          'jakarta.persistence.Column',
          'jakarta.persistence.AttributeOverride',
          '@GeneratedValue',
        ],
      },
    ],
  },
  {
    caseName: 'Jpa + Jdk17',
    jdkVersion: '17' as const,
    additions: new Set([
      java.JavaGeneratorAddition.CommandHandler,
      java.JavaGeneratorAddition.Timezone,
      java.JavaGeneratorAddition.Jpa,
    ]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'OrderId.java',
        contents: ['jakarta.persistence.Embeddable'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          '@Entity',
          '@Table(name = "order_agg")',
          'import jakarta.persistence.EmbeddedId',
          '@EmbeddedId',
          'import jakarta.persistence.Embedded',
          '@Embedded',
          'import jakarta.persistence.AttributeOverride',
          '@AttributeOverride',
          'import jakarta.persistence.Column',
          '@Column(name = "order_id", updatable = false)',
        ],
      },
      {
        type: ExpectType.ExcludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          'javax.persistence.Entity',
          'javax.persistence.Table',
          'javax.persistence.Id',
          'javax.persistence.Column',
          'javax.persistence.GeneratedValue',
          'javax.persistence.AttributeOverride',
          '@GeneratedValue',
        ],
      },
    ],
  },
  {
    caseName: 'Jpa + Jdk17 + Lombok',
    jdkVersion: '17' as const,
    additions: new Set([
      java.JavaGeneratorAddition.CommandHandler,
      java.JavaGeneratorAddition.Timezone,
      java.JavaGeneratorAddition.Jpa,
      java.JavaGeneratorAddition.Lombok,
    ]),
    expect: [
      {
        type: ExpectType.IncludeContent,
        file: 'OrderId.java',
        contents: ['jakarta.persistence.Embeddable'],
      },
      {
        type: ExpectType.IncludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          '@Entity',
          '@Table(name = "order_agg")',
          'import jakarta.persistence.EmbeddedId',
          '@EmbeddedId',
          'import jakarta.persistence.Embedded',
          '@Embedded',
          'import jakarta.persistence.AttributeOverride',
          '@AttributeOverride',
          'import jakarta.persistence.Column',
          '@Column(name = "order_id", updatable = false)',
          '@lombok.NoArgsConstructor',
        ],
      },
      {
        type: ExpectType.ExcludeContent,
        file: 'OrderAggImpl.java',
        contents: [
          'javax.persistence.Entity',
          'javax.persistence.Table',
          'javax.persistence.Id',
          'javax.persistence.Column',
          'javax.persistence.GeneratedValue',
          'javax.persistence.AttributeOverride',
          '@GeneratedValue',
        ],
      },
    ],
  },
]

describe.each(testCases)('$caseName', ({ additions, jdkVersion, expect: caseExpects }) => {
  const agg = useGeneratorAgg(designer1)
  GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
  const context: java.JavaContext = {
    additions,
    moduleName: designer1._getContext().getDesignerOptions().moduleName || 'test',
    namespace: 'com.github.alphafoxz.oneboot.domain.test',
    nonNullAnnotation: 'org.springframework.lang.NonNull',
    nullableAnnotation: 'org.springframework.lang.Nullable',
    idGenStrategy: java.IdGenStrategy.SEQUENCE,
    jdkVersion: jdkVersion || '17',
  }
  agg.commands.setContext(context)
  const files = agg.commands.genCodeFiles()
  for (const currentExpect of caseExpects) {
    it(`type = ${currentExpect.type}, fileName = ${currentExpect.file}`, () => {
      if (currentExpect.type === ExpectType.IncludeFile) {
        expect(files.find((f) => f.getName() === currentExpect.file)).not.toBeUndefined()
      } else if (currentExpect.type === ExpectType.IncludeContent) {
        const f = files.find((f) => f.getName() === currentExpect.file)
        expect(f).not.toBeUndefined()
        for (const content of currentExpect.contents) {
          expect(f!.getContent()).includes(content)
        }
      } else if (currentExpect.type === ExpectType.ExcludeFile) {
        expect(files.find((f) => f.getName() === currentExpect.file)).toBeUndefined()
      } else if (currentExpect.type === ExpectType.ExcludeContent) {
        const f = files.find((f) => f.getName() === currentExpect.file)
        expect(f).not.toBeUndefined()
        for (const content of currentExpect.contents) {
          expect(f!.getContent()).not.includes(content)
        }
      } else {
        isNever(currentExpect.type)
      }
    })
  }
})
