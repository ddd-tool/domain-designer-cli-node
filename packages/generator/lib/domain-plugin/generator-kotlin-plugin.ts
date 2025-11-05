import { Ref } from '@vue/reactivity'
import { GeneratorPliginHelper } from '../domain/generator-agg'
import { CodeFile, CodeSnippets, kotlin } from '../domain/define'
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

const KotlinGeneratorAddition = kotlin.KotlinGeneratorAddition
type KotlinContext = kotlin.KotlinContext

export default GeneratorPliginHelper.createHotSwapPlugin(() => {
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
      const VALUE_PACKAGE = 'value'
      const context = api.states.context as Readonly<Ref<KotlinContext>>
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
        return inferKotlinTypeByName(imports, obj)
      }
      function getDomainObjectName(info: DomainDesignObject) {
        return strUtil.stringToUpperCamel(info._attributes.name)
      }
      function importInfos(imports: Set<string>, infos: DomainDesignInfo<DomainDesignInfoType, string>[]) {
        for (const info of infos) {
          if (!isValueObject(info)) {
            inferKotlinTypeByName(imports, info)
            continue
          }
          imports.add(
            `${context.value.namespace}.${context.value.moduleName}.${VALUE_PACKAGE}.${getDomainObjectName(info)}`
          )
        }
      }
      function inferKotlinTypeByName(imports: Set<string>, obj: DomainDesignObject): string {
        const additions = context.value.additions
        const name = strUtil.stringToLowerSnake(obj._attributes.name).replace(/_/, ' ')
        if (/\b(time|timestamp|date|deadline|expire)\b/.test(name)) {
          if (additions.has(KotlinGeneratorAddition.Timezone)) {
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
          (isDomainDesignInfo(obj) && (obj._attributes.type === 'Id' || obj._attributes.type === 'Version')) ||
          /\b(id|identifier|ver|version)$/.test(name)
        ) {
          return 'Long'
        }
        return 'String'
      }

      api.commands._setInfoCodeProvider(
        (info: DomainDesignInfo<DomainDesignInfoType, string>): CodeSnippets<'Info'>[] => {
          const imports = new Set<string>()
          const className = getDomainObjectName(info)
          const additions = context.value.additions
          const code: string[] = []
          if (additions.has(KotlinGeneratorAddition.ValueClass)) {
            imports.add('kotlin.jvm.JvmInline')
            code.push('@JvmInline')
            code.push(`value class ${className}(val value: ${inferKotlinTypeByName(imports, info)})`)
          } else {
            code.push(`data class ${className}(val value: ${inferKotlinTypeByName(imports, info)})`)
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

          {
            const imports = new Set<string>()
            const className = getDomainObjectName(cmd)
            const code: string[] = []
            const infos = Object.values(cmd.inner)
            importInfos(imports, infos)
            const infoCode: string[] = []
            for (const info of infos) {
              const infoName = getDomainObjectName(info)
              infoCode.push(`val ${strUtil.lowerFirst(infoName)}: ${inferObjectValueTypeByInfo(imports, info)}`)
            }
            code.push(`data class ${className}(${infoCode.join(', ')})`)
            codeSnippets.push({
              type: 'Command',
              imports,
              content: code.join('\n'),
            })
          }
          if (!additions.has(KotlinGeneratorAddition.CommandHandler)) {
            return codeSnippets
          }
          {
            const imports = new Set<string>()
            const className = getDomainObjectName(cmd)
            const code: string[] = []

            code.push(`class ${className}Handler {`)

            const aggs = [...api.states.designer.value._getContext().getAssociationMap()[cmd._attributes.__id]].filter(
              (agg) => agg._attributes.rule === 'Agg'
            )
            for (const agg of aggs) {
              imports.add(`${context.value.namespace}.${context.value.moduleName}.${getDomainObjectName(agg)}`)
              code.push(`    fun handle(command: ${className}): ${getDomainObjectName(agg)} {`)
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

      api.commands._setFacadeCommandCodeProvider(
        (cmd: DomainDesignFacadeCommand<DomainDesignInfoRecord>): CodeSnippets<'FacadeCommand'>[] => {
          const imports = new Set<string>()
          const className = getDomainObjectName(cmd)
          const code: string[] = []
          const infos = Object.values(cmd.inner)
          importInfos(imports, infos)
          const infoCode: string[] = []
          for (const info of infos) {
            const infoName = getDomainObjectName(info)
            infoCode.push(`val ${strUtil.lowerFirst(infoName)}: ${inferObjectValueTypeByInfo(imports, info)}`)
          }
          code.push(`data class ${className}(${infoCode.join(', ')})`)
          return [
            {
              type: 'FacadeCommand',
              imports,
              content: code.join('\n'),
            },
          ]
        }
      )

      api.commands._setAggCodeProvider((agg: DomainDesignAgg<DomainDesignInfoRecord>): CodeSnippets<'Agg'>[] => {
        const imports = new Set<string>()
        // const additions = context.value.additions
        const designer = api.states.designer.value

        const className = getDomainObjectName(agg)
        const code: string[] = []
        const infos = Object.values(agg.inner)
        importInfos(imports, infos)

        const interCode: string[] = []
        const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter((item) => {
          return item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
        })
        for (const command of commands) {
          const commandName = getDomainObjectName(command)
          // imports.add(`${context.value.namespace}.${context.value.moduleName}.${commandName}`)
          interCode.push(`fun handle(command: ${commandName})`)
        }
        code.push(`interface ${className} {`)
        code.push(`    ${interCode.join('\n    ')}`)
        code.push(`}`)
        code.push(``)
        code.push(`class ${className}Impl(`)
        const infoCode: string[] = []
        for (const info of infos) {
          const infoName = getDomainObjectName(info)
          infoCode.push(`val ${strUtil.lowerFirst(infoName)}: ${inferObjectValueTypeByInfo(imports, info)}`)
        }
        code.push(`    ${infoCode.join(',\n    ')}`)
        code.push(`): ${className} {`)
        for (const command of commands) {
          const commandName = getDomainObjectName(command)
          code.push(`    override fun handle(command: ${commandName}) {`)
          code.push(`        // HACK Implement`)
          code.push(`    }`)
        }
        code.push(`}`)
        return [
          {
            type: 'Agg',
            imports,
            content: code.join('\n'),
          },
        ]
      })

      api.commands._setEventCodeProvider(
        (event: DomainDesignEvent<DomainDesignInfoRecord>): CodeSnippets<'Event'>[] => {
          const imports = new Set<string>()
          const className = getDomainObjectName(event)
          const code: string[] = []
          const infos = Object.values(event.inner)
          importInfos(imports, infos)

          const infoCode: string[] = []
          for (const info of infos) {
            const infoName = getDomainObjectName(info)
            infoCode.push(`val ${strUtil.lowerFirst(infoName)}: ${inferObjectValueTypeByInfo(imports, info)}`)
          }
          code.push(`data class ${className}(${infoCode.join(', ')})`)
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
            const fileName = getDomainObjectName(info) + '.kt'
            if (infoMap[`${parentDir.join('/')}/${fileName}`] === true) {
              continue
            }
            const codes = api.commands._genInfoCode(info)
            if (codes.length === 0) {
              continue
            }
            const file = new CodeFile(parentDir, fileName)
            file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}.${VALUE_PACKAGE}`)
            file.appendContentln('')
            for (const imp of codes[0].imports) {
              file.appendContentln(`import ${imp}`)
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
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName]
          const file = new CodeFile(parentDir, getDomainObjectName(command) + '.kt')
          const codeBuff: string[] = []
          file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}`)
          file.appendContentln('')
          codes.forEach((code) => {
            if (code.type === 'Command') {
              file.addImports(code.imports)
              codeBuff.push(code.content)
            } else if (code.type === 'CommandHandler') {
              file.addImports(code.imports)
              codeBuff.push(code.content)
            } else {
              isNever(code.type)
            }
          })
          for (const imp of file.getImports()) {
            file.appendContentln(`import ${imp}`)
          }
          file.appendContentln(``)
          for (const buf of codeBuff) {
            file.appendContentln(buf)
          }
          codeFiles.push(file)
        }
        const facadeCommands = api.states.designer.value._getContext().getFacadeCommands()
        for (const facadeCmd of facadeCommands) {
          genInfos(facadeCmd.inner)
          const codes = api.commands._genFacadeCommandCode(facadeCmd)
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName]
          const file = new CodeFile(parentDir, getDomainObjectName(facadeCmd) + '.kt')
          const codeBuff: string[] = []
          file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}`)
          file.appendContentln('')
          codes.forEach((code) => {
            if (code.type === 'FacadeCommand') {
              file.addImports(code.imports)
              codeBuff.push(code.content)
            } else if (code.type === 'FacadeCommandHandler') {
              file.addImports(code.imports)
              codeBuff.push(code.content)
            } else {
              isNever(code.type)
            }
          })
          for (const imp of file.getImports()) {
            file.appendContentln(`import ${imp}`)
          }
          file.appendContentln(``)
          for (const buf of codeBuff) {
            file.appendContentln(buf)
          }
          codeFiles.push(file)
        }
        const aggs = api.states.designer.value._getContext().getAggs()
        for (const agg of aggs) {
          genInfos(agg.inner)
          const codes = api.commands._genAggCode(agg)
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName]
          const file = new CodeFile(parentDir, getDomainObjectName(agg) + '.kt')
          const codeBuff: string[] = []
          file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}`)
          file.appendContentln('')
          codes.forEach((code) => {
            if (code.type === 'Agg') {
              file.addImports(code.imports)
              codeBuff.push(code.content)
            } else if (code.type === 'AggImpl') {
              file.addImports(code.imports)
              codeBuff.push(code.content)
            } else {
              isNever(code.type)
            }
          })
          for (const imp of file.getImports()) {
            file.appendContentln(`import ${imp}`)
          }
          file.appendContentln(``)
          for (const buf of codeBuff) {
            file.appendContentln(buf)
          }
          codeFiles.push(file)
        }
        const events = api.states.designer.value._getContext().getEvents()
        for (const event of events) {
          genInfos(event.inner)
          const codes = api.commands._genEventCode(event)
          const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName]
          codes.forEach((code) => {
            if (code.type === 'Event') {
              const file = new CodeFile(parentDir, getDomainObjectName(event) + '.kt')
              file.appendContentln(`package ${context.value.namespace}.${context.value.moduleName}`)
              file.appendContentln('')
              file.addImports(code.imports)
              for (const imp of code.imports) {
                file.appendContentln(`import ${imp}`)
              }
              file.appendContentln('')
              file.appendContentln(code.content)
              codeFiles.push(file)
            } else {
              isNever(code.type)
            }
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
