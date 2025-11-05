<script setup lang="ts">
import type { NodeLike } from '#lib/domain/common'

interface Props {
  node: NodeLike
  element: HTMLElement
}
const props = defineProps<Props>()
</script>

<template>
  <!-- v-if="props.node._attributes.rule === 'Info'" -->
  <template
    ><tspan><{{ props.node._attributes.name }}></tspan></template
  >
</template>
