export enum SubcommandEnum {
  Init = 'init',
  UpdateDeps = 'update',
  RunWeb = 'runWeb',
  Info = 'hello',
  None = 'none',
}

export type InitCommandArgs = {
  webRoot: string
  source: string
}

export type UpdateCommandArgs = {
  webRoot: string
  source: string
}

export type RunWebCommandArgs = {
  webRoot: string
  source: string
}
