import type {
  DomainDesignAgg,
  DomainDesignNote,
  DomainDesigner,
  DomainDesignInfo,
  DomainDesignInfoType,
} from '@ddd-tool/domain-designer-core'
import { EMPTY_STORY } from './define'

export function* nomnomlCodeGenerator<T extends DomainDesigner>(params: {
  design: T
  currentStory: string
  linkReadModel: boolean
  linkSystem: boolean
}) {
  const design = params.design
  const currentStory = params.currentStory
  const displayReadModel = params.linkReadModel
  const displaySystem = params.linkSystem
  const context = filterContext({
    design,
    currentStory,
    displayReadModel,
    displaySystem,
  })
  for (const i in context.aggs) {
    const agg: DomainDesignAgg<any> = context.aggs[i]
    yield `[<aggregation id=${agg._attributes.__id}> ${agg._attributes.name}: Aggregation ${infosToCode(
      agg._attributes.infos
    )} ${noteToCode(agg._attributes.note)}]`
  }
  for (const i in context.commands) {
    const command = context.commands[i]
    yield `[<command id=${command._attributes.__id}> ${command._attributes.name}: Command ${infosToCode(
      command._attributes.infos
    )} ${noteToCode(command._attributes.note)}]`
  }
  for (const i in context.facadeCommands) {
    const facadeCommand = context.facadeCommands[i]
    yield `[<facadeCommand id=${facadeCommand._attributes.__id}> ${
      facadeCommand._attributes.name
    }: FacadeCommand ${infosToCode(facadeCommand._attributes.infos)} ${noteToCode(facadeCommand._attributes.note)}]`
  }
  for (const i in context.events) {
    const event = context.events[i]
    yield `[<event id=${event._attributes.__id}> ${event._attributes.name}: Event ${infosToCode(
      event._attributes.infos
    )} ${noteToCode(event._attributes.note)}]`
  }
  for (const i in context.services) {
    const service = context.services[i]
    yield `[<service id=${service._attributes.__id}> ${service._attributes.name}: Service ${noteToCode(
      service._attributes.note
    )}]`
  }
  for (const i in context.actors) {
    const actor = context.actors[i]
    yield `[<actor id=${actor._attributes.__id}> ${actor._attributes.name}: Actor ${noteToCode(
      actor._attributes.note
    )}]`
  }
  for (const i in context.policies) {
    const policy = context.policies[i]
    yield `[<policy id=${policy._attributes.__id}> ${policy._attributes.name}: Policy ${noteToCode(
      policy._attributes.note
    )}]`
  }
  for (const i in context.readModels) {
    const readModel = context.readModels[i]
    yield `[<readModel id=${readModel._attributes.__id}> ${readModel._attributes.name}: ReadModel ${infosToCode(
      readModel._attributes.infos
    )} ${noteToCode(readModel._attributes.note)}]`
  }
  for (const i in context.systems) {
    const system = context.systems[i]
    yield `[<system id=${system._attributes.__id}> ${system._attributes.name}: System ${noteToCode(
      system._attributes.note
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

export function filterContext(params: {
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

  originalContext.getUserStories

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
  for (const workflowName of originalContext.getUserStories()[params.currentStory]) {
    for (const id of originalContext.getWorkflows()[workflowName]) {
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
    if (workflows.includes(srcId) && workflows.includes(targetId)) {
      links[k] = originalContextLinks[k]
    }
  }

  // TODO: filter by story
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

function infosToCode<T extends Record<string, DomainDesignInfo<DomainDesignInfoType, string>>>(infos: T): string {
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
  for (const i in infos) {
    const info = infos[i]
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
