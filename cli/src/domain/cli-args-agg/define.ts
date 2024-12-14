export enum SubcommandEnum {
  Init = 'init',
  UpdateDeps = 'update',
  RunWeb = 'runWeb',
  Hello = 'hello',
  None = 'none',
}

export type InitCommandArgs = {
  source: string
}

export type UpdateCommandArgs = {
  source: string
}

export type RunWebCommandArgs = {
  source: string
}
