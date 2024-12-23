import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  esbuild: {
    drop: ['console', 'debugger'], // 移除 console 和 debugger 语句
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ddd-tool/domain-designer-core': fileURLToPath(
        new URL('./node_modules/@ddd-tool/domain-designer-core', import.meta.url)
      ),
    },
  },
})
