<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import Button from 'primevue/button'
import Dock from 'primevue/dock'
import FloatLabel from 'primevue/floatlabel'
import Select from 'primevue/select'
import { EMPTY_STORY, useDiagramAgg } from '#domain/diagram-agg'
import { useI18nAgg } from '#domain/i18n-agg'

const diagramAgg = useDiagramAgg()
const i18nAgg = useI18nAgg()
const t = i18nAgg.commands.$t

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
const workflowOptions = computed(() => {
  const result: { name: string; code: string }[] = []
  if (diagramAgg.states.userStories.value[currentStory.value]) {
    for (const workflow of diagramAgg.states.userStories.value[currentStory.value]!) {
      result.push({ name: workflow, code: workflow })
    }
  }
  return result
})
const replayWorkflowDisabled = computed(() => diagramAgg.states.currentWorkflow.value === undefined)
function handleReplay() {
  if (currentWorkflow.value === undefined) {
    diagramAgg.commands.focusFlow(currentWorkflow.value)
  } else {
    diagramAgg.commands.focusFlow(currentWorkflow.value, currentStory.value)
  }
}

const dockItems = reactive([{ is: 'UserStory' }, { is: 'Workflow' }, { is: 'replayWorkflow' }])
</script>

<template>
  <Dock :model="dockItems" position="bottom" style="position: fixed">
    <template #item="{ item }">
      <div v-if="item.is === 'UserStory'">
        <FloatLabel variant="on">
          <Select
            inputId="currentStory"
            v-model="currentStory"
            :options="userStoriesOptions"
            checkmark
            option-label="name"
            option-value="code"
            placeholder="Select a Story"
          />
          <label for="currentStory">用户故事</label>
        </FloatLabel>
      </div>
      <div v-else-if="item.is === 'Workflow'">
        <FloatLabel variant="on">
          <Select
            inputId="currentWorkflow"
            v-model="currentWorkflow"
            :options="workflowOptions"
            option-label="name"
            option-value="code"
          />
          <label for="currentWorkflow">流程</label>
        </FloatLabel>
      </div>
      <div v-else-if="item.is === 'replayWorkflow'">
        <Button
          v-tooltip.left="t('menu.replayWorkflow')"
          :disabled="replayWorkflowDisabled"
          severity="info"
          icon="pi pi-play-circle"
          src="pi pi-play-circle"
          @click="handleReplay"
          :style="{ width: '3rem', cursor: replayWorkflowDisabled ? 'not-allowed' : 'pointer' }"
        ></Button>
      </div>
    </template>
  </Dock>
</template>

<style scoped>
.dock-selector {
  display: inline-block;
}
</style>
