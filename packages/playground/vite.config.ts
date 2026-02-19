import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  esbuild: {
    drop: ['console', 'debugger'], // 移除 console 和 debugger 语句
  },
  server: {
    fs: {
      // Allow accessing files from global installation directories
      strict: false,
    },
    headers: {
      // 开发环境下禁用浏览器缓存
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ddd-tool/domain-designer-core': fileURLToPath(new URL('../core/dist', import.meta.url)),
      '@ddd-tool/domain-designer-ui-component': fileURLToPath(
        new URL('../ui-component/dist', import.meta.url),
      ),
    },
  },
})
