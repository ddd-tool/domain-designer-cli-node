<script setup lang="ts">
import Index from './views/Index.vue'
</script>

<template>
  <Suspense>
    <Index />
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>
