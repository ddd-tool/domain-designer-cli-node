import { Ref } from '@vue/reactivity'
import { GeneratorPliginHelper } from '../domain/generator-agg'
import { CodeFile, CodeSnippets, go } from '../domain/define'
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

type GoContext = go.GoContext
// const GoGeneratorAddition = go.GoGeneratorAddition

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
      const context = api.states.context as Readonly<Ref<GoContext>>
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
        return inferGoTypeByName(imports, obj)
      }

      function getUpperDomainObjectName(info: DomainDesignObject) {
        return strUtil.stringToUpperCamel(info._attributes.name)
      }

      function getLowerDomainObjectName(info: DomainDesignObject) {
        return strUtil.stringToLowerCamel(info._attributes.name)
      }

      function inferGoTypeByName(imports: Set<string>, obj: DomainDesignObject) {
        const name = strUtil.stringToLowerSnake(obj._attributes.name).replace(/_/, ' ')
        if (/\b(time|timestamp|date|deadline|expire)\b/.test(name)) {
          imports.add('time')
          return 'time.Time'
        } else if (/\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(name)) {
          return 'int'
        } else if (/\b(price)$/.test(name)) {
          // imports.add('math/big')
          return 'string'
        } else if (/^(if|is)\b/.test(name)) {
          return 'bool'
        }
        if (
          isDomainDesignInfo(obj) &&
          (obj._attributes.type === 'Id' ||
            obj._attributes.type === 'Version' ||
            /\b(id|identifier|ver|version)$/.test(name))
        ) {
          return 'int64'
        }
        return 'string'
      }

      api.commands._setInfoCodeProvider(
        (info: DomainDesignInfo<DomainDesignInfoType, string>): CodeSnippets<'Info'>[] => {
          const imports = new Set<string>()
          const code: string[] = []
          code.push(`type ${getUpperDomainObjectName(info)} struct {`)
          code.push(`    value ${inferGoTypeByName(imports, info)}`)
          code.push(`}`)
          code.push(``)
          code.push(
            `func New${getUpperDomainObjectName(info)}(value ${inferGoTypeByName(
              imports,
              info
            )}) ${getUpperDomainObjectName(info)} {`
          )
          code.push(`    // HACK check value`)
          code.push(`    return ${getUpperDomainObjectName(info)}{value}`)
          code.push(`}`)
          code.push(
            `func (${getLowerDomainObjectName(info)} ${getUpperDomainObjectName(info)}) GetValue() ${inferGoTypeByName(
              imports,
              info
            )} {`
          )
          code.push(`    return ${getLowerDomainObjectName(info)}.value`)
          code.push(`}`)

          return [{ type: 'Info', imports, content: code.join('\n') }]
        }
      )

      api.commands._setCommandCodeProvider(
        (cmd: DomainDesignCommand<DomainDesignInfoRecord>): CodeSnippets<'Command'>[] => {
          const cmdStruct = getUpperDomainObjectName(cmd)
          const cmdVal = getLowerDomainObjectName(cmd)
          const imports = new Set<string>()
          const code: string[] = []
          code.push(`type ${cmdStruct} struct {`)
          const infos = Object.values(cmd.inner)
          for (const info of infos) {
            code.push(`    ${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
          }
          code.push(`}`)
          for (const info of infos) {
            code.push(
              `func (${cmdVal} ${cmdStruct}) Get${getUpperDomainObjectName(info)} () ${inferObjectValueTypeByInfo(
                imports,
                info
              )} {`
            )
            code.push(`    return ${cmdVal}.${getLowerDomainObjectName(info)}`)
            code.push(`}`)
          }
          const argsCode: string[] = []
          const structParams: string[] = []
          for (const info of infos) {
            argsCode.push(`${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
            structParams.push(getLowerDomainObjectName(info))
          }
          code.push(`func New${cmdStruct}(${argsCode.join(', ')}) ${cmdStruct} {`)
          code.push(`    // HACK check value`)
          code.push(`    return ${cmdStruct}{`)
          code.push(`        ${structParams.join(',\n        ')},`)
          code.push(`    }`)
          code.push(`}`)
          return [{ type: 'Command', imports, content: code.join('\n') }]
        }
      )

      api.commands._setFacadeCommandCodeProvider(
        (cmd: DomainDesignFacadeCommand<DomainDesignInfoRecord>): CodeSnippets<'FacadeCommand'>[] => {
          const cmdStruct = getUpperDomainObjectName(cmd)
          const cmdVal = getLowerDomainObjectName(cmd)
          const infos = Object.values(cmd.inner)
          const imports = new Set<string>()
          const code: string[] = []
          code.push(`type ${cmdStruct} struct {`)

          for (const info of infos) {
            code.push(`    ${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
          }
          code.push(`}`)
          for (const info of infos) {
            code.push(
              `func (${cmdVal} ${cmdStruct}) Get${getUpperDomainObjectName(info)} () ${inferObjectValueTypeByInfo(
                imports,
                info
              )} {`
            )
            code.push(`    return ${cmdVal}.${getLowerDomainObjectName(info)}`)
            code.push(`}`)
          }
          const argsCode: string[] = []
          const structParams: string[] = []
          for (const info of infos) {
            argsCode.push(`${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
            structParams.push(getLowerDomainObjectName(info))
          }
          code.push(`func New${cmdStruct}(${argsCode.join(', ')}) ${cmdStruct} {`)
          code.push(`    // HACK check value`)
          code.push(`    return ${cmdStruct}{`)
          code.push(`        ${structParams.join(',\n        ')},`)
          code.push(`    }`)
          code.push(`}`)
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
        const designer = api.states.designer.value
        const aggStruct = getUpperDomainObjectName(agg)
        const aggVal = getLowerDomainObjectName(agg)
        const infos = Object.values(agg.inner)
        const imports = new Set<string>()
        const code: string[] = []

        code.push(`type ${aggStruct} struct {`)
        for (const info of infos) {
          code.push(`    ${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
        }
        code.push(`}`)
        for (const info of infos) {
          code.push(
            `func (${aggVal} ${aggStruct}) Get${getUpperDomainObjectName(info)} () ${inferObjectValueTypeByInfo(
              imports,
              info
            )} {`
          )
          code.push(`    return ${aggVal}.${getLowerDomainObjectName(info)}`)
          code.push(`}`)
        }

        const argsCode: string[] = []
        const structParams: string[] = []
        for (const info of infos) {
          argsCode.push(`${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
          structParams.push(getLowerDomainObjectName(info))
        }
        code.push(`func New${aggStruct}(${argsCode.join(', ')}) ${aggStruct} {`)
        code.push(`    // HACK check value`)
        code.push(`    return ${aggStruct}{`)
        code.push(`        ${structParams.join(',\n        ')},`)
        code.push(`    }`)
        code.push(`}`)
        code.push(``)

        const commands = [...designer._getContext().getAssociationMap()[agg._attributes.__id]].filter((item) => {
          return item._attributes.rule === 'Command' || item._attributes.rule === 'FacadeCommand'
        })
        for (const cmd of commands) {
          const cmdStruct = getUpperDomainObjectName(cmd)
          const cmdVal = getLowerDomainObjectName(cmd)
          code.push(`func (${aggVal} ${aggStruct}) Handle${cmdStruct} (${cmdVal} ${cmdStruct}) {`)
          code.push(`    // HACK implement`)
          code.push(`}`)
        }
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
          const code: string[] = []
          const imports = new Set<string>()
          const infos = Object.values(event.inner)
          const eventStruct = getUpperDomainObjectName(event)
          const eventVal = getLowerDomainObjectName(event)

          code.push(`type ${eventStruct} struct {`)
          for (const info of infos) {
            code.push(`    ${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
          }
          code.push(`}`)
          for (const info of infos) {
            code.push(
              `func (${eventVal} ${eventStruct}) Get${getUpperDomainObjectName(info)} () ${inferObjectValueTypeByInfo(
                imports,
                info
              )} {`
            )
            code.push(`    return ${eventVal}.${getLowerDomainObjectName(info)}`)
            code.push(`}`)
          }
          const argsCode: string[] = []
          const structParams: string[] = []
          for (const info of infos) {
            argsCode.push(`${getLowerDomainObjectName(info)} ${inferObjectValueTypeByInfo(imports, info)}`)
            structParams.push(getLowerDomainObjectName(info))
          }
          code.push(`func New${eventStruct}(${argsCode.join(', ')}) ${eventStruct} {`)
          code.push(`    // HACK check value`)
          code.push(`    return ${eventStruct}{`)
          code.push(`        ${structParams.join(',\n        ')},`)
          code.push(`    }`)
          code.push(`}`)

          return [
            {
              type: 'Event',
              imports,
              content: code.join('\n'),
            },
          ]
        }
      )

      api.commands._setCodeFileProvider((): CodeFile[] => {
        const codeFiles: CodeFile[] = []
        const infoMap: Record<string, boolean> = {}

        const parentDir = [...context.value.namespace.split(/\./), context.value.moduleName]
        const file = new CodeFile(parentDir, `${context.value.moduleName}.go`)
        const fileCode: string[] = []
        const infoFile = new CodeFile(parentDir, `${context.value.moduleName}_value_object.go`)
        const infoFileCode: string[] = []

        function genInfos(infos: DomainDesignInfoRecord) {
          for (const info of Object.values(infos)) {
            if (!isValueObject(info)) {
              continue
            }
            const infoStruct = getUpperDomainObjectName(info)
            if (infoMap[`${parentDir.join('/')}/${infoStruct}`] === true) {
              continue
            }
            const codes = api.commands._genInfoCode(info)
            if (codes.length === 0) {
              continue
            }
            infoFile.addImports(codes[0].imports)
            infoFileCode.push(codes[0].content)
            infoFileCode.push('')
            infoMap[`${parentDir.join('/')}/${infoStruct}`] = true
          }
        }

        const commands = api.states.designer.value._getContext().getCommands()
        for (const command of commands) {
          genInfos(command.inner)
          const codes = api.commands._genCommandCode(command)
          for (const code of codes) {
            if (infoMap[code.content] === true) {
              continue
            }
            file.addImports(code.imports)
            fileCode.push(code.content)
          }
        }

        const facadeCommands = api.states.designer.value._getContext().getFacadeCommands()
        for (const facadeCommand of facadeCommands) {
          genInfos(facadeCommand.inner)
          const codes = api.commands._genFacadeCommandCode(facadeCommand)
          for (const code of codes) {
            if (infoMap[code.content] === true) {
              continue
            }
            file.addImports(code.imports)
            fileCode.push(code.content)
          }
        }

        const aggs = api.states.designer.value._getContext().getAggs()
        for (const agg of aggs) {
          genInfos(agg.inner)
          const codes = api.commands._genAggCode(agg)
          for (const code of codes) {
            if (infoMap[code.content] === true) {
              continue
            }
            file.addImports(code.imports)
            fileCode.push(code.content)
          }
        }

        const events = api.states.designer.value._getContext().getEvents()
        for (const event of events) {
          genInfos(event.inner)
          const codes = api.commands._genEventCode(event)
          for (const code of codes) {
            if (infoMap[code.content] === true) {
              continue
            }
            file.addImports(code.imports)
            fileCode.push(code.content)
          }
        }

        file.appendContentln(`package ${context.value.moduleName}`)
        file.appendContentln(``)
        if (file.getImports().length > 0) {
          file.appendContentln(`import (`)
          file.appendContentln(`    ${[...file.getImports()].join('\n    ')}`)
          file.appendContentln(`)`)
        }
        file.appendContentln(fileCode.join('\n'))

        infoFile.appendContentln(`package ${context.value.moduleName}`)
        infoFile.appendContentln(``)
        if (infoFile.getImports().length > 0) {
          infoFile.appendContentln(`import (`)
          infoFile.appendContentln(`    ${[...infoFile.getImports()].map((i) => `"${i}"`).join('\n    ')}`)
          infoFile.appendContentln(`)`)
          infoFile.appendContentln(``)
        }
        infoFile.appendContentln(infoFileCode.join('\n'))

        codeFiles.push(file)
        codeFiles.push(infoFile)
        return codeFiles
      })
    },
  }
})
