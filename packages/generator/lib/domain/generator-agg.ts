import { createPluginHelperByAggCreator, createSingletonAgg } from 'vue-fn/domain-server'
import {
  AggCodeProvider,
  CodeFile,
  CommandCodeProvider,
  EventCodeProvider,
  FacadeCommandCodeProvider,
  GeneratorContext,
  InfoCodeProvider,
  Language,
  ReadModelCodeProvider,
} from './define'
import { DomainDesigner } from '@ddd-tool/domain-designer-core'
import { ref } from '@vue/reactivity'

let agg: ReturnType<typeof createAgg>

function createAgg(d: DomainDesigner) {
  return createSingletonAgg(() => {
    const designer = ref(d)
    const context = ref<GeneratorContext<any>>({} as GeneratorContext<any>)
    let InfoCodeProvider: InfoCodeProvider = () => []
    let commandCodeProvider: CommandCodeProvider = () => []
    let FacadeCommandCodeProvider: FacadeCommandCodeProvider = () => []
    let aggCodeProvider: AggCodeProvider = () => []
    let eventCodeProvider: EventCodeProvider = () => []
    let readModelCodeProvider: ReadModelCodeProvider = () => []
    let codeFileProvider: () => CodeFile[] = () => []
    return {
      states: {
        designer,
        context,
      },
      commands: {
        genCodeFiles(): CodeFile[] {
          return codeFileProvider()
        },
        clearCaches() {},
        setContext<LANG extends Language>(ctx: GeneratorContext<LANG>): void {
          context.value = ctx
        },
        setDomainDesigner(d: DomainDesigner): void {
          this.clearCaches()
          designer.value = d
        },
        _genInfoCode(...args: Parameters<InfoCodeProvider>): ReturnType<InfoCodeProvider> {
          return InfoCodeProvider(...args)
        },
        _setInfoCodeProvider(provider: InfoCodeProvider): void {
          InfoCodeProvider = provider
        },
        _genCommandCode(...args: Parameters<CommandCodeProvider>): ReturnType<CommandCodeProvider> {
          return commandCodeProvider(...args)
        },
        _setCommandCodeProvider(provider: CommandCodeProvider): void {
          commandCodeProvider = provider
        },
        _genFacadeCommandCode(...args: Parameters<FacadeCommandCodeProvider>): ReturnType<FacadeCommandCodeProvider> {
          return FacadeCommandCodeProvider(...args)
        },
        _setFacadeCommandCodeProvider(provider: FacadeCommandCodeProvider): void {
          FacadeCommandCodeProvider = provider
        },
        _genAggCode(...args: Parameters<AggCodeProvider>): ReturnType<AggCodeProvider> {
          return aggCodeProvider(...args)
        },
        _setAggCodeProvider(provider: AggCodeProvider): void {
          aggCodeProvider = provider
        },
        _genEventCode(...args: Parameters<EventCodeProvider>): ReturnType<EventCodeProvider> {
          return eventCodeProvider(...args)
        },
        _setEventCodeProvider(provider: EventCodeProvider): void {
          eventCodeProvider = provider
        },
        _genReadModelCode(...args: Parameters<ReadModelCodeProvider>): ReturnType<ReadModelCodeProvider> {
          return readModelCodeProvider(...args)
        },
        _setReadModelCodeProvider(provider: ReadModelCodeProvider): void {
          readModelCodeProvider = provider
        },
        _setCodeFileProvider(provider: typeof codeFileProvider): void {
          codeFileProvider = provider
        },
      },
    }
  })
}

export const GeneratorPliginHelper = createPluginHelperByAggCreator(createAgg)

export function useGeneratorAgg(designer?: DomainDesigner) {
  if (!agg) {
    if (!designer) {
      throw new Error('designer is required')
    }
    agg = createAgg(designer)
    GeneratorPliginHelper.registerAgg(agg)
  }
  return agg.api
}
