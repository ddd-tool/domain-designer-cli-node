<script setup lang="ts">
import * as nomnoml from './nomnoml'
import { computed, onMounted, ref, watch, onBeforeUnmount } from 'vue'
import getStyle from './base-style'
import { useDiagramAgg } from '#lib/domain/diagram-agg'
import { preprocessSvg } from './preprocess'

const diagramAgg = useDiagramAgg()

const svgDom = computed(() => {
  const baseStyle = getStyle(diagramAgg.states.renderConfig)
  const code = baseStyle + diagramAgg.states.code.value
  return preprocessSvg(diagramAgg, nomnoml.renderSvg(code))
})
const svgContainerRef = ref<HTMLDivElement>()
onMounted(() => {
  appendSvg()
})
watch(svgDom, () => {
  appendSvg()
})
function appendSvg() {
  for (const child of svgContainerRef.value!.children as unknown as HTMLElement[]) {
    svgContainerRef.value!.removeChild(child)
  }
  svgContainerRef.value!.appendChild(svgDom.value)
}

// ======================= focusOnInfo =======================
onBeforeUnmount(
  diagramAgg.events.onFocusNode.listen(({ data }) => {
    if (data.id === undefined) {
      for (const el of document.querySelectorAll('svg .active') as unknown as HTMLElement[]) {
        el.classList.remove('active')
      }
    }
  })
)

// ======================= focusOnWorkFlow/playWorkflow =======================
let currentAnimationTask = 0
function startWorkflowAnimation(animationTask: number, nodes: readonly string[]) {
  diagramAgg.commands.setDownloadEnabled(false)
  let t = 0
  for (let i = 0; i < nodes.length; i++) {
    const el = document.querySelector(`[data-name="${nodes[i]}"]`) as SVGGElement
    setTimeout(() => {
      if (animationTask !== currentAnimationTask || !el) return
      el.style.transition = `opacity 0s`
      el.style.opacity = '0.0'
      setTimeout(() => {
        if (animationTask !== currentAnimationTask) return
        el.style.transition = `opacity 0.5s`
        el.style.opacity = '1'
        if (i === nodes.length - 1) {
          diagramAgg.commands.setDownloadEnabled(true)
        }
      }, 100)
    }, t)
    t += diagramAgg.states.workflowPlayInterval.value
  }
}
onBeforeUnmount(
  diagramAgg.events.onFocusFlow.listen(({ data }) => {
    const idMap = diagramAgg.commands.getIdMap()
    let items: readonly string[] = data.workflow === undefined ? [] : diagramAgg.states.workflows.value[data.workflow]!
    items = items.filter((i) => {
      const item = idMap[i]
      if (!item) {
        return false
      }
      if (!data.displayReadModel && item._attributes.rule === 'ReadModel') {
        return false
      } else if (!data.displaySystem && item._attributes.rule === 'System') {
        return false
      }
      return true
    })
    if (!data.displayReadModel || !data.displaySystem) {
      items = removeAdjacentDuplicates(items)
    }
    const map: Record<string, boolean> = {}

    const doms = document.querySelectorAll('g') as unknown as SVGGElement[]
    if (items.length === 0) {
      for (const dom of doms) {
        dom.style.transition = 'opacity 0s'
        dom.style.opacity = '1'
      }
      return
    }
    for (const dom of doms) {
      const dataName = dom.dataset.name
      if (!dataName || map[dataName]) {
        continue
      }
      dom.style.transition = 'opacity 0s'
      dom.style.opacity = '0.1'
      map[dataName] = true
    }
    setTimeout(() => {
      startWorkflowAnimation(++currentAnimationTask, items)
    })
  })
)
function removeAdjacentDuplicates(arr: readonly string[]): string[] {
  if (arr.length === 0) return []
  const result: string[] = [arr[0]!]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]!)
    }
  }
  return result
}

// ============================ download ============================
onBeforeUnmount(
  diagramAgg.events.onDownloadSvg.listen(() => {
    const el = document.querySelector('svg') as SVGSVGElement
    const svg = new XMLSerializer().serializeToString(el)
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
    const svgUrl = URL.createObjectURL(svgBlob)
    const tempLink = document.createElement('a')
    tempLink.href = svgUrl
    tempLink.setAttribute('download', 'diagram.svg')
    tempLink.click()
    URL.revokeObjectURL(svgUrl)
  })
)
</script>

<template>
  <div class="nomnoml" ref="svgContainerRef"></div>
</template>

<style scoped>
.nomnoml {
  height: 100%;
  overflow: auto;
}
</style>
<style>
.nomnoml text {
  cursor: pointer;
}
@keyframes shining-info {
  from {
    stroke-width: 1px;
    stroke-opacity: 0.2;
    stroke: #000;
    -webkit-text-stroke-color: #000;
  }
  to {
    stroke-width: 1px;
    stroke-opacity: 0.8;
    stroke: #000;
    -webkit-text-stroke-color: #000;
  }
}
@keyframes shining-node {
  from {
    stroke-opacity: 0.2;
    stroke: #33322e;
    -webkit-text-stroke-color: #33322e;
  }
  to {
    stroke-opacity: 1;
    stroke: #33322e;
    -webkit-text-stroke-color: #33322e;
  }
}
.nomnoml .highlight-info:not(.active) text {
  animation: shining-info 0.6s alternate infinite;
  -webkit-animation: shining-info 0.6s alternate infinite;
  -moz-animation: shining-info 0.6s alternate infinite;
}
.nomnoml .highlight-note:not(.active) {
  animation: shining-info 0.6s alternate infinite;
  -webkit-animation: shining-info 0.6s alternate infinite;
  -moz-animation: shining-info 0.6s alternate infinite;
}
.nomnoml .highlight-node:not(.active) g:first-child {
  animation: shining-node 0.6s alternate infinite;
  -webkit-animation: shining-node 0.6s alternate infinite;
  -moz-animation: shining-node 0.6s alternate infinite;
}

.nomnoml g[data-id].active text,
.nomnoml tspan[data-id].active {
  stroke-width: 1px;
  stroke-opacity: 0.8;
  stroke: #000;
  -webkit-text-stroke-color: #000;
}
.nomnoml g.node.active {
  animation: shining-node 0.6s alternate infinite;
  -webkit-animation: shining-node 0.6s alternate infinite;
  -moz-animation: shining-node 0.6s alternate infinite;
}
</style>
