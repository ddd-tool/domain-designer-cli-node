export {}

declare global {
  function isNever(...values: never[]): void
  type Enum<T extends Record<string, unknown>> = T[keyof T]
}
