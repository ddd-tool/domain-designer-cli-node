import {
  type DomainDesignNote,
  type DomainDesignInfo,
  type DomainDesignObject,
  type DomainDesignInfoType,
  DomainDesignRule,
} from '@ddd-tool/domain-designer-core'

export const Rules = Object.freeze([
  DomainDesignRule.Command,
  DomainDesignRule.FacadeCommand,
  DomainDesignRule.Event,
  DomainDesignRule.Agg,
  DomainDesignRule.ReadModel,
] as const)
type Rules = (typeof Rules)[number]
export type ClassNodeLike = {
  _attributes: {
    __id: string
    rule: Rules
  }
  inner: Record<string, DomainDesignInfo<DomainDesignInfoType, string>>
}
export function isClassNodeLike(node: any): node is ClassNodeLike {
  return (
    node?.inner &&
    typeof node.inner === 'object' &&
    node._attributes &&
    Rules.includes(node._attributes.rule)
  )
}
export interface NodeLike extends DomainDesignObject {
  readonly _attributes: {
    __id: string
    rule: Rules
    name: string
    note?: DomainDesignNote
  }
  inner?: Record<string, any>
}
export function isNodeLike(node: any): node is NodeLike {
  return (
    node?._attributes &&
    typeof node._attributes.__id === 'string' &&
    typeof node._attributes.rule === 'string'
  )
}
