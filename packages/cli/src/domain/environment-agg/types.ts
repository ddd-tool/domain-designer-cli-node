export const PackageManager = Object.freeze({
  PNPM: 'pnpm',
  NPM: 'npm',
  // YARN = 'yarn',
  BUN: 'bun',
} as const)
export type PackageManager = Enum<typeof PackageManager>

export const OsType = Object.freeze({
  Windows: 'windows',
  Linux: 'linux',
  Mac: 'mac',
  Undefined: 'undefined',
} as const)
export type OsType = Enum<typeof OsType>
