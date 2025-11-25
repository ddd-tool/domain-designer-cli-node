<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Dock from 'primevue/dock'
import Drawer from 'primevue/drawer'
import Popover from 'primevue/popover'
import RadioButton from 'primevue/radiobutton'
import SelectButton from 'primevue/selectbutton'
import Slider from 'primevue/slider'
import ToggleSwitch from 'primevue/toggleswitch'
import { useDiagramAgg } from '#lib/domain/diagram-agg'
import { useI18nAgg } from '#lib/domain/i18n-agg'
import { type DomainDesigner } from '@ddd-tool/domain-designer-core'
import { bindRef } from 'vue-fn/domain'
import { VALID_EDGE_TYPES, VALID_RANKERS } from '#lib/domain/diagram-agg/define'

type NonEmptyObject<T extends object> = keyof T extends never ? never : T
interface Props {
  designs: NonEmptyObject<Record<string, DomainDesigner>>
}

const props = defineProps<Props>()
const diagramAgg = useDiagramAgg(props.designs)
const i18nAgg = useI18nAgg()
const t = i18nAgg.commands.$t

// ======================== Settings ========================
const linkReadModel = bindRef(diagramAgg.states.linkReadModel, (v) => {
  diagramAgg.commands.setDisplayReadModel(v)
})
const linkSystem = bindRef(diagramAgg.states.linkSystem, (v) => {
  diagramAgg.commands.setDisplaySystem(v)
})
const language = bindRef(i18nAgg.states.currentLanguage, (v) => {
  i18nAgg.commands.setLanguage(v)
})
const languageOptions = reactive([
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
])
const renderRanker = bindRef(
  () => diagramAgg.states.renderConfig.ranker,
  (v) => {
    diagramAgg.commands.setRenderRanker(v)
  }
)
const renderRankerOptions = reactive([
  {
    label: VALID_RANKERS.NetworkSimplex,
    value: VALID_RANKERS.NetworkSimplex,
    note: t('menu.settings.render.ranker.NetworkSimplex.note'),
  },
  {
    label: VALID_RANKERS.TightTree,
    value: VALID_RANKERS.TightTree,
    note: t('menu.settings.render.ranker.TightTree.note'),
  },
  {
    label: VALID_RANKERS.LongestPath,
    value: VALID_RANKERS.LongestPath,
    note: t('menu.settings.render.ranker.LongestPath.note'),
  },
])

const renderPadding = bindRef(
  () => diagramAgg.states.renderConfig.padding,
  (v) => {
    diagramAgg.commands.setRenderPadding(v)
  }
)
const renderFontSize = bindRef(
  () => diagramAgg.states.renderConfig.fontSize,
  (v) => {
    diagramAgg.commands.setRenderFontSize(v)
  }
)
const renderEdgesType = bindRef(
  () => diagramAgg.states.renderConfig.edges,
  (v) => {
    diagramAgg.commands.setRenderEdgesType(v)
  }
)
const renderEdgesTypeOptions = reactive([
  {
    label: t('menu.settings.render.edgesType.hard'),
    value: VALID_EDGE_TYPES.Hard,
  },
  {
    label: t('menu.settings.render.edgesType.rounded'),
    value: VALID_EDGE_TYPES.Rounded,
  },
])

const renderBendSize = bindRef(
  () => diagramAgg.states.renderConfig.bendSize,
  (v) => {
    diagramAgg.commands.setRenderBendSize(v)
  }
)
const currentDesignKey = bindRef(diagramAgg.states.currentDesignKey, (v) => {
  handleNoFocus()
  diagramAgg.commands.switchDesign(v!)
})
function handleNoFocus() {
  diagramAgg.commands.focusFlow(undefined, undefined)
}
const designKeyOptions = computed(() => {
  const result: { label: string; value: string }[] = []
  for (const key of diagramAgg.states.designKeys.value) {
    result.push({ label: key, value: key })
  }
  return result
})

// =========================== Help ===========================
const helpPopoverRef = ref()
const toggle = (event: Event) => {
  helpPopoverRef.value.toggle(event)
}

// ======================== Dock ===========================
const drawerVisible = ref(false)
const drawerType = ref<'Settings' | 'DataSource' | undefined>(undefined)

