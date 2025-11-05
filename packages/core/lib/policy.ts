import { genId, useInternalContext } from './common'
import {
  CustomInfoArrayToInfoObject,
  DomainDesignCommand,
  DomainDesignFacadeCommand,
  DomainDesignInfo,
  DomainDesignInfoType,
  DomainDesignNote,
  DomainDesignPolicy,
  DomainDesignPolicyProvider,
  DomainDesignService,
  NonEmptyArray,
} from './define'

export function createPolicyProvider(designId: string): DomainDesignPolicyProvider {
  const RULE = 'Policy'
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

    function service(param: DomainDesignService): DomainDesignService
    function service(name: string, note?: string | DomainDesignNote): DomainDesignService
    function service(param1: DomainDesignService | string, note?: string | DomainDesignNote): DomainDesignService {
      if (typeof param1 === 'object') {
        context.linkTo(RULE, __id, param1._attributes.rule, param1._attributes.__id)
        return param1
      }
      const s = context.createService(param1, note)
      context.linkTo(RULE, __id, s._attributes.rule, s._attributes.__id)
      return s
    }
    const policy: DomainDesignPolicy = {
      _attributes: {
        __id,
        rule: RULE,
        name,
        note: context.createNote(note as any),
      },
      command,
      facadeCmd,
      service,
      toFormat() {
        return context.toFormat(this)
      },
    }
    context.registerPolicy(policy)
    return policy
  }
}
