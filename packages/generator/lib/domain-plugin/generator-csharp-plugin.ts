import { GeneratorPliginHelper } from '../domain/generator-agg'
import { csharp, CodeSnippets, CodeFile } from '../domain/define'
import { Ref } from '@vue/reactivity'
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
import { strUtil } from '../common'

const CSharpGeneratorAddition = csharp.CSharpGeneratorAddition
type CSharpContext = csharp.CSharpContext

export default GeneratorPliginHelper.createHotSwapPlugin(() => {
  const TAB = '    '
  function addTab(str: string, number: number = 1) {
    return str
      .split('\n')
      .map((s) => TAB.repeat(number) + s)
      .join('\n')
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
      const context = api.states.context as Readonly<Ref<CSharpContext>>
      const ignoredValueObjects = api.states.designer.value
        ._getContext()
        .getDesignerOptions()
        .ignoreValueObjects.map((s) => strUtil.stringToLowerCamel(s))
      function isValueObject(info: DomainDesignInfo<DomainDesignInfoType, string>): boolean {
        return !ignoredValueObjects.includes(strUtil.stringToLowerCamel(info._attributes.name))
      }
      function inferObjectValueTypeByInfo(imports: Set<string>, obj: DomainDesignInfo<DomainDesignInfoType, string>) {
        if (isValueObject(obj)) {
          return strUtil.stringToUpperCamel(obj._attributes.name)
        }
        return inferCsharpTypeByName(imports, obj)
      }

      function getDomainObjectName(info: DomainDesignObject) {
        return strUtil.stringToUpperCamel(info._attributes.name)
      }

      function getStructModifier(additions: Set<csharp.CSharpGeneratorAddition>): string {
        return additions.has(CSharpGeneratorAddition.RecordStruct) ? ' struct' : ''
      }

      function inferCsharpTypeByName(_imports: Set<string>, obj: DomainDesignObject): string {
        const additions = context.value.additions
        const name = strUtil.stringToLowerSnake(obj._attributes.name).replace(/_/, ' ')
        if (/\b(time|timestamp|date|deadline|expire)\b/.test(name)) {
          if (additions.has(CSharpGeneratorAddition.Timezone)) {
            return 'System.DateTimeOffset'
          } else {
            return 'System.DateTime'
          }
        } else if (/\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(name)) {
          return 'int'
        } else if (/\b(price)$/.test(name)) {
          return 'decimal'
        } else if (/^(if|is)\b/.test(name)) {
          return 'bool'
        }
        if (
          isDomainDesignInfo(obj) &&
          (obj._attributes.type === 'Id' ||
            obj._attributes.type === 'Version' ||
            /\b(id|identifier|ver|version)$/.test(name))
        ) {
          return 'long'
        }
        return 'string'
      }

      api.commands._setInfoCodeProvider(
        (info: DomainDesignInfo<DomainDesignInfoType, string>): CodeSnippets<'Info'>[] => {
          const additions = context.value.additions
          const imports = new Set<string>()
          const code: string[] = []
          code.push(
            `public record${getStructModifier(additions)} ${getDomainObjectName(info)}(${inferCsharpTypeByName(
              imports,
              info
            )} value);`
          )
          return [
            {
              type: 'Info',
              content: code.join('\n'),
              imports,
            },
          ]
        }
      )

      api.commands._setCommandCodeProvider(
        (cmd: DomainDesignCommand<DomainDesignInfoRecord>): CodeSnippets<'Command' | 'CommandHandler'>[] => {
          const result: CodeSnippets<'Command' | 'CommandHandler'>[] = []
          const additions = context.value.additions
          const imports = new Set<string>()
          const commandName = getDomainObjectName(cmd)
          {
            const code: string[] = []
            const infos = Object.values(cmd.inner)
            code.push(`public record${getStructModifier(additions)} ${commandName}`)
            code.push(`(`)
            const infoCode: string[] = []
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              infoCode.push(`${inferObjectValueTypeByInfo(imports, info)} ${strUtil.upperFirst(infoName)}`)
            }
            code.push(`    ${infoCode.join(',\n    ')}`)
            code.push(`)`)
            code.push(`{`)
            code.push(`}`)
            result.push({
              type: 'Command',
              content: code.join('\n'),
              imports,
            })
          }
          {
            const commandHandlerInterface = (() => {
              if (additions.has(CSharpGeneratorAddition.CommandHandlerInterface)) {
                return ` : ${context.value.commandHandlerInterface}`
              }
              return ''
            })()
            const code: string[] = []
            code.push(`public class ${commandName}Handler${commandHandlerInterface}`)
            code.push(`{`)
            code.push(`    public void Handle(${commandName} command)`)
            code.push(`    {`)
            code.push(`        // HACK implement`)
            code.push(`    }`)
            code.push(`}`)
            result.push({
              type: 'CommandHandler',
              content: code.join('\n'),
              imports,
            })
          }
          return result
        }
      )

      api.commands._setFacadeCommandCodeProvider(
        (
          cmd: DomainDesignFacadeCommand<DomainDesignInfoRecord>
        ): CodeSnippets<'FacadeCommand' | 'FacadeCommandHandler'>[] => {
          const result: CodeSnippets<'FacadeCommand' | 'FacadeCommandHandler'>[] = []
          const additions = context.value.additions
          const imports = new Set<string>()
          const commandName = getDomainObjectName(cmd)
          {
            const code: string[] = []
            const infos = Object.values(cmd.inner)
            code.push(`public record${getStructModifier(additions)} ${commandName}`)
            code.push(`(`)
            const infoCode: string[] = []
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              infoCode.push(`${inferObjectValueTypeByInfo(imports, info)} ${strUtil.upperFirst(infoName)}`)
            }
            code.push(`    ${infoCode.join(',\n    ')}`)
            code.push(`)`)
            code.push(`{`)
            code.push(`}`)
            result.push({
              type: 'FacadeCommand',
              content: code.join('\n'),
              imports,
            })
          }
          {
            const commandHandlerInterface = (() => {
              if (additions.has(CSharpGeneratorAddition.CommandHandlerInterface)) {
                return ` : ${context.value.commandHandlerInterface}`
              }
              return ''
            })()
            const code: string[] = []
            code.push(`public class ${commandName}Handler${commandHandlerInterface}`)
            code.push(`{`)
            code.push(`    public void Handle(${commandName} command)`)
            code.push(`    {`)
            code.push(`        // HACK implement`)
            code.push(`    }`)
            code.push(`}`)
            result.push({
              type: 'FacadeCommandHandler',
              content: code.join('\n'),
              imports,
            })
          }
          return result
        }
      )

      api.commands._setAggCodeProvider(
        (agg: DomainDesignAgg<DomainDesignInfoRecord>): CodeSnippets<'Agg' | 'AggImpl'>[] => {
          const result: CodeSnippets<'Agg' | 'AggImpl'>[] = []
          const designer = api.states.designer.value
          const additions = context.value.additions
          {
            const imports = new Set<string>()
            const code: string[] = []
            const aggInterface = (() => {
              if (additions.has(CSharpGeneratorAddition.AggInterface)) {
                return ` : ${context.value.aggInterface}`
              }
              return ''
            })()
            code.push(`public interface I${getDomainObjectName(agg)}${aggInterface}`)
            code.push(`{`)
            const funCode: string[] = []
            const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter((item) => {
              return item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
            })
            for (const command of commands) {
              const commandName = getDomainObjectName(command)
              funCode.push(`void Handle${commandName}(${commandName} command);`)
            }
            code.push(`    ${funCode.join('\n\n    ')}`)
            code.push(`}`)
            code.push(``)
            result.push({
              type: 'Agg',
              content: code.join('\n'),
              imports,
            })
          }
          {
            const imports = new Set<string>()
            const code: string[] = []
            const aggName = getDomainObjectName(agg)
            const infos = Object.values(agg.inner)
            const aggInterface = (() => {
              if (additions.has(CSharpGeneratorAddition.AggInterface)) {
                return `, ${context.value.aggInterface}`
              }
              return ''
            })()
            if (additions.has(CSharpGeneratorAddition.PrimaryConstructor)) {
              const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter((item) => {
                return item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
              })
              const paramCode: string[] = []
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                paramCode.push(`${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(infoName)}`)
              }
              code.push(`public class ${aggName}`)
              code.push(`(`)
              code.push(`    ${paramCode.join(`,\n    `)}`)
              code.push(`): I${aggName}${aggInterface}`)
              code.push(`{`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(
                  `    public ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.upperFirst(
                    infoName
                  )} { get; private set; } = ${strUtil.lowerFirst(infoName)};`
                )
                code.push(``)
              }
              const funCode: string[] = []
              for (const command of commands) {
                const commandName = getDomainObjectName(command)
                funCode.push(`public void Handle${commandName}(${commandName} command)`)
                funCode.push(`{`)
                funCode.push(`    // HACK implement`)
                funCode.push(`}`)
                funCode.push(``)
              }
              code.push(`    ${funCode.join('\n    ')}`)
              code.push(`}`)
            } else {
              const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter((item) => {
                return item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
              })
              code.push(`public class ${aggName} : I${aggName}${aggInterface}`)
              code.push(`{`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(
                  `    public ${inferObjectValueTypeByInfo(imports, info)} ${strUtil.lowerFirst(
                    infoName
                  )} { get; private set; }`
                )
              }
              code.push(``)
              const paramCode: string[] = []
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                paramCode.push(`${inferObjectValueTypeByInfo(imports, info)} ${infoName}`)
              }
              code.push(`    public ${aggName}(${paramCode.join(', ')})`)
              code.push(`    {`)
              for (const info of infos) {
                const infoName = getDomainObjectName(info)
                code.push(`        ${infoName} = ${strUtil.lowerFirst(infoName)};`)
              }
              code.push(`    }`)
              const funCode: string[] = []
              for (const command of commands) {
                const commandName = getDomainObjectName(command)
                funCode.push(`public void Handle${commandName}(${commandName} command)`)
                funCode.push(`{`)
                funCode.push(`    // HACK implement`)
                funCode.push(`}`)
                funCode.push(``)
              }
              code.push(`    ${funCode.join('\n    ')}`)
              code.push(`}`)
            }

            result.push({
              type: 'AggImpl',
              content: code.join('\n'),
              imports,
            })
          }
          return result
        }
      )

      api.commands._setEventCodeProvider(
        (event: DomainDesignEvent<DomainDesignInfoRecord>): CodeSnippets<'Event'>[] => {
          const additions = context.value.additions
          const eventName = getDomainObjectName(event)
          const imports = new Set<string>()
          const infos = Object.values(event.inner)
          const code: string[] = []
          code.push(`public record${getStructModifier(additions)} ${eventName}`)
          code.push(`(`)
          const infoCode: string[] = []
          for (const info of infos) {
            const infoName = getDomainObjectName(info)
            infoCode.push(`${inferObjectValueTypeByInfo(imports, info)} ${strUtil.upperFirst(infoName)}`)
          }
          code.push(`    ${infoCode.join(',\n    ')}`)
          code.push(`)`)
          code.push(`{`)
          code.push(`}`)
          return [
            {
              type: 'Event',
              content: code.join('\n'),
              imports,
            },
          ]
        }
      )

      api.commands._setReadModelCodeProvider(() => [])

      api.commands._setCodeFileProvider((): CodeFile[] => {
        const codeFiles: CodeFile[] = []
        const infoMap: Record<string, boolean> = {}
        const parentDir = [...context.value.namespace.split(/\./), strUtil.stringToUpperCamel(context.value.moduleName)]

        function genInfos(infos: DomainDesignInfoRecord): void {
          for (const info of Object.values(infos)) {
            if (!isValueObject(info)) {
              continue
            }
            const fileName = getDomainObjectName(info) + '.cs'
            if (infoMap[`${parentDir.join('/')}/${fileName}`] === true) {
              continue
            }
            const codes = api.commands._genInfoCode(info)
            if (codes.length === 0) {
              continue
            }
            const file = new CodeFile(parentDir, fileName)
            for (const imp of codes[0].imports) {
              file.appendContentln(`using ${imp};`)
            }
            file.appendContentln('')
            file.appendContentln(
              `namespace ${context.value.namespace}.${strUtil.stringToUpperCamel(context.value.moduleName)}`
            )
            file.appendContentln('{')
            file.appendContentln(addTab(codes[0].content))
            file.appendContentln('}')
            codeFiles.push(file)
            infoMap[`${parentDir.join('/')}/${fileName}`] = true
          }
        }

        const commands = api.states.designer.value._getContext().getCommands()
        for (const command of commands) {
          genInfos(command.inner)
          const fileName = getDomainObjectName(command) + '.cs'
          const codes = api.commands._genCommandCode(command)
          const file = new CodeFile(parentDir, fileName)
          for (const code of codes) {
            if (code.type === 'Command') {
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`using ${imp};`)
              }
              file.appendContentln('')
              file.appendContentln(
                `namespace ${context.value.namespace}.${strUtil.stringToUpperCamel(context.value.moduleName)}`
              )
              file.appendContentln('{')
              file.appendContentln(addTab(code.content))
              file.appendContentln('}')
            }
          }
          codeFiles.push(file)
        }

        const facadeCommands = api.states.designer.value._getContext().getFacadeCommands()
        for (const command of facadeCommands) {
          genInfos(command.inner)
          const fileName = getDomainObjectName(command) + '.cs'
          const codes = api.commands._genFacadeCommandCode(command)
          const file = new CodeFile(parentDir, fileName)
          file.addImports(codes[0].imports)
          for (const imp of codes[0].imports) {
            file.appendContentln(`using ${imp};`)
          }
          file.appendContentln('')
          file.appendContentln(
            `namespace ${context.value.namespace}.${strUtil.stringToUpperCamel(context.value.moduleName)}`
          )
          file.appendContentln('{')
          file.appendContentln(addTab(codes[0].content))
          file.appendContentln('}')
          codeFiles.push(file)
        }

        const aggs = api.states.designer.value._getContext().getAggs()
        for (const agg of aggs) {
          genInfos(agg.inner)
          const codes = api.commands._genAggCode(agg)
          const fileName = getDomainObjectName(agg) + '.cs'
          const file = new CodeFile(parentDir, fileName)
          for (const code of codes) {
            file.addImports(code.imports)
            for (const imp of code.imports) {
              file.appendContentln(`using ${imp};`)
            }
            file.appendContentln('')
          }
          file.appendContentln(
            `namespace ${context.value.namespace}.${strUtil.stringToUpperCamel(context.value.moduleName)}`
          )
          file.appendContentln(`{`)
          for (const code of codes) {
            file.appendContentln(addTab(code.content))
          }
          file.appendContentln(`}`)
          codeFiles.push(file)
        }

        const events = api.states.designer.value._getContext().getEvents()
        for (const event of events) {
          genInfos(event.inner)
          const fileName = getDomainObjectName(event) + '.cs'
          const codes = api.commands._genEventCode(event)
          const file = new CodeFile(parentDir, fileName)
          file.addImports(codes[0].imports)
          for (const imp of codes[0].imports) {
            file.appendContentln(`using ${imp};`)
          }
          file.appendContentln('')
          file.appendContentln(
            `namespace ${context.value.namespace}.${strUtil.stringToUpperCamel(context.value.moduleName)}`
          )
          file.appendContentln('{')
          file.appendContentln(addTab(codes[0].content))
          file.appendContentln('}')
          codeFiles.push(file)
        }
        return codeFiles
      })
    },
  }
})
