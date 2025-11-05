import { genId, useInternalContext } from './common'
import {
  DomainDesignCommand,
  DomainDesignNote,
  DomainDesignFacadeCommand,
  DomainDesignActor,
  DomainDesignActorProvider,
  DomainDesignReadModel,
  NonEmptyInitFunc,
  NonEmptyArray,
  DomainDesignInfo,
  DomainDesignInfoType,
  CustomInfoArrayToInfoObject,
} from './define'

export function createActorProvider(designId: string): DomainDesignActorProvider {
  const RULE = 'Actor'
  return (name: string, note?: string | DomainDesignNote) => {
    const context = useInternalContext(designId)
    const __id = genId()
    function command<COMMAND extends DomainDesignCommand<any>>(c: COMMAND): COMMAND
    function command<
      G_NAME extends string,
      ARR extends NonEmptyArray<DomainDesignInfo<DomainDesignInfoType, G_NAME> | G_NAME>
    >(name: string, infos: ARR, note?: string | DomainDesignNote): DomainDesignCommand<CustomInfoArrayToInfoObject<ARR>>
    function command<
      COMMAND extends DomainDesignCommand<any>,
      G_NAME extends string,
      ARR extends NonEmptyArray<DomainDesignInfo<DomainDesignInfoType, G_NAME> | G_NAME>
    >(
      param1: COMMAND | string,
      infos?: ARR,
      note?: string | DomainDesignNote
    ): COMMAND | DomainDesignCommand<CustomInfoArrayToInfoObject<ARR>> {
      if (typeof param1 === 'object') {
        context.linkTo(RULE, __id, param1._attributes.rule, param1._attributes.__id)
        return param1
      }
      const c = context.createCommand(name, infos!, note)
      context.linkTo(RULE, __id, c._attributes.rule, c._attributes.__id)
      return c
    }

    function facadeCmd<FACADECMD extends DomainDesignFacadeCommand<any>>(param: FACADECMD): FACADECMD
    function facadeCmd<
      G_NAME extends string,
      ARR extends NonEmptyArray<DomainDesignInfo<DomainDesignInfoType, G_NAME> | G_NAME>
    >(
      name: string,
      infos: ARR,
      note?: string | DomainDesignNote
    ): DomainDesignFacadeCommand<CustomInfoArrayToInfoObject<ARR>>
    function facadeCmd<
      FACADECMD extends DomainDesignFacadeCommand<any>,
      G_NAME extends string,
      ARR extends NonEmptyArray<DomainDesignInfo<DomainDesignInfoType, G_NAME> | G_NAME>
    >(
      param1: FACADECMD | string,
      infos?: ARR,
      note?: string | DomainDesignNote
    ): FACADECMD | DomainDesignFacadeCommand<CustomInfoArrayToInfoObject<ARR>> {
      if (typeof param1 === 'object') {
        context.linkTo(RULE, __id, param1._attributes.rule, param1._attributes.__id)
        return param1
      }
      const c = context.createFacadeCommand(name, infos!, note)
      context.linkTo(RULE, __id, c._attributes.rule, c._attributes.__id)
      return c
    }

    function readModel<READ_MODEL extends DomainDesignReadModel<any>>(param: READ_MODEL): READ_MODEL
    function readModel<
      G_NAME extends string,
      ARR extends NonEmptyArray<DomainDesignInfo<DomainDesignInfoType, G_NAME> | G_NAME>
    >(
      name: string,
      infos: ARR | NonEmptyInitFunc<() => ARR>,
      note?: string | DomainDesignNote
    ): DomainDesignReadModel<CustomInfoArrayToInfoObject<ARR>>
    function readModel<
      READ_MODEL extends DomainDesignReadModel<any>,
      G_NAME extends string,
      ARR extends NonEmptyArray<DomainDesignInfo<DomainDesignInfoType, G_NAME> | G_NAME>
    >(
      param1: READ_MODEL | string,
      infos?: ARR | NonEmptyInitFunc<() => ARR>,
      note?: string | DomainDesignNote
    ): READ_MODEL | DomainDesignReadModel<CustomInfoArrayToInfoObject<ARR>> {
      if (typeof param1 === 'object') {
        context.linkTo(RULE, __id, param1._attributes.rule, param1._attributes.__id, 'Dependency')
        return param1
      }
      const c = context.createReadModel(name, infos!, note)
      context.linkTo(RULE, __id, c._attributes.rule, c._attributes.__id, 'Dependency')
      return c
    }
    const actor: DomainDesignActor = {
      _attributes: {
        __id,
        rule: RULE,
        name,
        note: context.createNote(note as any),
      },
      command,
      facadeCmd,
      readModel,
      toFormat() {
        return context.toFormat(this)
      },
    }
    context.registerActor(actor)
    return actor
  }
}
