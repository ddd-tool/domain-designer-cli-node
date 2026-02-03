export {}

declare global {
  function isNever(...args: never[]): void
  type Enum<T extends Record<string, unknown>> = T[keyof T]
}
