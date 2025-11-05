import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2017',
    },
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [], // 移除 console 和 debugger 语句
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#lib': fileURLToPath(new URL('./lib', import.meta.url)),
      '#domain': fileURLToPath(new URL('./lib/domain', import.meta.url)),
    },
  },
  build: {
    // minify: 'esbuild',
    minify: false,
    outDir: 'dist',
    target: 'es2017',
    cssCodeSplit: true,
    lib: {
      entry: fileURLToPath(new URL('./lib/index.ts', import.meta.url)),
      name: 'domain-design-ui-component',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'primevue', '@primeuix/themes'],
      output: {
        globals: {
          vue: '__Vue',
          primevue: '__PrimeVue',
          '@primeuix/themes': '__PrimeVueThemes',
        },
      },
    },
  },
})
