import type {
  DomainDesignNote,
  DomainDesigner,
  DomainDesignInfo,
  DomainDesignInfoType,
  DomainDesignCommand,
  DomainDesignSystem,
  DomainDesignFacadeCommand,
  DomainDesignAgg,
  DomainDesignEvent,
  DomainDesignService,
  DomainDesignActor,
  DomainDesignPolicy,
  DomainDesignReadModel,
} from '@ddd-tool/domain-designer-core'
import { EMPTY_STORY } from './types'
import type { LinkType } from '@ddd-tool/domain-designer-core/common'

export type FilterMode =
  | { mode: 'story'; currentStory: string }
  | { mode: 'workflows'; customWorkflowNames: string[] }

export function* nomnomlCodeGenerator(params: {
  design: DomainDesigner
  filter: FilterMode
  linkReadModel: boolean
  linkSystem: boolean
}) {
  const design = params.design
  const displayReadModel = params.linkReadModel
  const displaySystem = params.linkSystem
  const context = (() => {
    if (params.filter.mode === 'story') {
      return filterContextByStory({
        design,
        currentStory: params.filter.currentStory,
        displayReadModel,
        displaySystem,
      })
    } else if (params.filter.mode === 'workflows') {
      return filterContextByWorkflows({
        design,
        workflowNames: params.filter.customWorkflowNames,
        displayReadModel,
        displaySystem,
      })
    } else {
      isNever(params.filter)
      throw new Error('filter mode error')
    }
  })()
  for (const agg of context.aggs) {
    yield `[<aggregation id=${agg._attributes.__id}> ${agg._attributes.name}: Aggregation ${infosToCode(
      agg._attributes.infos,
    )} ${noteToCode(agg._attributes.note)}]`
  }
  for (const command of context.commands) {
    yield `[<command id=${command._attributes.__id}> ${command._attributes.name}: Command ${infosToCode(
      command._attributes.infos,
    )} ${noteToCode(command._attributes.note)}]`
  }
  for (const facadeCommand of context.facadeCommands) {
    yield `[<facadeCommand id=${facadeCommand._attributes.__id}> ${
      facadeCommand._attributes.name
    }: FacadeCommand ${infosToCode(facadeCommand._attributes.infos)} ${noteToCode(facadeCommand._attributes.note)}]`
  }
  for (const event of context.events) {
    yield `[<event id=${event._attributes.__id}> ${event._attributes.name}: Event ${infosToCode(
      event._attributes.infos,
    )} ${noteToCode(event._attributes.note)}]`
  }
  for (const service of context.services) {
    yield `[<service id=${service._attributes.__id}> ${service._attributes.name}: Service ${noteToCode(
      service._attributes.note,
    )}]`
  }
  for (const actor of context.actors) {
    yield `[<actor id=${actor._attributes.__id}> ${actor._attributes.name}: Actor ${noteToCode(
      actor._attributes.note,
    )}]`
  }
  for (const policy of context.policies) {
    yield `[<policy id=${policy._attributes.__id}> ${policy._attributes.name}: Policy ${noteToCode(
      policy._attributes.note,
    )}]`
  }
  for (const readModel of context.readModels) {
    yield `[<readModel id=${readModel._attributes.__id}> ${readModel._attributes.name}: ReadModel ${infosToCode(
      readModel._attributes.infos,
    )} ${noteToCode(readModel._attributes.note)}]`
  }
  for (const system of context.systems) {
    yield `[<system id=${system._attributes.__id}> ${system._attributes.name}: System ${noteToCode(
      system._attributes.note,
    )}]`
  }
  for (const i in context.links) {
    const linkType = context.links[i]
    const [_rule1, from, _rule2, to] = i.split(',')
    if (!params.linkReadModel && (_rule1 === 'ReadModel' || _rule2 === 'ReadModel')) {
      continue
    }
    if (!params.linkSystem && (_rule1 === 'System' || _rule2 === 'System')) {
      continue
    }
    if (linkType === 'Association') {
      yield `[${from}] -> [${to}]`
    } else if (linkType === 'Aggregation') {
      yield `[${from}] o- [${to}]`
    } else if (linkType === 'Dependency') {
      yield `[${to}] <-- [${from}]`
    }
  }
}

