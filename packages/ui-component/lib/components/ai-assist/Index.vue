<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Message from 'primevue/message'
import Password from 'primevue/password'
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import ToggleSwitch from 'primevue/toggleswitch'
import AiChat from './AiChat.vue'
import CodeGen from './CodeGen.vue'
import { useAiAssistAgg } from '#lib/domain/ai-assist'
import { bindRef } from 'vue-fn/domain'
import './api'

const aiAssistAgg = useAiAssistAgg()
const aiAssistVisible = ref(false)
const dialogDraggable = ref(true)
function handleToggleDialog() {
  aiAssistVisible.value = !aiAssistVisible.value
}

const aiKeyError = ref('')
const isCacheAiKey = bindRef(
  aiAssistAgg.states.isCacheAiKey,
  (v) => {
    aiAssistAgg.commands.setIsCacheAiKey(v)
  },
  { forceSync: true }
)
const aiKey = bindRef(aiAssistAgg.states.apiKey, (v) => {
  aiKeyError.value = aiAssistAgg.commands.setAiKey(v)
})
onMounted(() => {
  if (aiAssistAgg.states.apiKey.value?.length > 0) {
    aiAssistAgg.commands.connect('/api/connect')
  }
})

const aiChatValid = computed(() => {
  const result = aiAssistAgg.states.apiKey.value?.length > 0
  return result
})
</script>

<template>
  <Dialog
    v-model:visible="aiAssistVisible"
    v-model:draggable="dialogDraggable"
    maximizable
    close-icon="pi pi-minus-circle"
    style="width: 40rem; height: 60%; display: flex"
  >
    <template #header><h3>AI 辅助</h3></template>
    <div>
      <Stepper value="1">
        <StepList style="width: 95%; margin: 0 auto">
          <Step value="1">设置AI key</Step>
          <Step :disabled="!aiChatValid" value="2">发起提问</Step>
          <Step :disabled="true" value="3"><span v-tooltip.top="{ value: '暂不支持' }">生成代码</span></Step>
        </StepList>
        <StepPanels>
          <StepPanel value="1">
            <div style="width: 100%; height: 100%">
              <h3>AI key（暂只支持Kimi AI）</h3>
              <div style="width: 100%">
                <Password
                  v-model="aiKey"
                  toggleMask
                  showClear
                  :feedback="false"
                  style="width: 100%"
                  :input-style="{ width: '100%', display: 'block' }"
                />
              </div>
              <div style="display: flex; margin-top: 0.5rem">
                <ToggleSwitch v-model="isCacheAiKey" :true-value="true" :false-value="false" />
                <span> 将key缓存至浏览器localStorage </span>
              </div>
              <Message v-if="aiKeyError" severity="error" size="small" variant="simple">{{ aiKeyError }}</Message>
            </div>
          </StepPanel>
          <StepPanel value="2">
            <AiChat></AiChat>
          </StepPanel>
          <StepPanel value="3">
            <CodeGen></CodeGen>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  </Dialog>

  <div class="ai-assist">
    <Button
      v-tooltip.left="'AI辅助'"
      severity="help"
      icon="pi pi-microchip-ai"
      @click="handleToggleDialog"
      class="ai-assist-item"
      :style="{ width: '3rem', cursor: 'pointer' }"
    ></Button>
  </div>
</template>

<style scoped>
.ai-assist {
  position: fixed;
  width: 3rem;
  height: 3rem;
  right: 0;
  bottom: 0;
  margin: 1rem;
  /* transform: translate(-50%, -50%); */
  z-index: 999;
  opacity: 0.7;
  transition: 0.5s;
}
.ai-assist:hover {
  opacity: 1;
}
.ai-assist .ai-assist-item {
  transition: 0.5s;
}
.ai-assist .ai-assist-item:hover {
  scale: 1.2;
}
</style>
<style>
.p-dialog-header {
  padding: 0 1.25rem;
}
.p-dialog-content {
  padding: 0 1rem 1rem 1rem;
}
</style>
