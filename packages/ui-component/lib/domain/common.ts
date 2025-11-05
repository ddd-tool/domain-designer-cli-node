import type {
  DomainDesignNote,
  DomainDesignInfo,
  DomainDesignObject,
  DomainDesignInfoType,
} from '@ddd-tool/domain-designer-core'

export const RULES = Object.freeze(['Command', 'FacadeCommand', 'Event', 'Agg', 'ReadModel'] as const)
export type ClassNodeLike = {
  _attributes: {
    __id: string
    rule: (typeof RULES)[number]
  }
  inner: Record<string, DomainDesignInfo<DomainDesignInfoType, string>>
}
export function isClassNodeLike(node: any): node is ClassNodeLike {
  return typeof node.inner === 'object' && node._attributes && RULES.includes(node._attributes.rule)
}
export interface NodeLike extends DomainDesignObject {
  readonly _attributes: {
    __id: string
    rule: (typeof RULES)[number]
    name: string
    note?: DomainDesignNote
  }
  inner?: Record<string, any>
}
export function isNodeLike(node: any): node is NodeLike {
  return node._attributes && typeof node._attributes.__id === 'string' && typeof node._attributes.rule === 'string'
}
