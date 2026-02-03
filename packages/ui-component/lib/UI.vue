<script setup lang="ts">
import Nomnoml from '#lib/components/nomnoml/Index.vue'
import DragZoom from '#lib/components/drag-zoom/Index.vue'
import ToolBar from '#lib/components/tool-bar/Index.vue'
import StoryBar from '#lib/components/story-bar/Index.vue'
import { EMPTY_STORY, useDiagramAgg } from '#domain/diagram-agg'
import Drawer from 'primevue/drawer'
import Select from 'primevue/select'
import Tabs from 'primevue/tabs'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import ToggleSwitch from 'primevue/toggleswitch'
import SelectButton from 'primevue/selectbutton'
import Divider from 'primevue/divider'
import Dock from 'primevue/dock'
import Fieldset from 'primevue/fieldset'
import Popover from 'primevue/popover'
import Slider from 'primevue/slider'
import { computed, reactive, ref, watch } from 'vue'
import { useI18nAgg } from './domain/i18n-agg'
import { type DomainDesigner } from '@ddd-tool/domain-designer-core'
import { parseNode } from './ui'
import { Ranker, EdgeType } from './domain/diagram-agg/types'
import { bindRef } from 'vue-fn/domain'

type NonEmptyObject<T extends object> = keyof T extends never ? never : T
interface Props {
  designs: NonEmptyObject<Record<string, DomainDesigner>>
}

const props = defineProps<Props>()

const i18nAgg = useI18nAgg()
const t = i18nAgg.commands.$t
const diagramAgg = useDiagramAgg(props.designs)

const dragZoomRef = ref()

// =========================== Focus Node ===========================
let focusInfoTask = '0'
const nodeDetailCollapsed = bindRef(
  () => diagramAgg.states.currentNode.value === undefined,
  (v) => {
    if (v) {
      diagramAgg.commands.setCurrentNode(undefined)
    }
  },
)
const currentNode = ref(diagramAgg.states.currentNode.value)
const nodeDetailVisible = computed(() => currentNode.value !== undefined)
const nodeDetail = computed(() => {
  if (!currentNode.value) {
    return parseNode(undefined)
  }
  const node = diagramAgg.states.design.value?._getContext().getIdMap()[currentNode.value]
  return parseNode(node)
})
diagramAgg.events.onFocusNode.listen(({ data, version }) => {
  focusInfoTask = version
  if (data.id === undefined) {
    if (!nodeDetailVisible.value) {
      return
    }
    nodeDetailCollapsed.value = true
    setTimeout(() => {
      if (focusInfoTask === version) {
        currentNode.value = data.id
      }
    }, 500)
    return
  }
  currentNode.value = data.id
  setTimeout(() => {
    if (focusInfoTask === version) {
      nodeDetailCollapsed.value = false
    }
  }, 0)
})

// =========================== Help ===========================
const helpPopoverRef = ref()
const toggle = (event: Event) => {
  helpPopoverRef.value.toggle(event)
}

// =========================== Settings ===========================
const drawerVisible = ref(false)
const drawerType = ref<'UserStories' | 'Settings' | undefined>(undefined)
const workflowPlayInterval = bindRef(diagramAgg.states.workflowPlayInterval, (v) => {
  diagramAgg.commands.setWorkflowPlayInterval(v)
})
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
  },
)
const renderRankerOptions = reactive([
  {
    label: Ranker.NetworkSimplex,
    value: Ranker.NetworkSimplex,
    note: t('menu.settings.render.ranker.NetworkSimplex.note'),
  },
  {
    label: Ranker.TightTree,
    value: Ranker.TightTree,
    note: t('menu.settings.render.ranker.TightTree.note'),
  },
  {
    label: Ranker.LongestPath,
    value: Ranker.LongestPath,
    note: t('menu.settings.render.ranker.LongestPath.note'),
  },
])

const renderPadding = bindRef(
  () => diagramAgg.states.renderConfig.padding,
  (v) => {
    diagramAgg.commands.setRenderPadding(v)
  },
)
const renderFontSize = bindRef(
  () => diagramAgg.states.renderConfig.fontSize,
  (v) => {
    diagramAgg.commands.setRenderFontSize(v)
  },
)
const renderEdgesType = bindRef(
  () => diagramAgg.states.renderConfig.edges,
  (v) => {
    diagramAgg.commands.setRenderEdgesType(v)
  },
)
const renderEdgesTypeOptions = reactive([
  {
    label: t('menu.settings.render.edgesType.hard'),
    value: EdgeType.Hard,
  },
  {
    label: t('menu.settings.render.edgesType.rounded'),
    value: EdgeType.Rounded,
  },
])

