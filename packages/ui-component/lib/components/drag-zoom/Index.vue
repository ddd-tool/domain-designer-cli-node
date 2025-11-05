<script setup lang="ts">
import { getOSType, throttle } from '#lib/common'
import { ref, onMounted, onUnmounted } from 'vue'

const isSpacePressed = ref(false) // 是否按下空格键
const isDragging = ref(false) // 是否正在拖动
const position = ref({ x: 0, y: 0 }) // 元素的位置
const startDragPosition = ref({ x: 0, y: 0 }) // 鼠标开始拖动时的位置
const startElementPosition = ref({ x: 0, y: 0 }) // 元素开始拖动时的位置

const containerRef = ref<HTMLElement>()

const cursor = ref('unset')
const scale = ref(1) // 缩放比例，初始为 1
const minScale = 0.3 // 最小缩放比例
const maxScale = 3 // 最大缩放比例

// 键盘事件监听
const onKeyDown = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    if (isDragging.value) {
      cursor.value = 'grabbing'
    } else {
      cursor.value = 'grab'
    }
    e.preventDefault() // 阻止页面滚动
    isSpacePressed.value = true
  }
}

const onKeyUp = (e: KeyboardEvent) => {
  if (e.code === 'Space') {
    cursor.value = 'unset'
    isSpacePressed.value = false
  }
}

// 鼠标按下事件
const onMouseDown = (e: MouseEvent) => {
  // 判断是否按下鼠标中键或空格键
  if (isSpacePressed.value || e.button === 1) {
    isDragging.value = true
    startDragPosition.value = { x: e.clientX, y: e.clientY }
    startElementPosition.value = { ...position.value }
    cursor.value = 'grabbing' // 改变鼠标样式为拖动状态
    e.preventDefault() // 阻止默认行为（如滚动页面）
  }
}

const move = throttle((x: number, y: number) => {
  position.value = {
    x,
    y,
  }
}, 5)

// 鼠标移动事件
const onMouseMove = (e: MouseEvent) => {
  if (isDragging.value) {
    const deltaX = e.clientX - startDragPosition.value.x
    const deltaY = e.clientY - startDragPosition.value.y
    move(startElementPosition.value.x + deltaX, startElementPosition.value.y + deltaY)
  }
}

// 鼠标松开事件
const onMouseUp = (_: MouseEvent) => {
  if (isDragging.value) {
    isDragging.value = false
    cursor.value = isSpacePressed.value ? 'grab' : 'unset' // 根据空格键状态恢复鼠标样式
  }
}

function computeZoom(e: WheelEvent, oldScale: number, zoomSpeed: number) {
  const osType = getOSType()
  const isZoomIn =
    (e.deltaY < 0 && osType !== 'MacOS' && osType !== 'iOS') ||
    (e.deltaY > 0 && (osType === 'MacOS' || osType === 'iOS'))
  if (isZoomIn) {
    // 滚轮向上，放大
    return Math.min(maxScale, oldScale + zoomSpeed)
  } else {
    // 滚轮向下，缩小
    return Math.max(minScale, oldScale - zoomSpeed)
  }
}

// 复位函数
function resetPosition() {
  position.value.x = 0
  position.value.y = 0
}

defineExpose({
  resetPosition,
})

// 鼠标滚轮事件（缩放功能，基于鼠标中心缩放）
const onWheel = (e: WheelEvent) => {
  e.preventDefault() // 阻止页面默认滚动行为

  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()

  // 鼠标相对于容器左上角的偏移量
  const offsetX = e.clientX - rect.left
  const offsetY = e.clientY - rect.top

  const zoomSpeed = 0.1 // 缩放速度
  const oldScale = scale.value
  const newScale = computeZoom(e, oldScale, zoomSpeed)

  // 计算缩放比例
  const ratio = newScale / oldScale

  // 调整 position，确保鼠标位置在缩放前后保持一致
  position.value.x = position.value.x - (offsetX - position.value.x) * (ratio - 1)
  position.value.y = position.value.y - (offsetY - position.value.y) * (ratio - 1)

  scale.value = newScale
}

// 添加和移除事件监听
onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
  containerRef.value?.addEventListener('wheel', onWheel, { passive: false }) // 添加滚轮事件监听
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
      <!-- 插槽内容 -->
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
  transform-origin: 0 0; /* 设置缩放原点为左上角 */
}
</style>
