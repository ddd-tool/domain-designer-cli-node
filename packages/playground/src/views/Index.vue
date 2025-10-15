<script setup lang="ts">
import { Ui } from '@ddd-tool/domain-designer-ui-component'
import '@ddd-tool/domain-designer-ui-component/index.css'
import { ref } from 'vue'
import data from './index'
import type { DomainDesigner } from '@ddd-tool/domain-designer-core'

const designs = ref<Record<string, DomainDesigner>>(data)
// designs.value = {
//   user: (await import('F:/idea_projects/oneboot/.sdk/uml/demo/user')).default,
// }
</script>

<template>
  <Ui :designs="designs" />
</template>
