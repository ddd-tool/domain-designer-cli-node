import packageInfo from '@/utils/package-info'
import log from '@/utils/log'
import { type types } from '@ddd-tool/domain-designer-generator'
import { useEnvironmentAgg } from '../environment-agg'

export const Subcommand = Object.freeze({
  Init: 'init',
  UpdateWorkspace: 'updateWorkspace',
  RunWeb: 'runWeb',
  Info: 'info',
  GenCode: 'GenCode',
  None: 'none',
} as const)
export type Subcommand = Enum<typeof Subcommand>

export type InitCommandArgs = {
  source: string
}

export type UpdateWorkspaceCommandArgs = {
  source: string
}

export type RunWebCommandArgs = {
  source: string
}

export type GenCodeCommandArgs = {
  source: string
  language?: types.Language
  context?:
    | types.GeneratorContext<'java'>
    | types.GeneratorContext<'kotlin'>
    | types.GeneratorContext<'go'>
    | types.GeneratorContext<'csharp'>
}

export type Script = {
  name: string
  content: string
}

function getScript(opt: { subcommand: string; scriptBaseName: string }): Script | undefined {
  const environmentAgg = useEnvironmentAgg()
  const packageManager = environmentAgg.states.packageManager.value
  const repoAddr = packageInfo.repository.url.replace(/git\+/g, '')
  const pmPrefix = packageManager === 'bun' ? 'bunx ' : packageManager === 'pnpm' ? '' : 'npx '

  const winScript = `REM App Name: Domain Designer Cli
REM Script Version: ${packageInfo.version}
REM Repo Addr: ${repoAddr}
REM Package Manager: ${packageManager}

@echo off
setlocal
set "scriptPath=%~dp0"

${pmPrefix} domain-designer-cli ${opt.subcommand} --source=%scriptPath%
`

  const unixScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${pmPrefix} domain-designer-cli ${opt.subcommand} --source="$(dirname "$(realpath "$0")")"
`

  const osType = environmentAgg.states.osType.value
  if (osType === 'windows') {
    return { name: `${opt.scriptBaseName}.bat`, content: winScript }
  } else if (osType === 'linux' || osType === 'mac') {
    return { name: `${opt.scriptBaseName}.sh`, content: unixScript }
  } else {
    log.printError(`Unsupported OS: ${osType}`)
  }
}

export function getRunWebScript(): Script | undefined {
  return getScript({ subcommand: 'runWeb', scriptBaseName: 'RunWeb' })
}

export function getGenCodeScript(): Script | undefined {
  return getScript({ subcommand: 'genCode', scriptBaseName: 'GenCode' })
}

export function getGitignore(): Script {
  return {
    name: '.gitignore',
    content: `!node_modules
.output

*.bat
*.sh
`,
  }
}
