import { genId, useInternalContext } from './common'
import type {
  DomainDesignNote,
  DomainDesignInfo,
  DomainDesignInfoProvider,
  DomainDesignInfoFuncDependsOn,
  NonEmptyArray,
} from './define'

export function createInfoProvider(designId: string): DomainDesignInfoProvider {
  return () => {
    function func<NAME extends string>(name: NAME, note?: string | DomainDesignNote): DomainDesignInfo<'Function', NAME>
    function func<NAME extends string>(
      name: NAME,
      dependsOn: NonEmptyArray<DomainDesignInfoFuncDependsOn | string | [string, string | DomainDesignNote]>,
      note?: string | DomainDesignNote
    ): DomainDesignInfo<'Function', NAME>
    function func<NAME extends string>(
      name: NAME,
      p2?:
        | NonEmptyArray<DomainDesignInfoFuncDependsOn | string | [string, string | DomainDesignNote]>
        | string
        | DomainDesignNote,
      p3?: string | DomainDesignNote
    ): DomainDesignInfo<'Function', NAME> {
      const context = useInternalContext(designId)
      let subtype: Array<DomainDesignInfoFuncDependsOn> = []
      let note: DomainDesignNote | undefined = undefined
      if (p2 instanceof Array) {
        subtype = context.customInfoArrToInfoArr(p2 as any) as DomainDesignInfoFuncDependsOn[]
        note = p3 as DomainDesignNote | undefined
      } else {
        note = p2 as DomainDesignNote | undefined
      }
      const result = {
        _attributes: {
          __id: genId(),
          rule: 'Info' as const,
          type: 'Function' as const,
          subtype,
          name,
          note: context.createNote(note as any),
        },
        toFormat() {
          return context.toFormat(this)
        },
      }
      context.registerInfo(result)
      return result
    }

    return {
      document<NAME extends string>(name: NAME, note?: string | DomainDesignNote): DomainDesignInfo<'Document', NAME> {
        const context = useInternalContext(designId)
        const result = {
          _attributes: {
            __id: genId(),
            rule: 'Info' as const,
            type: 'Document' as const,
            subtype: 'None' as const,
            name,
            note: context.createNote(note as any),
          },
          toFormat() {
            return context.toFormat(this)
          },
        }
        context.registerInfo(result)
        return result
      },
      func,
      id<NAME extends string>(name: NAME, note?: string | DomainDesignNote): DomainDesignInfo<'Id', NAME> {
        const context = useInternalContext(designId)
        const result = {
          _attributes: {
            __id: genId(),
            rule: 'Info' as const,
            type: 'Id' as const,
            subtype: 'None' as const,
            name,
            note: context.createNote(note as any),
          },
          toFormat() {
            return context.toFormat(this)
          },
        }
        context.registerInfo(result)
        return result
      },
      valueObj<NAME extends string>(
        name: NAME,
        note?: string | DomainDesignNote
      ): DomainDesignInfo<'ValueObject', NAME> {
        const context = useInternalContext(designId)
        const result: DomainDesignInfo<'ValueObject', NAME> = {
          _attributes: {
            __id: genId(),
            rule: 'Info' as const,
            type: 'ValueObject' as const,
            subtype: 'None' as const,
            name,
            note: context.createNote(note as any),
          },
          toFormat() {
            return context.toFormat(this)
          },
        }
        context.registerInfo(result)
        return result
      },
      version<NAME extends string>(name: NAME, note?: string | DomainDesignNote): DomainDesignInfo<'Version', NAME> {
        const context = useInternalContext(designId)
        const result = {
          _attributes: {
            __id: genId(),
            rule: 'Info' as const,
            type: 'Version' as const,
            subtype: 'None' as const,
            name,
            note: context.createNote(note as any),
          },
          toFormat() {
            return context.toFormat(this)
          },
        }
        context.registerInfo(result)
        return result
      },
    }
  }
}
