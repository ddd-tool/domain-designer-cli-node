import { nanoid } from 'nanoid'
import {
  NonEmptyArray,
  DomainDesignAgg,
  DomainDesignAggProvider,
  DomainDesignCommand,
  DomainDesignCommandProvider,
  DomainDesignNoteProvider,
  DomainDesignEvent,
  DomainDesignEventProvider,
  DomainDesignFacadeCommand,
  DomainDesignFacadeCommandProvider,
  DomainDesignInfoProvider,
  DomainDesignActor,
  DomainDesignActorProvider,
  DomainDesignPolicy,
  DomainDesignPolicyProvider,
  DomainDesignService,
  DomainDesignServiceProvider,
  DomainDesignSystem,
  DomainDesignSystemProvider,
  DomainDesignReadModel,
  DomainDesignReadModelProvider,
  CustomInfoArrayToInfoObject,
  DomainDesignInfo,
  DomainDesignInfoType,
  CustomInfo,
  DomainDesignOptions,
  DomainObjectSet,
  DomainDesignObject,
} from './define'

export type LinkType = 'Association' | 'Dependency' | 'Aggregation' | 'Composition'
type Rule =
  | 'Info'
  | 'Actor'
  | 'Command'
  | 'FacadeCommand'
  | 'Agg'
  | 'Event'
  | 'Policy'
  | 'Service'
  | 'System'
  | 'ReadModel'

export function genId(): string {
  const id = nanoid()
  if (id === undefined) {
    throw new Error('id is undefined')
  }
  return id
}

type ContextInitializer = () => {
  id: string
  options: DomainDesignOptions
  createNote: DomainDesignNoteProvider
  createInfo: DomainDesignInfoProvider
  createActor: DomainDesignActorProvider
  createCommand: DomainDesignCommandProvider
  createFacadeCommand: DomainDesignFacadeCommandProvider
  createAgg: DomainDesignAggProvider
  createEvent: DomainDesignEventProvider
  createPolicy: DomainDesignPolicyProvider
  createService: DomainDesignServiceProvider
  createSystem: DomainDesignSystemProvider
  createReadModel: DomainDesignReadModelProvider
}

export function defaultOptions(): Required<DomainDesignOptions> {
  return {
    moduleName: '',
    ignoreValueObjects: [
      'time',
      'id',
      'pid',
      'name',
      'state',
      'status',
      'version',
      'code',
      'message',
      'type',
      'result',
      'data',
      'payload',
      'meta',
      'context',
      'sorting',
    ],
    __toFormatType: 'BngleBrackets',
  }
}

export type DomainDesignInternalContext = ReturnType<typeof createInternalContext>
const _internalContextMap: Record<string, DomainDesignInternalContext> = {}

