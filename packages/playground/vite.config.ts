import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  esbuild: {
    drop: ['console', 'debugger'], // 移除 console 和 debugger 语句
  },
  dev: {},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ddd-tool/domain-designer-core': fileURLToPath(
        new URL('./node_modules/@ddd-tool/domain-designer-core', import.meta.url),
      ),
    },
  },
})
