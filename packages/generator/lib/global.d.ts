export {}

declare global {
  function isNever(...values: never[]): void
}
