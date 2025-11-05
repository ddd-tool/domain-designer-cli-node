import {
  DomainDesignAgg,
  DomainDesignCommand,
  DomainDesignEvent,
  DomainDesignFacadeCommand,
  DomainDesignInfo,
  DomainDesignInfoRecord,
  DomainDesignInfoType,
  DomainDesignObject,
  isDomainDesignInfo,
} from '@ddd-tool/domain-designer-core'
import { GeneratorPliginHelper } from '../domain/generator-agg'
import { strUtil } from '../common'
import { CodeFile, CodeSnippets, java } from '../domain/define'
import { Ref } from '@vue/reactivity'

const JavaGeneratorAddition = java.JavaGeneratorAddition
type JavaContext = java.JavaContext

export default GeneratorPliginHelper.createHotSwapPlugin(() => {
  const VALUE_PACKAGE = 'value'
  const COMMAND_PACKAGE = 'command'
  const EVENT_PACKAGE = 'event'
  function getDomainObjectName(info: DomainDesignObject) {
    return strUtil.stringToUpperCamel(info._attributes.name)
  }
  return {
    unmount({ api }) {
      api.commands.clearCaches()
      api.commands._setCommandCodeProvider(() => [])
      api.commands._setFacadeCommandCodeProvider(() => [])
      api.commands._setAggCodeProvider(() => [])
      api.commands._setEventCodeProvider(() => [])
      api.commands._setReadModelCodeProvider(() => [])
      api.commands._setCodeFileProvider(() => [])
      api.commands.setContext({} as any)
    },
    mount({ api }) {
      const context = api.states.context as Readonly<Ref<JavaContext>>
      const ignoredValueObjects = api.states.designer.value
        ._getContext()
        .getDesignerOptions()
        .ignoreValueObjects.map((s) => strUtil.stringToLowerCamel(s))
      function isValueObject(info: DomainDesignInfo<DomainDesignInfoType, string>): boolean {
        return !ignoredValueObjects.includes(strUtil.stringToLowerCamel(info._attributes.name))
      }
      function inferObjectValueTypeByInfo(imports: Set<string>, obj: DomainDesignInfo<DomainDesignInfoType, string>) {
        if (isValueObject(obj)) {
          const infoName = getDomainObjectName(obj)
          imports.add(`${context.value.namespace}.${context.value.moduleName}.${VALUE_PACKAGE}.${infoName}`)
          return infoName
        }
        return inferJavaTypeByName(imports, obj)
      }
      function importInfos(imports: Set<string>, infos: DomainDesignInfo<DomainDesignInfoType, string>[]) {
        for (const info of infos) {
          if (!isValueObject(info)) {
            inferJavaTypeByName(imports, info)
            continue
          }
          imports.add(
            `${context.value.namespace}.${context.value.moduleName}.${VALUE_PACKAGE}.${getDomainObjectName(info)}`
          )
        }
      }
      function inferJavaTypeByName(imports: Set<string>, obj: DomainDesignObject): string {
        const additions = context.value.additions
        const name = strUtil.stringToLowerSnake(obj._attributes.name).replace(/_/, ' ')
        if (/\b(time|timestamp|date|deadline|expire)\b/.test(name)) {
          if (additions.has(JavaGeneratorAddition.Timezone)) {
            imports.add('java.time.OffsetDateTime')
            return 'OffsetDateTime'
          } else {
            imports.add('java.time.LocalDateTime')
            return 'LocalDateTime'
          }
        } else if (/\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(name)) {
          return 'Integer'
        } else if (/\b(price)$/.test(name)) {
          imports.add('java.math.BigDecimal')
          return 'BigDecimal'
        } else if (/^(if|is)\b/.test(name)) {
          return 'Boolean'
        }
        if (
          isDomainDesignInfo(obj) &&
          (obj._attributes.type === 'Id' ||
            obj._attributes.type === 'Version' ||
            /\b(id|identifier|ver|version)$/.test(name))
        ) {
          return 'Long'
        }
        return 'String'
      }

      api.commands._setInfoCodeProvider(
        (info: DomainDesignInfo<DomainDesignInfoType, string>): CodeSnippets<'Info'>[] => {
          const imports = new Set<string>()
          imports.add(context.value.nonNullAnnotation)
          const nonNullAnnotation = context.value.nonNullAnnotation.split('.').pop()
          const className = getDomainObjectName(info)
          const additions = context.value.additions
          const code: string[] = []
          if (additions.has(JavaGeneratorAddition.RecordValueObject)) {
            // 高版本jdk的record类型
            if (additions.has(JavaGeneratorAddition.Jpa)) {
              imports.add(
                context.value.jdkVersion === '8' ? 'javax.persistence.Embeddable' : 'jakarta.persistence.Embeddable'
              )
              code.push('@Embeddable')
            }
            code.push(`public record ${className}(@${nonNullAnnotation} ${inferJavaTypeByName(imports, info)} value) {`)
            code.push(`    public ${className} {`)
            code.push(`        // HACK check value`)
            code.push(`    }`)
            code.push(`}`)
          } else if (additions.has(JavaGeneratorAddition.Lombok)) {
            // Lombok + class类型
            code.push(`@lombok.Getter`)
            if (additions.has(JavaGeneratorAddition.Jpa)) {
              imports.add(
                context.value.jdkVersion === '8' ? 'javax.persistence.Embeddable' : 'jakarta.persistence.Embeddable'
              )
              code.push('@Embeddable')
            }
            code.push(`public class ${className} {`)
            code.push(`    private final ${inferJavaTypeByName(imports, info)} value;`)
            code.push(``)
            code.push(`    public ${className} (@${nonNullAnnotation} ${inferJavaTypeByName(imports, info)} value) {`)
            code.push(`        // HACK check value`)
            code.push(`        this.value = value;`)
            code.push(`    }`)
            code.push(`}`)
          } else {
            // 普通class类型
            if (additions.has(JavaGeneratorAddition.Jpa)) {
              imports.add(
                context.value.jdkVersion === '8' ? 'javax.persistence.Embeddable' : 'jakarta.persistence.Embeddable'
              )
              code.push('@Embeddable')
            }
            code.push(`public class ${getDomainObjectName(info)} {`)
            code.push(`    private final ${inferJavaTypeByName(imports, info)} value;`)
            code.push(``)
            code.push(`    public ${className} (@${nonNullAnnotation} ${inferJavaTypeByName(imports, info)} value) {`)
            code.push(`        // HACK check value`)
            code.push(`        this.value = value;`)
            code.push(`    }`)
            code.push(``)
            code.push(`    public ${inferJavaTypeByName(imports, info)} getValue() {`)
            code.push(`        return this.value;`)
            code.push(`    }`)
            code.push(`}`)
          }
          return [
            {
              type: 'Info',
              imports,
              content: code.join('\n'),
            },
          ]
        }
      )

      api.commands._setCommandCodeProvider(
        (cmd: DomainDesignCommand<DomainDesignInfoRecord>): CodeSnippets<'Command' | 'CommandHandler'>[] => {
          const codeSnippets: CodeSnippets<'Command' | 'CommandHandler'>[] = []
          const additions = context.value.additions
          const nonNullAnnotation = context.value.nonNullAnnotation.split('.').pop()

          {
            const imports = new Set<string>()
            imports.add(context.value.nonNullAnnotation)
            const className = getDomainObjectName(cmd)
            const code: string[] = []
            const infos = Object.values(cmd.inner)
            importInfos(imports, infos)

            if (additions.has(JavaGeneratorAddition.RecordValueObject)) {
              if (additions.has(JavaGeneratorAddition.LombokBuilder)) {
                code.push(`@lombok.Builder(toBuilder = true)`)
              }
              code.push(`public record ${className}(`)
              const infoCode: string[] = []
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                infoCode.push(
                  `        @${nonNullAnnotation}\n        ${inferObjectValueTypeByInfo(
                    imports,
                    info
                  )} ${strUtil.lowerFirst(infoName)}`
                )
              }
              code.push(infoCode.join(',\n'))
              code.push(`) {`)
              code.push(`    public ${className} {`)
              code.push(`        // HACK check value`)
              code.push(`    }`)
              code.push(`}`)
            } else if (additions.has(JavaGeneratorAddition.Lombok)) {
              code.push(`@lombok.AllArgsConstructor`)
              code.push(`@lombok.Getter`)
              if (additions.has(JavaGeneratorAddition.LombokBuilder)) {
                code.push(`@lombok.Builder(toBuilder = true)`)
              }
              code.push(`public class ${className} {`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(`    @${nonNullAnnotation}`)
                code.push(
                  `    private final ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)};`
                )
              }
              code.push(`}`)
            } else {
              code.push(`public class ${className} {`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(`    @${nonNullAnnotation}`)
                code.push(
                  `    private final ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)};`
                )
              }
              code.push(``)
              const argsCode: string[] = []
              const argsStatementCode: string[] = []
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                argsCode.push(
                  `@${nonNullAnnotation} ${inferJavaTypeByName(imports, info)} ${strUtil.lowerFirst(infoName)}`
                )
                argsStatementCode.push(`this.${strUtil.lowerFirst(infoName)} = ${strUtil.lowerFirst(infoName)};`)
              }
              code.push(`    public ${className}(${argsCode.join(', ')}) {`)
              code.push(`        ${argsStatementCode.join('\n        ')}`)
              code.push(`    }`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(``)
                code.push(`    public ${inferObjectValueTypeByInfo(imports, info)} get${infoName} () {`)
                code.push(`        return this.${strUtil.lowerFirst(infoName)};`)
                code.push(`    }`)
              }
              code.push(`}`)
            }
            codeSnippets.push({
              type: 'Command',
              imports,
              content: code.join('\n'),
            })
          }
          if (!additions.has(JavaGeneratorAddition.CommandHandler)) {
            return codeSnippets
          }
          {
            const imports = new Set<string>()
            imports.add(context.value.nonNullAnnotation)
            const className = getDomainObjectName(cmd)
            const code: string[] = []

            if (additions.has(JavaGeneratorAddition.SpringFramework)) {
              imports.add('org.springframework.stereotype.Component')
              code.push(`@Component`)
            }
            if (additions.has(JavaGeneratorAddition.Lombok)) {
              code.push(`@lombok.RequiredArgsConstructor`)
            }
            code.push(`public class ${className}Handler {`)
            const aggs = [...api.states.designer.value._getContext().getAssociationMap()[cmd._attributes.__id]].filter(
              (agg) => agg._attributes.rule === 'Agg'
            )
            for (const agg of aggs) {
              imports.add(`${context.value.namespace}.${context.value.moduleName}.${getDomainObjectName(agg)}`)
              code.push(`    public ${getDomainObjectName(agg)} handle(@${nonNullAnnotation} ${className} command) {`)
              code.push(`        // HACK Implement`)
              code.push(`    }`)
            }
            code.push(`}`)
            codeSnippets.push({
              type: 'CommandHandler',
              imports,
              content: code.join('\n'),
            })
          }
          return codeSnippets
        }
      )
      api.commands._setFacadeCommandCodeProvider((cmd: DomainDesignFacadeCommand<DomainDesignInfoRecord>) => {
        const codeSnippets: CodeSnippets<'FacadeCommand' | 'FacadeCommandHandler'>[] = []
        const additions = context.value.additions
        const nonNullAnnotation = context.value.nonNullAnnotation.split('.').pop()

        {
          const imports = new Set<string>()
          imports.add(context.value.nonNullAnnotation)
          const className = getDomainObjectName(cmd)
          const code: string[] = []
          const infos = Object.values(cmd.inner)
          importInfos(imports, infos)

          if (additions.has(JavaGeneratorAddition.RecordValueObject)) {
            if (additions.has(JavaGeneratorAddition.LombokBuilder)) {
              code.push(`@lombok.Builder(toBuilder = true)`)
            }
            code.push(`public record ${className}(`)
            const infoCode: string[] = []
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              infoCode.push(
                `        @${nonNullAnnotation}\n        ${inferObjectValueTypeByInfo(
                  imports,
                  info
                )} ${strUtil.lowerFirst(infoName)}`
              )
            }
            code.push(infoCode.join(',\n'))
            code.push(`) {`)
            code.push(`    public ${className} {`)
            code.push(`        // HACK check value`)
            code.push(`    }`)
            code.push(`}`)
          } else if (additions.has(JavaGeneratorAddition.Lombok)) {
            code.push(`@lombok.AllArgsConstructor`)
            code.push(`@lombok.Getter`)
            if (additions.has(JavaGeneratorAddition.LombokBuilder)) {
              code.push(`@lombok.Builder(toBuilder = true)`)
            }
            code.push(`public class ${className} {`)
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              code.push(`    @${nonNullAnnotation}`)
              code.push(
                `    private final ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)};`
              )
            }
            code.push(`}`)
          } else {
            code.push(`public class ${className} {`)
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              code.push(`    @${nonNullAnnotation}`)
              code.push(
                `    private final ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)};`
              )
            }
            code.push(``)
            const argsCode: string[] = []
            const argsStatementCode: string[] = []
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              argsCode.push(
                `@${nonNullAnnotation} ${inferJavaTypeByName(imports, info)} ${strUtil.lowerFirst(infoName)}`
              )
              argsStatementCode.push(`this.${strUtil.lowerFirst(infoName)} = ${strUtil.lowerFirst(infoName)};`)
            }
            code.push(`    public ${className}(${argsCode.join(', ')}) {`)
            code.push(`        ${argsStatementCode.join('\n        ')}`)
            code.push(`    }`)
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              code.push(``)
              code.push(`    public ${inferObjectValueTypeByInfo(imports, info)} get${infoName} () {`)
              code.push(`        return this.${strUtil.lowerFirst(infoName)};`)
              code.push(`    }`)
            }
            code.push(`}`)
          }
          codeSnippets.push({
            type: 'FacadeCommand',
            imports,
            content: code.join('\n'),
          })
        }
        if (!additions.has(JavaGeneratorAddition.CommandHandler)) {
          return codeSnippets
        }
        {
          const imports = new Set<string>()
          imports.add(context.value.nonNullAnnotation)
          const className = getDomainObjectName(cmd)
          const code: string[] = []

          if (additions.has(JavaGeneratorAddition.SpringFramework)) {
            imports.add('org.springframework.stereotype.Component')
            code.push(`@Component`)
          }
          if (additions.has(JavaGeneratorAddition.Lombok)) {
            code.push(`@lombok.RequiredArgsConstructor`)
          }
          code.push(`public class ${className}Handler {`)
          const aggs = [...api.states.designer.value._getContext().getAssociationMap()[cmd._attributes.__id]].filter(
            (agg) => agg._attributes.rule === 'Agg'
          )
          for (const agg of aggs) {
            imports.add(`${context.value.namespace}.${context.value.moduleName}.${getDomainObjectName(agg)}`)
            code.push(`    public ${getDomainObjectName(agg)} handle(@${nonNullAnnotation} ${className} command) {`)
            code.push(`        // HACK Implement`)
            code.push(`    }`)
          }
          code.push(`}`)
          codeSnippets.push({
            type: 'FacadeCommandHandler',
            imports,
            content: code.join('\n'),
          })
        }
        return codeSnippets
      })

      api.commands._setAggCodeProvider(
        (agg: DomainDesignAgg<DomainDesignInfoRecord>): CodeSnippets<'Agg' | 'AggImpl'>[] => {
          const additions = context.value.additions
          const designer = api.states.designer.value
          const nonNullAnnotation = context.value.nonNullAnnotation.split('.').pop()
          const className = getDomainObjectName(agg)
          const codeSnippets: CodeSnippets<'Agg' | 'AggImpl'>[] = []
          const infos = Object.values(agg.inner)

          {
            const imports = new Set<string>()
            imports.add(context.value.nonNullAnnotation)
            const code: string[] = []

            code.push(`public interface ${className} {`)
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              code.push(`    public ${inferObjectValueTypeByInfo(imports, info)} get${infoName}();`)
              code.push('')
            }
            const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter((item) => {
              return item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
            })
            for (const command of commands) {
              const commandName = getDomainObjectName(command)
              imports.add(`${context.value.namespace}.${context.value.moduleName}.${COMMAND_PACKAGE}.${commandName}`)
              code.push(`    public void handle${commandName}(@${nonNullAnnotation} ${commandName} command);`)
              code.push('')
            }
            code.push(`}`)
            codeSnippets.push({
              type: 'Agg',
              imports,
              content: code.join('\n'),
            })
          }
          {
            const imports = new Set<string>()
            imports.add(context.value.nonNullAnnotation)
            const code: string[] = []
            importInfos(imports, infos)
            if (additions.has(JavaGeneratorAddition.Lombok)) {
              code.push(
                additions.has(JavaGeneratorAddition.Jpa) ? '@lombok.NoArgsConstructor' : '@lombok.AllArgsConstructor'
              )
              code.push(`@lombok.Getter`)
              if (additions.has(JavaGeneratorAddition.Jpa)) {
                imports.add(
                  context.value.jdkVersion === '8' ? 'javax.persistence.Entity' : 'jakarta.persistence.Entity'
                )
                code.push('@Entity')
                imports.add(context.value.jdkVersion === '8' ? 'javax.persistence.Table' : 'jakarta.persistence.Table')
                code.push(`@Table(name = "${strUtil.camelToLowerSnake(className)}")`)
              }
              code.push(`public class ${className}Impl implements ${className} {`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(`    @${nonNullAnnotation}`)
                if (additions.has(JavaGeneratorAddition.Jpa)) {
                  if (info._attributes.type === 'Id') {
                    imports.add(
                      context.value.jdkVersion === '8'
                        ? 'javax.persistence.EmbeddedId'
                        : 'jakarta.persistence.EmbeddedId'
                    )
                    code.push(`    @EmbeddedId`)
                    imports.add(
                      context.value.jdkVersion === '8'
                        ? 'javax.persistence.AttributeOverride'
                        : 'jakarta.persistence.AttributeOverride'
                    )
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Column' : 'jakarta.persistence.Column'
                    )
                    code.push(
                      `    @AttributeOverride(name = "value", column = @Column(name = "${strUtil.camelToLowerSnake(
                        infoName
                      )}", updatable = false))`
                    )
                  } else if (isValueObject(info)) {
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Embedded' : 'jakarta.persistence.Embedded'
                    )
                    code.push(`    @Embedded`)
                    imports.add(
                      context.value.jdkVersion === '8'
                        ? 'javax.persistence.AttributeOverride'
                        : 'jakarta.persistence.AttributeOverride'
                    )
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Column' : 'jakarta.persistence.Column'
                    )
                    code.push(
                      `    @AttributeOverride(name = "value", column = @Column(name = "${strUtil.camelToLowerSnake(
                        infoName
                      )}"))`
                    )
                  } else {
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Column' : 'jakarta.persistence.Column'
                    )
                    code.push(`    @Column(name = "${strUtil.camelToLowerSnake(infoName)}")`)
                  }
                }
                code.push(`    private ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)};`)
              }
              const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter((item) => {
                return item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
              })
              for (const command of commands) {
                const commandName = getDomainObjectName(command)
                imports.add(`${context.value.namespace}.${context.value.moduleName}.${COMMAND_PACKAGE}.${commandName}`)
                code.push(``)
                code.push(
                  `    public void handle${commandName}(@${nonNullAnnotation} ${commandName} ${strUtil.lowerFirst(
                    commandName
                  )}) {`
                )
                code.push(`        // HACK need implement`)
                code.push(`    }`)
              }
              code.push(`}`)
            } else {
              if (additions.has(JavaGeneratorAddition.Jpa)) {
                imports.add(
                  context.value.jdkVersion === '8' ? 'javax.persistence.Entity' : 'jakarta.persistence.Entity'
                )
                code.push('@Entity')
                imports.add(context.value.jdkVersion === '8' ? 'javax.persistence.Table' : 'jakarta.persistence.Table')
                code.push(`@Table(name = "${strUtil.camelToLowerSnake(className)}")`)
              }
              code.push(`public class ${className}Impl implements ${className} {`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(`    @${nonNullAnnotation}`)
                if (additions.has(JavaGeneratorAddition.Jpa)) {
                  if (info._attributes.type === 'Id') {
                    imports.add(
                      context.value.jdkVersion === '8'
                        ? 'javax.persistence.EmbeddedId'
                        : 'jakarta.persistence.EmbeddedId'
                    )
                    code.push(`    @EmbeddedId`)
                    imports.add(
                      context.value.jdkVersion === '8'
                        ? 'javax.persistence.AttributeOverride'
                        : 'jakarta.persistence.AttributeOverride'
                    )
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Column' : 'jakarta.persistence.Column'
                    )
                    code.push(
                      `    @AttributeOverride(name = "value", column = @Column(name = "${strUtil.camelToLowerSnake(
                        infoName
                      )}", updatable = false))`
                    )
                  } else if (isValueObject(info)) {
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Embedded' : 'jakarta.persistence.Embedded'
                    )
                    code.push(`    @Embedded`)
                    imports.add(
                      context.value.jdkVersion === '8'
                        ? 'javax.persistence.AttributeOverride'
                        : 'jakarta.persistence.AttributeOverride'
                    )
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Column' : 'jakarta.persistence.Column'
                    )
                    code.push(
                      `    @AttributeOverride(name = "value", column = @Column(name = "${strUtil.camelToLowerSnake(
                        infoName
                      )}"))`
                    )
                  } else {
                    imports.add(
                      context.value.jdkVersion === '8' ? 'javax.persistence.Column' : 'jakarta.persistence.Column'
                    )
                    code.push(`    @Column(name = "${strUtil.camelToLowerSnake(infoName)}")`)
                  }
                }
                code.push(`    private ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)};`)
              }
              code.push(``)
              // 构造函数
              const argsCode: string[] = []
              const initArgsCode: string[] = []
              for (const info of infos) {
                if (additions.has(JavaGeneratorAddition.Jpa)) {
                  break
                }
                const infoName = getDomainObjectName(info)
                argsCode.push(
                  `@${nonNullAnnotation} ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)}`
                )
                initArgsCode.push(`this.${strUtil.lowerFirst(infoName)} = ${strUtil.lowerFirst(infoName)};`)
              }
              code.push(`    public ${className}Impl(${argsCode.join(', ')}) {`)
              code.push(`        ${initArgsCode.join('\n        ')}`)
              code.push(`    }`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(``)
                code.push(`    @${nonNullAnnotation}`)
                code.push(`    public ${inferObjectValueTypeByInfo(imports, info)} get${infoName}() {`)
                code.push(`        return this.${strUtil.lowerFirst(infoName)};`)
                code.push(`    }`)
              }
              const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter(
                (item) => item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
              )
              for (const command of commands) {
                const commandName = getDomainObjectName(command)
                imports.add(`${context.value.namespace}.${context.value.moduleName}.${COMMAND_PACKAGE}.${commandName}`)
                code.push(``)
                code.push(
                  `    public void handle${commandName}(@${nonNullAnnotation} ${commandName} ${strUtil.lowerFirst(
                    commandName
                  )}) {`
                )
                code.push(`        // HACK need implement`)
                code.push(`    }`)
              }
              code.push(`}`)
            }
            codeSnippets.push({
              type: 'AggImpl',
              imports,
              content: code.join('\n'),
            })
          }
          return codeSnippets
        }
      )

      api.commands._setEventCodeProvider(
        (event: DomainDesignEvent<DomainDesignInfoRecord>): CodeSnippets<'Event'>[] => {
          const imports = new Set<string>()
          imports.add(context.value.nonNullAnnotation)
          const nonNullAnnotation = context.value.nonNullAnnotation.split('.').pop()
          const additions = context.value.additions
          const className = getDomainObjectName(event)
          const code: string[] = []
          const infos = Object.values(event.inner)
          importInfos(imports, infos)
          if (additions.has(JavaGeneratorAddition.RecordValueObject)) {
            // 高版本jdk的record类型
            if (additions.has(JavaGeneratorAddition.LombokBuilder)) {
              code.push(`@lombok.Builder(toBuilder = true)`)
            }
            code.push(`public record ${className}(`)
            const infoCode: string[] = []
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              infoCode.push(
                `        @${nonNullAnnotation}\n        ${inferObjectValueTypeByInfo(
                  imports,
                  info
                )} ${strUtil.lowerFirst(infoName)}`
              )
            }
            code.push(infoCode.join(',\n'))
            code.push(`) {`)
            code.push(`    public ${className} {`)
            code.push(`        // HACK check value`)
            code.push(`    }`)
            code.push(`}`)
          } else if (additions.has(JavaGeneratorAddition.Lombok)) {
            code.push(`@lombok.AllArgsConstructor`)
            code.push(`@lombok.Getter`)
            if (additions.has(JavaGeneratorAddition.LombokBuilder)) {
              code.push(`@lombok.Builder(toBuilder = true)`)
            }
            code.push(`public class ${className} {`)
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              code.push(`    @${nonNullAnnotation}`)
              code.push(
                `    private final ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)};`
              )
            }
            code.push(`}`)
          } else {
            code.push(`public class ${className} {`)
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              code.push(`    @${nonNullAnnotation}`)
              code.push(`    private final ${infoName} ${strUtil.lowerFirst(infoName)};`)
            }
            code.push(``)
            const argsCode: string[] = []
            const initArgsCode: string[] = []
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              argsCode.push(
                `@${nonNullAnnotation} ${inferJavaTypeByName(imports, info)} ${strUtil.lowerFirst(infoName)}`
              )
              initArgsCode.push(`this.${strUtil.lowerFirst(infoName)} = ${strUtil.lowerFirst(infoName)};`)
            }
            code.push(`    public ${className}(${argsCode.join(', ')}) {`)
            code.push(`        ${initArgsCode.join('\n        ')}`)
            code.push(`    }`)
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              code.push(``)
              code.push(`    public ${infoName} get${infoName} () {`)
              code.push(`        return this.${strUtil.lowerFirst(infoName)};`)
              code.push(`    }`)
            }
            code.push(`}`)
          }
          return [
            {
              type: 'Event',
              imports,
              content: code.join('\n'),
            },
          ]
        }
      )

      api.commands._setReadModelCodeProvider(() => [])

      api.commands._setCodeFileProvider(() => {
        const codeFiles: CodeFile[] = []
        const infoMap: Record<string, boolean> = {}

        function genInfos(infos: DomainDesignInfoRecord) {
          for (const info of Object.values(infos)) {
            if (!isValueObject(info)) {
              continue
            }
            const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName, VALUE_PACKAGE]
            const fileName = getDomainObjectName(info) + '.java'
            if (infoMap[`${parentDir.join('/')}/${fileName}`] === true) {
              continue
            }
            const codes = api.commands._genInfoCode(info)
            if (codes.length === 0) {
              continue
            }
            const file = new CodeFile(parentDir, fileName)
            file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}.${VALUE_PACKAGE};`)
            file.appendContentln('')
            for (const imp of codes[0].imports) {
              file.appendContentln(`import ${imp};`)
            }
            file.appendContentln('')
            file.appendContentln(codes[0].content)
            codeFiles.push(file)
            infoMap[`${parentDir.join('/')}/${fileName}`] = true
          }
        }

        const commands = api.states.designer.value._getContext().getCommands()
        for (const command of commands) {
          genInfos(command.inner)
          const codes = api.commands._genCommandCode(command)
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName, COMMAND_PACKAGE]
          codes.forEach((code) => {
            if (code.type === 'Command') {
              const file = new CodeFile(parentDir, getDomainObjectName(command) + '.java')
              file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}.${COMMAND_PACKAGE};`)
              file.appendContentln('')
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`import ${imp};`)
              }
              file.appendContentln('')
              file.appendContentln(code.content)
              codeFiles.push(file)
            } else if (code.type === 'CommandHandler') {
              const file = new CodeFile(parentDir, getDomainObjectName(command) + 'Handler.java')
              file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}.${COMMAND_PACKAGE};`)
              file.appendContentln('')
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`import ${imp};`)
              }
              file.appendContentln('')
              file.appendContentln(code.content)
              codeFiles.push(file)
            } else {
              isNever(code.type)
            }
          })
        }
        const facadeCommands = api.states.designer.value._getContext().getFacadeCommands()
        for (const facadeCmd of facadeCommands) {
          genInfos(facadeCmd.inner)
          const codes = api.commands._genFacadeCommandCode(facadeCmd)
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName, COMMAND_PACKAGE]
          codes.forEach((code) => {
            if (code.type === 'FacadeCommand') {
              const file = new CodeFile(parentDir, getDomainObjectName(facadeCmd) + '.java')
              file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}.${COMMAND_PACKAGE};`)
              file.appendContentln('')
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`import ${imp};`)
              }
              file.appendContentln('')
              file.appendContentln(code.content)
              codeFiles.push(file)
            } else if (code.type === 'FacadeCommandHandler') {
              const file = new CodeFile(parentDir, getDomainObjectName(facadeCmd) + 'Handler.java')
              file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}.${COMMAND_PACKAGE};`)
              file.appendContentln('')
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`import ${imp};`)
              }
              file.appendContentln('')
              file.appendContentln(code.content)
              codeFiles.push(file)
            } else {
              isNever(code.type)
            }
          })
        }
        const aggs = api.states.designer.value._getContext().getAggs()
        for (const agg of aggs) {
          genInfos(agg.inner)
          const codes = api.commands._genAggCode(agg)
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName]
          codes.forEach((code) => {
            if (code.type === 'Agg') {
              const file = new CodeFile(parentDir, getDomainObjectName(agg) + '.java')
              file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName};`)
              file.appendContentln('')
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`import ${imp};`)
              }
              file.appendContentln('')
              file.appendContentln(code.content)
              codeFiles.push(file)
            } else if (code.type === 'AggImpl') {
              const file = new CodeFile(parentDir, getDomainObjectName(agg) + 'Impl.java')
              file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName};`)
              file.appendContentln('')
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`import ${imp};`)
              }
              file.appendContentln('')
              file.appendContentln(code.content)
              codeFiles.push(file)
            } else {
              isNever(code.type)
            }
          })
        }
        const events = api.states.designer.value._getContext().getEvents()
        for (const event of events) {
          genInfos(event.inner)
          const codes = api.commands._genEventCode(event)
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName, EVENT_PACKAGE]
          codes.forEach((code) => {
            const file = new CodeFile(parentDir, getDomainObjectName(event) + '.java')
            file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}.${EVENT_PACKAGE};`)
            file.appendContentln('')
            file.addImports(code.imports)
            for (const imp of code.imports) {
              file.appendContentln(`import ${imp};`)
            }
            file.appendContentln('')
            file.appendContentln(code.content)
            codeFiles.push(file)
          })
        }
        // const readModels = api.states.designer.value._getContext().getReadModels()
        // for (const readModel of readModels) {
        //   const codes = api.commands._genReadModelCode(readModel)
        // }
        return codeFiles
      })
    },
  }
})
