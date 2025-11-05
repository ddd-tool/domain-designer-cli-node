import { genId, useInternalContext } from './common'
import {
  CustomInfo,
  CustomInfoArrayToInfoObject,
  DomainDesignCommand,
  DomainDesignNote,
  DomainDesignFacadeCommand,
  DomainDesignSystem,
  DomainDesignSystemProvider,
  NonEmptyArray,
  DomainDesignEvent,
} from './define'

export function createSystemProvider(designId: string): DomainDesignSystemProvider {
  const RULE = 'System'
  return (name: string, note?: string | DomainDesignNote) => {
    const context = useInternalContext(designId)
    const __id = genId()
    function command<COMMAND extends DomainDesignCommand<any>>(param: COMMAND): COMMAND
    function command<G_NAME extends string, ARR extends NonEmptyArray<CustomInfo<G_NAME>>>(
      name: string,
      infos: ARR,
      note?: string | DomainDesignNote
    ): DomainDesignCommand<CustomInfoArrayToInfoObject<ARR>>
    function command<
      COMMAND extends DomainDesignCommand<any>,
      G_NAME extends string,
      ARR extends NonEmptyArray<CustomInfo<G_NAME>>
    >(
      param1: COMMAND | string,
      infos?: ARR,
      note?: string | DomainDesignNote
    ): COMMAND | DomainDesignCommand<CustomInfoArrayToInfoObject<ARR>> {
      if (typeof param1 === 'object') {
        context.linkTo(RULE, __id, param1._attributes.rule, param1._attributes.__id)
        return param1
      }
      const a = context.createCommand(param1, infos!, note)
      context.linkTo(RULE, __id, a._attributes.rule, a._attributes.__id)
      return a
    }

    function facadeCmd<FACADECMD extends DomainDesignFacadeCommand<any>>(param: FACADECMD): FACADECMD
    function facadeCmd<G_NAME extends string, ARR extends NonEmptyArray<CustomInfo<G_NAME>>>(
      name: string,
      infos: ARR,
      note?: string | DomainDesignNote
    ): DomainDesignFacadeCommand<CustomInfoArrayToInfoObject<ARR>>
    function facadeCmd<
      FACADECMD extends DomainDesignFacadeCommand<any>,
      G_NAME extends string,
      ARR extends NonEmptyArray<CustomInfo<G_NAME>>
    >(
      param1: FACADECMD | string,
      infos?: ARR,
      note?: string | DomainDesignNote
    ): FACADECMD | DomainDesignFacadeCommand<CustomInfoArrayToInfoObject<ARR>> {
      if (typeof param1 === 'object') {
        context.linkTo(RULE, __id, param1._attributes.rule, param1._attributes.__id)
        return param1
      } else {
        const c = context.createFacadeCommand(param1, infos!, note)
        context.linkTo(RULE, __id, c._attributes.rule, c._attributes.__id)
        return c
      }
    }

    function event<EVENT extends DomainDesignEvent<any>>(param: EVENT): EVENT
    function event<G_NAME extends string, ARR extends NonEmptyArray<CustomInfo<G_NAME>>>(
      name: string,
      infos: ARR,
      note?: string | DomainDesignNote
    ): DomainDesignEvent<CustomInfoArrayToInfoObject<ARR>>
    function event<
      EVENT extends DomainDesignEvent<any>,
      G_NAME extends string,
      ARR extends NonEmptyArray<CustomInfo<G_NAME>>
    >(param1: EVENT | string, infos?: ARR, note?: string | DomainDesignNote) {
      if (typeof param1 === 'object') {
        context.linkTo(RULE, __id, param1._attributes.rule, param1._attributes.__id)
        return param1
      } else {
        const c = context.createEvent(param1, infos!, note)
        context.linkTo(RULE, __id, c._attributes.rule, c._attributes.__id)
        return c
      }
    }
    const system: DomainDesignSystem = {
      _attributes: {
        __id,
        rule: RULE,
        name,
        note: context.createNote(note as any),
      },
      command,
      facadeCmd,
      event,
      toFormat() {
        return context.toFormat(this)
      },
    }
    context.registerSystem(system)
    return system
  }
}