const renderBendSize = bindRef(
  () => diagramAgg.states.renderConfig.bendSize,
  (v) => {
    diagramAgg.commands.setRenderBendSize(v)
  },
)
const currentDesignKey = bindRef(diagramAgg.states.currentDesignKey, (v) => {
  handleNoFocus()
  diagramAgg.commands.switchDesign(v!)
})
const designKeyOptions = computed(() => {
  const result: { label: string; value: string }[] = []
  for (const key of diagramAgg.states.designKeys.value) {
    result.push({ label: key, value: key })
  }
  return result
})

// =========================== User Stories ===========================
const currentStory = ref(EMPTY_STORY)
watch(currentStory, (story) => {
  if (story !== EMPTY_STORY) {
    currentWorkflow.value = diagramAgg.states.design.value?._getContext().getUserStories()?.[story]?.[0]
  }
  diagramAgg.commands.focusFlow(currentWorkflow.value!, story)
})
const userStoriesOptions = computed(() => {
  const result: { name: string; code: string }[] = []
  for (const story in diagramAgg.states.userStories.value) {
    if (story === EMPTY_STORY) {
      result.push({ name: `<${t('constant.empty').value}>`, code: EMPTY_STORY })
    } else {
      result.push({ name: story, code: story })
    }
  }
  return result
})
const currentWorkflow = ref<undefined | string>()
watch(currentWorkflow, (workflow) => {
  diagramAgg.commands.focusFlow(workflow!, currentStory.value)
})
function handleNoFocus() {
  currentStory.value = EMPTY_STORY
  currentWorkflow.value = undefined
}
// =========================== Dock ===========================
const dockItems = ref([
  {
    label: t('menu.replayWorkflow'),
    icon: 'pi pi-play-circle',
    disabled: computed(() => diagramAgg.states.currentWorkflow.value === undefined),
    command() {
      if (currentWorkflow.value === undefined) {
        diagramAgg.commands.focusFlow(currentWorkflow.value)
      } else {
        diagramAgg.commands.focusFlow(currentWorkflow.value, currentStory.value)
      }
    },
  },
  {
    label: t('menu.focusOnUserStory'),
    icon: 'pi pi-users',
    command() {
      drawerType.value = 'UserStories'
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
    command() {
      diagramAgg.commands.downloadSvg()
    },
  },
  {
    label: t('menu.resetPosition'),
    icon: 'pi pi-sync',
    severity: 'success',
    command() {
      dragZoomRef.value?.resetPosition()
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
  <ToolBar :designs="designs"></ToolBar>
  <StoryBar :dragZoomRef="dragZoomRef"></StoryBar>
  <template v-show="false">
    <Dock :model="dockItems" position="right" style="position: fixed">
      <template #itemicon="{ item }">
        <Button
          v-tooltip.left="item.label"
          :disabled="item.disabled as boolean"
          :severity="item.severity ?? 'info'"
          :icon="item.icon"
          :src="item.icon"
          @click="(e: Event) => item.command!(e as any)"
          style="width: 100%"
        ></Button>
      </template>
    </Dock>
    <Drawer
      v-model:visible="drawerVisible"
      v-if="drawerType === 'UserStories'"
      position="right"
      :header="t('menu.focusOnUserStory').value"
      class="toolbar-drawer"
    >
      <div>
        <p>{{ t('menu.focusOnUserStory.animationDuration') }}：{{ workflowPlayInterval }} ms</p>
        <Slider v-model="workflowPlayInterval" :step="50" :min="0" :max="500"></Slider>
      </div>
      <Divider></Divider>
      <Select
        v-model="currentStory"
        :options="userStoriesOptions"
        option-label="name"
        option-value="code"
        placeholder="Select a Story"
      ></Select>
      <br />
      <Button :label="t('menu.focusOnUserStory.focusNothing').value" severity="info" @click="handleNoFocus"></Button>
      <Tabs v-model:value="currentStory" scrollable>
        <TabPanels>
          <TabPanel v-for="i in Object.keys(diagramAgg.states.userStories.value)" :key="i" :value="i">
            <div v-for="f of Object.values(diagramAgg.states.userStories.value?.[i]!)" :key="f">
              <RadioButton v-model="currentWorkflow" :inputId="f" :name="i" :value="f"></RadioButton>
              <label :for="f">{{ f }}</label>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Drawer>
    <Drawer
      v-model:visible="drawerVisible"
      v-if="drawerType === 'Settings'"
      position="right"
      :header="t('menu.settings').value"
      class="toolbar-drawer"
    >
      <div>
        <ToggleSwitch v-model="linkReadModel" :true-value="true" :false-value="false" />
        <label> {{ t('menu.settings.linkReadModel') }} </label>
      </div>
      <div>
        <ToggleSwitch v-model="linkSystem" :true-value="true" :false-value="false" />
        <label> {{ t('menu.settings.linkExternalSystem') }} </label>
      </div>
      <Divider></Divider>
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
      <div v-show="renderEdgesType === EdgeType.Rounded">
        <h4>{{ t('menu.settings.render.bendSize') }}: {{ renderBendSize }}</h4>
        <div>
          <Slider v-model="renderBendSize" :step="0.1" :min="0.1" :max="0.6"></Slider>
        </div>
      </div>
      <Divider></Divider>
      <div class="datasource">
        <h4>{{ t('menu.settings.dataSource') }}</h4>
        <div v-for="(item, index) in designKeyOptions" :key="index" class="datasource-item">
          <RadioButton v-model="currentDesignKey" :input-id="item.value" :value="item.value"></RadioButton>
          <label :for="item.value"> {{ item.label }} </label>
        </div>
      </div>
    </Drawer>
  </template>
  <DragZoom ref="dragZoomRef" style="width: 100vw; height: 100vh">
    <Nomnoml />
  </DragZoom>
  <Fieldset
    class="root-fieldset"
    v-show="nodeDetailVisible"
    v-model:collapsed="nodeDetailCollapsed"
    :toggleable="true"
    :legend="nodeDetail.name"
  >
    <h2>{{ nodeDetail.name }}: {{ nodeDetail.rule }}</h2>
    <Divider></Divider>
    <template v-if="nodeDetail.type">
      <h3>{{ t('constant.type') }}:</h3>
      <p>{{ nodeDetail.type }}</p>
    </template>
    <template v-if="nodeDetail.relatedTypes">
      <Divider></Divider>
      <h3>{{ t('constant.relatedTypes') }}:</h3>
      <p>{{ nodeDetail.relatedTypes }}</p>
      <Divider></Divider>
    </template>
    <h3>{{ t('constant.note') }}:</h3>
    <p :class="nodeDetail.note ? 'note' : ''">{{ nodeDetail.note ?? `<${t('constant.empty').value}>` }}</p>
  </Fieldset>
  <Popover ref="helpPopoverRef">
    <h3>{{ t('menu.help.zoom') }}</h3>
    <p>{{ t('menu.help.zoom.content') }}</p>
    <h3>{{ t('menu.help.drag') }}</h3>
    <p>{{ t('menu.help.drag.content') }}</p>
  </Popover>
</template>

<style>
.p-dock {
  opacity: 0.4;
  transition: 0.5s;
}
.p-dock:hover {
  opacity: 1;
}
.p-dock .p-dock-item {
  transition: 0.5s;
}
.p-dock .p-dock-item:hover {
  scale: 1.2;
}
.toolbar-drawer {
  width: 40%;
}
.toolbar-drawer .datasource {
  font-weight: bold;
}
.toolbar-drawer .datasource .datasource-item {
  display: grid;
  grid-template-columns: 20px 1fr;
  grid-template-rows: 1fr;
  margin: 5px 0;
  line-height: 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
}
.toolbar-drawer .datasource .datasource-item :hover {
  cursor: pointer;
  background-image: linear-gradient(to bottom, white, rgb(228, 250, 255), white);
}
.toolbar-drawer .datasource .datasource-item label {
  padding-left: 5px;
}
.root-fieldset {
  opacity: 0.7;
  white-space: pre-line;
  position: absolute;
  right: 4rem;
  top: 0;
  width: 30%;
  transition: opacity 0.5s ease-out;
}
.root-fieldset:hover {
  opacity: 1;
}
.root-fieldset .note::before {
  content: '';
  display: inline-block;
  height: 1rem;
  width: 0.5rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  background-color: #4441ff;
}
</style>
