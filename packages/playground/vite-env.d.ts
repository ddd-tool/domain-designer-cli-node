/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DESIGNER_PATHS: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ViteEnv extends ImportMetaEnv {}
