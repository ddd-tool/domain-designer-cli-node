import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  assetsInclude: [],
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    target: 'esnext',
    lib: {
      entry: fileURLToPath(new URL('./lib/index.ts', import.meta.url)),
      name: 'domain-designer-core',
      fileName: 'index',
      formats: ['es'],
    },
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
})