export function filterContextByStory(params: {
  design: DomainDesigner
  currentStory: string
  displayReadModel: boolean
  displaySystem: boolean
}) {
  const originalContext = params.design._getContext()
  const getIdMap = originalContext.getIdMap

  let commands = originalContext.getCommands()
  let facadeCommands = originalContext.getFacadeCommands()
  let aggs = originalContext.getAggs()
  let events = originalContext.getEvents()
  let services = originalContext.getServices()
  let actors = originalContext.getActors()
  let policies = originalContext.getPolicies()
  let readModels = originalContext.getReadModels()
  let systems = originalContext.getSystems()
  let links = originalContext.getLinks()

  if (isEmptyStory(params.currentStory)) {
    return {
      aggs,
      commands,
      facadeCommands,
      events,
      services,
      actors,
      policies,
      readModels,
      systems,
      links,
      getIdMap,
    }
  }

  const workflows: string[] = []
  for (const workflowName of originalContext?.getUserStories()?.[params.currentStory]!) {
    for (const id of originalContext?.getWorkflows()?.[workflowName]!) {
      workflows.push(id)
    }
  }

  commands = commands.filter((i) => workflows.includes(i._attributes.__id))
  facadeCommands = facadeCommands.filter((i) => workflows.includes(i._attributes.__id))
  aggs = aggs.filter((i) => workflows.includes(i._attributes.__id))
  events = events.filter((i) => workflows.includes(i._attributes.__id))
  services = services.filter((i) => workflows.includes(i._attributes.__id))
  actors = actors.filter((i) => workflows.includes(i._attributes.__id))
  policies = policies.filter((i) => workflows.includes(i._attributes.__id))
  readModels = readModels.filter((i) => workflows.includes(i._attributes.__id))
  systems = systems.filter((i) => workflows.includes(i._attributes.__id))

  links = {}
  const originalContextLinks = originalContext.getLinks()
  for (const k of Object.keys(originalContextLinks)) {
    const [_srcRule, srcId, _targetRule, targetId] = k.split(',')
    if (!srcId || !targetId) {
      throw new Error(`invalid link: ${k}`)
    }
    if (workflows.includes(srcId) && workflows.includes(targetId)) {
      links[k] = originalContextLinks[k]!
    }
  }

  return {
    aggs,
    commands,
    facadeCommands,
    events,
    services,
    actors,
    policies,
    readModels,
    systems,
    links,
    getIdMap,
  }
}

export function filterContextByWorkflows(params: {
  design: DomainDesigner
  workflowNames: string[]
  displayReadModel: boolean
  displaySystem: boolean
}) {
  const originalContext = params.design._getContext()
  const getIdMap = originalContext.getIdMap

  let commands: DomainDesignCommand<any>[] = []
  let facadeCommands: DomainDesignFacadeCommand<any>[] = []
  let aggs: DomainDesignAgg<any>[] = []
  let events: DomainDesignEvent<any>[] = []
  let services: DomainDesignService[] = []
  let actors: DomainDesignActor[] = []
  let policies: DomainDesignPolicy[] = []
  let readModels: DomainDesignReadModel<any>[] = []
  let systems: DomainDesignSystem[] = []
  let links: Record<string, LinkType> = {}

  if (params.workflowNames.length === 0) {
    return {
      aggs,
      commands,
      facadeCommands,
      events,
      services,
      actors,
      policies,
      readModels,
      systems,
      links,
      getIdMap,
    }
  }

  const workflows: string[] = []
  for (const workflowName of params.workflowNames) {
    for (const id of originalContext?.getWorkflows()?.[workflowName]!) {
      workflows.push(id)
    }
  }

  commands = originalContext.getCommands().filter((i) => workflows.includes(i._attributes.__id))
  facadeCommands = originalContext
    .getFacadeCommands()
    .filter((i) => workflows.includes(i._attributes.__id))
  aggs = originalContext.getAggs().filter((i) => workflows.includes(i._attributes.__id))
  events = originalContext.getEvents().filter((i) => workflows.includes(i._attributes.__id))
  services = originalContext.getServices().filter((i) => workflows.includes(i._attributes.__id))
  actors = originalContext.getActors().filter((i) => workflows.includes(i._attributes.__id))
  policies = originalContext.getPolicies().filter((i) => workflows.includes(i._attributes.__id))
  readModels = originalContext.getReadModels().filter((i) => workflows.includes(i._attributes.__id))
  systems = originalContext.getSystems().filter((i) => workflows.includes(i._attributes.__id))

  const originalContextLinks = originalContext.getLinks()
  for (const k of Object.keys(originalContextLinks)) {
    const [_srcRule, srcId, _targetRule, targetId] = k.split(',')
    if (!srcId || !targetId) {
      throw new Error(`invalid link: ${k}`)
    }
    if (workflows.includes(srcId) && workflows.includes(targetId)) {
      links[k] = originalContextLinks[k]!
    }
  }

  return {
    aggs,
    commands,
    facadeCommands,
    events,
    services,
    actors,
    policies,
    readModels,
    systems,
    links,
    getIdMap,
  }
}

function isEmptyStory(story: string): boolean {
  return story === EMPTY_STORY
}

function infosToCode<T extends Record<string, DomainDesignInfo<DomainDesignInfoType, string>>>(
  infos: T,
): string {
  if (!infos) {
    return ''
  }
  function getFlag(note: any): string {
    if (note) {
      return '*'
    }
    return '-'
  }
  const code = ['']
  for (const i of Object.keys(infos)) {
    const info = infos[i]!
    const type = info._attributes.type
    const flag = getFlag(info._attributes.note)
    if (type === 'Document') {
      code.push(`|${flag} ${info._attributes.name}: Document`)
    } else if (type === 'Function') {
      code.push(`|${flag} ${info._attributes.name}: Function`)
    } else if (type === 'Id') {
      code.push(`|${flag} ${info._attributes.name}: Id`)
    } else if (type === 'ValueObject') {
      code.push(`|${flag} ${info._attributes.name}: Value`)
    } else if (type === 'Version') {
      code.push(`|${flag} ${info._attributes.name}: Version`)
    } else {
      isNever(type)
    }
  }
  return code.join('\n')
}

function noteToCode(note?: DomainDesignNote): string {
  if (!note) {
    return ''
  }
  const templates = note._attributes.template
  const values = note._attributes.inject
  const code = templates.reduce((result, str, i) => {
    const value = values[i] ? values[i].toFormat() : ''
    return result + str + value
  }, '')
  return '|' + code
}
