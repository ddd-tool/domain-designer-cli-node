import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    silent: false,
    coverage: {
      enabled: true,
      include: ['lib/**'],
    },
  },
})
