export {}

declare global {
  function isNever(v: never): void
  // declare namespace NodeJS {
  //   export interface ProcessEnv {
  // NOTE: The value of env variables will trans to string
  // Example:
  // ```
  // process.env.BOOL=true
  // expect(process.env.BOOL === 'true')
  // ```
  // DEBUG_MODE?: 'T' | 'F'
  // PACKAGE_MANAGER?: 'bun' | 'pnpm'
  // }
  // }
}
