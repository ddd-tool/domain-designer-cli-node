export {}

declare global {
  function isNever(v: never): void
  declare namespace NodeJS {
    export interface ProcessEnv {
      DEBUG_MODE?: boolean
    }
  }
}
