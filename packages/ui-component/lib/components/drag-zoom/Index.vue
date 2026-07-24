<script setup lang="ts">
import { getOSType, throttle } from '#lib/common'
import { ref, onMounted, onUnmounted } from 'vue'

const isSpacePressed = ref(false)
const isDragging = ref(false)
const position = ref({ x: 0, y: 0 })
const startDragPosition = ref({ x: 0, y: 0 })
const startElementPosition = ref({ x: 0, y: 0 })

const containerRef = ref<HTMLElement>()

const cursor = ref('unset')
const scale = ref(1)
const minScale = 0.3
const maxScale = 3

const onKeyDown = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    if (isDragging.value) {
      cursor.value = 'grabbing'
    } else {
      cursor.value = 'grab'
    }
    e.preventDefault()
    isSpacePressed.value = true
  }
}

const onKeyUp = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    cursor.value = 'unset'
    isSpacePressed.value = false
  }
}

const onMouseDown = (e: MouseEvent) => {
  if (isSpacePressed.value || e.button === 1) {
    isDragging.value = true
    startDragPosition.value = { x: e.clientX, y: e.clientY }
    startElementPosition.value = { ...position.value }
    cursor.value = 'grabbing'
    e.preventDefault()
  }
}

const move = throttle((x: number, y: number) => {
  position.value = {
    x,
    y,
  }
}, 5)

const onMouseMove = (e: MouseEvent) => {
  if (isDragging.value) {
    const deltaX = e.clientX - startDragPosition.value.x
    const deltaY = e.clientY - startDragPosition.value.y
    move(startElementPosition.value.x + deltaX, startElementPosition.value.y + deltaY)
  }
}

const onMouseUp = (_: MouseEvent) => {
  if (isDragging.value) {
    isDragging.value = false
    cursor.value = isSpacePressed.value ? 'grab' : 'unset'
  }
}

function computeZoom(deltaY: number, oldScale: number, zoomSpeed: number) {
  const osType = getOSType()
  const isZoomIn =
    (deltaY < 0 && osType !== 'MacOS' && osType !== 'iOS') || (deltaY > 0 && (osType === 'MacOS' || osType === 'iOS'))
  if (isZoomIn) {
    return Math.min(maxScale, oldScale + zoomSpeed)
  } else {
    return Math.max(minScale, oldScale - zoomSpeed)
  }
}

function resetPosition() {
  position.value.x = 0
  position.value.y = 0
}

defineExpose({
  resetPosition,
})

const onWheel = (e: WheelEvent) => {
  e.preventDefault()

  if (!containerRef.value) return

  if (e.ctrlKey) {
    const rect = containerRef.value.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    const zoomSpeed = 0.1
    const oldScale = scale.value
    const newScale = computeZoom(e.deltaY, oldScale, zoomSpeed)
    const ratio = newScale / oldScale

    position.value.x = position.value.x - (offsetX - position.value.x) * (ratio - 1)
    position.value.y = position.value.y - (offsetY - position.value.y) * (ratio - 1)

    scale.value = newScale
  } else {
    const panSpeed = 0.3
    position.value.x -= e.deltaX * panSpeed
    position.value.y -= e.deltaY * panSpeed
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  containerRef.value?.addEventListener('wheel', onWheel, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('keyup', onKeyUp)
  containerRef.value?.removeEventListener('wheel', onWheel)
})
</script>

<template>
  <div
    ref="containerRef"
    class="container"
    :style="{ cursor: cursor }"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
  >
    <div
      class="draggable"
      :style="{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
      }"
    >
      <slot>拖动并缩放我</slot>
    </div>
  </div>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  overflow: hidden;
  position: relative;
}

.draggable {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  transform-origin: 0 0;
}
</style>
