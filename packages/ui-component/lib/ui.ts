import {
  isDomainDesignInfo,
  type DomainDesignNote,
  type DomainDesignInfo,
  type DomainDesignInfoType,
} from '@ddd-tool/domain-designer-core'
import { useI18nAgg } from './domain/i18n-agg'
import { isNodeLike } from './domain/common'

export type NodeDetail = {
  rule: string
  name: string
  type: string
  relatedTypes?: string
  note?: string
}

const t = useI18nAgg().commands.$t

export function parseNode(node?: object): NodeDetail {
  if (!node || typeof node !== 'object') {
    return {
      rule: 'Unknown',
      name: 'Unknown',
      type: 'Unknown',
      relatedTypes: undefined,
      note: undefined,
    }
  }

  let detail: NodeDetail = {
    rule: '',
    name: '',
    type: '',
    relatedTypes: undefined,
    note: undefined,
  }
  if (isDomainDesignInfo(node)) {
    detail = parseInfo(node, detail)
  }
  detail = parseOthers(node, detail)
  return detail
}

function parseOthers(node: object, detail: NodeDetail): NodeDetail {
  if (detail.rule) {
    return detail
  }
  if (isNodeLike(node)) {
    detail.rule = node._attributes.rule
    detail.name = node._attributes.name
    detail.relatedTypes = undefined
    detail.note = noteToCode(node._attributes.note)
  }
  return detail
}

function parseInfo(
  info: DomainDesignInfo<DomainDesignInfoType, string>,
  detail: NodeDetail,
): NodeDetail {
  const type = info._attributes.type
  let typeStr = ''
  let subtype: string[] = []
  if (type === 'Document') {
    typeStr = t('constant.type.document').value
  } else if (type === 'Function') {
    typeStr = t('constant.type.function').value
    subtype = (
      info as DomainDesignInfo<'Function', string>
    )._attributes.subtype.map((i) => i._attributes.name)
  } else if (type === 'Id') {
    typeStr = t('constant.type.id').value
  } else if (type === 'ValueObject') {
    typeStr = t('constant.type.valueObject').value
  } else if (type === 'Version') {
    typeStr = t('constant.type.version').value
  } else {
    isNever(type)
  }
  if (subtype.length === 0) {
    subtype = [`<${t('constant.empty').value}>`]
  }
  detail.rule = 'Info'
  detail.name = info._attributes.name
  detail.type = typeStr
  detail.relatedTypes = subtype.join(', ')
  detail.note = noteToCode(info._attributes.note)
  return detail
}

function noteToCode(note?: DomainDesignNote): string | undefined {
  if (!note) {
    return undefined
  }
  const templates = note._attributes.template
  const values = note._attributes.inject
  return templates.reduce((result, str, i) => {
    const value = values[i] ? values[i].toFormat() : ''
    return result + str + value
  }, '')
}
