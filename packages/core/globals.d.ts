export {}

declare global {
  function isNever(...args: never[]): void
}
