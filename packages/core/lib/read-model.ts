import { genId, useInternalContext } from './common'
import {
  CustomInfo,
  CustomInfoArrayToInfoObject,
  DomainDesignNote,
  DomainDesignReadModel,
  DomainDesignReadModelProvider,
  NonEmptyArray,
  NonEmptyInitFunc,
} from './define'

export function createReadModelProvider(designId: string): DomainDesignReadModelProvider {
  const RULE = 'ReadModel'
  return <G_NAME extends string, ARR extends NonEmptyArray<CustomInfo<G_NAME>>>(
    name: string,
    infosInitializer: ARR | NonEmptyInitFunc<() => ARR>,
    note?: string | DomainDesignNote
  ) => {
    const context = useInternalContext(designId)
    const __id = genId()
    const infos = context.customInfoArrToInfoObj(
      infosInitializer instanceof Function ? infosInitializer() : infosInitializer
    )
    const readModel: DomainDesignReadModel<CustomInfoArrayToInfoObject<ARR>> = {
      _attributes: {
        __id,
        rule: RULE,
        name,
        infos,
        note: context.createNote(note as any),
      },
      inner: infos,
      toFormat() {
        return context.toFormat(this)
      },
    }
    context.registerReadModel(readModel)
    return readModel
  }
}