function createInternalContext(initFn: ContextInitializer) {
  const initResult = initFn()
  if (!initResult.options) {
    initResult.options = defaultOptions()
  } else {
    initResult.options = Object.assign(defaultOptions(), initResult.options)
  }
  const info = initResult.createInfo()

  //NOTE: links的键为"srcRule,srcId,destRule,destId"
  const links: Record<string, LinkType> = {}
  const idMap: Record<string, DomainDesignObject> = {}
  const associationMap: Record<string, DomainObjectSet<DomainDesignObject>> = {}
  const commands: DomainDesignCommand<any>[] = []
  const facadeCommands: DomainDesignFacadeCommand<any>[] = []
  const actors: DomainDesignActor[] = []
  const events: DomainDesignEvent<any>[] = []
  const policies: DomainDesignPolicy[] = []
  const services: DomainDesignService[] = []
  const systems: DomainDesignSystem[] = []
  const aggs: DomainDesignAgg<any>[] = []
  const readModels: DomainDesignReadModel<any>[] = []

  const workflows: Record<string, Array<string>> = {}
  const userStories: Record<string, Array<string>> = {}
  let currentWorkflowName: string | undefined = undefined
  return {
    startWorkflow(name: string): string {
      if (workflows[name] !== undefined) {
        throw new Error(`flow ${name} already exists`)
      }
      workflows[name] = []
      currentWorkflowName = name
      return name
    },
    defineUserStory(name: string, workflowNames: NonEmptyArray<string>): void {
      if (userStories[name] !== undefined) {
        throw new Error(`userStory ${name} already exists`)
      }
      userStories[name] = workflowNames
    },
    linkTo(srcRule: Rule, srcId: string, targetRule: Rule, targetId: string, linkType: LinkType = 'Association') {
      if (currentWorkflowName && workflows[currentWorkflowName]) {
        if (
          workflows[currentWorkflowName].length === 0 ||
          workflows[currentWorkflowName][workflows[currentWorkflowName].length - 1] !== srcId
        ) {
          workflows[currentWorkflowName].push(srcId)
        }
        workflows[currentWorkflowName].push(targetId)
      }
      links[`${srcRule},${srcId},${targetRule},${targetId}`] = linkType
      if (associationMap[srcId] === undefined) {
        associationMap[srcId] = new DomainObjectSet()
      }
      associationMap[srcId].add(idMap[targetId])
      if (associationMap[targetId] === undefined) {
        associationMap[targetId] = new DomainObjectSet()
      }
      associationMap[targetId].add(idMap[srcId])
    },
    getDesignerId() {
      return initResult.id
    },
    getDesignerOptions() {
      return initResult.options as Required<DomainDesignOptions>
    },
    getWorkflows() {
      return workflows
    },
    getUserStories() {
      return userStories
    },
    getLinks() {
      return links
    },
    getIdMap() {
      return idMap
    },
    getAssociationMap() {
      return associationMap
    },
    getCommands() {
      return commands
    },
    getFacadeCommands() {
      return facadeCommands
    },
    getActors() {
      return actors
    },
    getEvents() {
      return events
    },
    getPolicies() {
      return policies
    },
    getServices() {
      return services
    },
    getSystems() {
      return systems
    },
    getAggs() {
      return aggs
    },
    getReadModels() {
      return readModels
    },
    registerInfo(info: DomainDesignInfo<any, any>) {
      idMap[info._attributes.__id] = info
    },
    registerCommand(command: DomainDesignCommand<any>) {
      idMap[command._attributes.__id] = command
      commands.push(command)
    },
    registerFacadeCommand(command: DomainDesignFacadeCommand<any>) {
      idMap[command._attributes.__id] = command
      facadeCommands.push(command)
    },
    registerActor(actor: DomainDesignActor) {
      idMap[actor._attributes.__id] = actor
      actors.push(actor)
    },
    registerEvent(event: DomainDesignEvent<any>) {
      idMap[event._attributes.__id] = event
      events.push(event)
    },
    registerPolicy(policy: DomainDesignPolicy) {
      idMap[policy._attributes.__id] = policy
      policies.push(policy)
    },
    registerService(service: DomainDesignService) {
      idMap[service._attributes.__id] = service
      services.push(service)
    },
    registerSystem(system: DomainDesignSystem) {
      idMap[system._attributes.__id] = system
      systems.push(system)
    },
    registerAgg(agg: DomainDesignAgg<any>) {
      idMap[agg._attributes.__id] = agg
      aggs.push(agg)
    },
    registerReadModel(readModel: DomainDesignReadModel<any>) {
      idMap[readModel._attributes.__id] = readModel
      readModels.push(readModel)
    },
    customInfoArrToInfoObj<G_NAME extends string, ARR extends NonEmptyArray<CustomInfo<G_NAME>>>(
      arr: ARR
    ): CustomInfoArrayToInfoObject<ARR> {
      type T = Record<string, DomainDesignInfo<DomainDesignInfoType, G_NAME>>
      return arr.reduce((map, v) => {
        if (typeof v === 'string') {
          ;(map as T)[v] = info.valueObj(v)
        } else if (v instanceof Array) {
          const [name, note] = v
          ;(map as T)[name] = info.valueObj(name, note)
        } else {
          ;(map as T)[v._attributes.name] = v
        }
        return map
      }, {} as CustomInfoArrayToInfoObject<ARR>)
    },
    customInfoArrToInfoArr<G_NAME extends string, ARR extends NonEmptyArray<CustomInfo<G_NAME>>>(
      arr: ARR
    ): DomainDesignInfo<DomainDesignInfoType, string>[] {
      return arr.reduce((arr, v) => {
        if (typeof v === 'string') {
          arr.push(info.valueObj(v))
        } else if (v instanceof Array) {
          const [name, note] = v
          arr.push(info.valueObj(name, note))
        } else {
          arr.push(v)
        }
        return arr
      }, [] as DomainDesignInfo<DomainDesignInfoType, string>[])
    },
    toFormat<OBJ extends { _attributes: { __id: string; name: string } }>(obj: OBJ): string {
      if (initResult.options?.__toFormatType === 'BngleBrackets') {
        return `<${obj._attributes.name}>`
      } else if (initResult.options?.__toFormatType === 'JSON') {
        return JSON.stringify(obj)
      } else if (initResult.options?.__toFormatType === 'JSONPretty') {
        return JSON.stringify(obj, null, 2)
      } else if (initResult.options?.__toFormatType === undefined) {
        return obj.toString()
      } else {
        isNever(initResult.options?.__toFormatType)
      }
      return obj.toString()
    },
    createNote: initResult.createNote,
    info,
    createPersion: initResult.createActor,
    createCommand: initResult.createCommand,
    createFacadeCommand: initResult.createFacadeCommand,
    createAgg: initResult.createAgg,
    createEvent: initResult.createEvent,
    createPolicy: initResult.createPolicy,
    createService: initResult.createService,
    createSystem: initResult.createSystem,
    createReadModel: initResult.createReadModel,
  }
}

export function useInternalContext(designId: string, initFn?: ContextInitializer): DomainDesignInternalContext {
  if (_internalContextMap[designId]) {
    return _internalContextMap[designId]
  }
  if (!_internalContextMap[designId] && initFn) {
    _internalContextMap[designId] = createInternalContext(initFn)
    return _internalContextMap[designId]
  }
  throw new Error('initFn is required')
}