const dockItems = reactive([
  {
    label: '数据源',
    icon: 'pi pi-database',
    command() {
      drawerType.value = 'DataSource'
      drawerVisible.value = true
    },
  },
  {
    label: t('menu.settings'),
    icon: 'pi pi-cog',
    command() {
      drawerType.value = 'Settings'
      drawerVisible.value = true
    },
  },
  {
    label: t('menu.exportSvg'),
    icon: 'pi pi-file-export',
    severity: 'success',
    command() {
      diagramAgg.commands.downloadSvg()
    },
  },
  {
    label: t('menu.help'),
    icon: 'pi pi-question-circle',
    severity: 'help',
    command(e: any) {
      toggle(e)
    },
  },
])
</script>

<template>
  <Drawer
    v-model:visible="drawerVisible"
    v-if="drawerType === 'DataSource'"
    position="right"
    header="数据源"
    class="toolbar-drawer"
  >
    <div class="datasource">
      <div v-for="(item, index) in designKeyOptions" :key="index" class="datasource-item">
        <RadioButton v-model="currentDesignKey" :input-id="item.value" :value="item.value"></RadioButton>
        <label :for="item.value"> {{ item.label }} </label>
      </div>
    </div>
  </Drawer>
  <Drawer
    v-model:visible="drawerVisible"
    v-if="drawerType === 'Settings'"
    position="right"
    :header="t('menu.settings').value"
    class="toolbar-drawer"
  >
    <div>
      <h3>{{ t('menu.settings.language') }}</h3>
      <SelectButton
        v-model="language"
        :options="languageOptions"
        option-label="label"
        option-value="value"
      ></SelectButton>
    </div>
    <Divider></Divider>
    <div>
      <h3>{{ t('menu.settings.render') }}</h3>
      <h4>筛选节点</h4>
      <span style="display: flex">
        <ToggleSwitch v-model="linkReadModel" :true-value="true" :false-value="false" />
        <label> {{ t('menu.settings.linkReadModel') }} </label>

        <ToggleSwitch v-model="linkSystem" :true-value="true" :false-value="false" />
        <label> {{ t('menu.settings.linkExternalSystem') }} </label>
      </span>
    </div>
    <div>
      <h4>{{ t('menu.settings.render.ranker') }}</h4>
      <SelectButton v-model="renderRanker" :options="renderRankerOptions" option-label="label" option-value="value">
        <template #option="slotProps">
          <div v-tooltip.top="{ value: slotProps.option.note }">{{ slotProps.option.label }}</div>
        </template>
      </SelectButton>
    </div>
    <div>
      <h4>{{ t('menu.settings.render.padding') }}: {{ renderPadding }}</h4>
      <div>
        <Slider v-model="renderPadding" :step="0.5" :min="0.5" :max="10"></Slider>
      </div>
    </div>
    <div>
      <h4>{{ t('menu.settings.render.fontSize') }}: {{ renderFontSize }}</h4>
      <div>
        <Slider v-model="renderFontSize" :step="2" :min="10" :max="32"></Slider>
      </div>
    </div>
    <div>
      <h4>{{ t('menu.settings.render.edgesType') }}</h4>
      <SelectButton
        v-model="renderEdgesType"
        :options="renderEdgesTypeOptions"
        option-label="label"
        option-value="value"
      ></SelectButton>
    </div>
    <div v-show="renderEdgesType === VALID_EDGE_TYPES.Rounded">
      <h4>{{ t('menu.settings.render.bendSize') }}: {{ renderBendSize }}</h4>
      <div>
        <Slider v-model="renderBendSize" :step="0.1" :min="0.1" :max="0.6"></Slider>
      </div>
    </div>
  </Drawer>
  <Popover ref="helpPopoverRef">
    <h3>{{ t('menu.help.zoom') }}</h3>
    <p>{{ t('menu.help.zoom.content') }}</p>
    <h3>{{ t('menu.help.drag') }}</h3>
    <p>{{ t('menu.help.drag.content') }}</p>
  </Popover>
  <Dock :model="dockItems" position="right" style="position: fixed">
    <template #itemicon="{ item }">
      <Button
        v-tooltip.left="item.label"
        :disabled="(item.disabled as boolean)"
        :severity="item.severity ?? 'info'"
        :icon="item.icon"
        :src="item.icon"
        @click="(e: Event) => item.command!(e as any)"
        style="width: 100%"
      ></Button>
    </template>
  </Dock>
</template>
