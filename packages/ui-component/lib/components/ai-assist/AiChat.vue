<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { useAiAssistAgg } from '#domain/ai-assist'
import { ref } from 'vue'

const aiAssist = useAiAssistAgg()
const currentQuery = ref('')

function handleQuery() {
  aiAssist.commands.query(currentQuery.value)
  currentQuery.value = ''
}
</script>

<template>
  <h4>会话</h4>
  <div v-for="conversation in Object.values(aiAssist.states.conversationMap)">
    <p v-for="content in conversation.content">
      <span v-for="text in content.text">
        {{ text || '无内容' }}
      </span>
    </p>
  </div>
  <InputText @keypress.enter="handleQuery" v-model="currentQuery"></InputText>
</template>
