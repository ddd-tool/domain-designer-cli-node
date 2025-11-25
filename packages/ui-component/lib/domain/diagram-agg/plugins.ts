import { watch } from 'vue'
import { DiagramPluginHelper } from '.'
import { defaultRenderConfig, type RenderConfig } from './define'

export const DIAGRAM_STORAGE_PLUGIN = DiagramPluginHelper.createSetupPlugin({
  mount({ api }) {
    console.debug('加载diagram存储插件')
    const defRenderConfig = defaultRenderConfig()
    const RENDER_CONFIG_KEY = 'diagram-render-config'
    const existRenderConfig = localStorage.getItem(RENDER_CONFIG_KEY)
    if (existRenderConfig) {
      const { ranker, padding, fontSize, edges, bendSize } = JSON.parse(existRenderConfig) as RenderConfig
      api.commands.setRenderBendSize(bendSize || defRenderConfig.bendSize)
      api.commands.setRenderEdgesType(edges || defRenderConfig.edges)
      api.commands.setRenderFontSize(fontSize || defRenderConfig.fontSize)
      api.commands.setRenderPadding(padding || defRenderConfig.padding)
      api.commands.setRenderRanker(ranker || defRenderConfig.ranker)
    }
    watch(api.states.renderConfig, () => {
      localStorage.setItem(RENDER_CONFIG_KEY, JSON.stringify(api.states.renderConfig))
    })

    const DESIGN_KEY = 'diagram-current-design'
    const existDesignKey = localStorage.getItem(DESIGN_KEY)
    if (existDesignKey && api.states.designRecords.value[existDesignKey]) {
      api.commands.switchDesign(existDesignKey)
    }
    watch(api.states.currentDesignKey, (value) => {
      if (value) {
        localStorage.setItem(DESIGN_KEY, value)
      }
    })
  },
})
