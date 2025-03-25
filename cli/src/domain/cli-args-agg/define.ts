import packageInfo from '@/utils/package-info'
import log from '@/utils/log'
import { define } from '@ddd-tool/domain-designer-generator'
import { useEnvironmentAgg } from '../environment-agg'

export enum SubcommandEnum {
  Init = 'init',
  UpdateWorkspace = 'updateWorkspace',
  RunWeb = 'runWeb',
  Info = 'info',
  GenCode = 'GenCode',
  None = 'none',
}

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
  language?: define.Language
  context?:
    | define.GeneratorContext<define.Language.Java>
    | define.GeneratorContext<define.Language.Kotlin>
    | define.GeneratorContext<define.Language.Go>
    | define.GeneratorContext<define.Language.CSharp>
}

export type Script = {
  name: string
  content: string
}

export function getRunWebScript(): Script | undefined {
  const environmentAgg = useEnvironmentAgg()
  const packageManager = environmentAgg.states.packageManager.value
  const repoAddr = packageInfo.repository.url.replace(/git\+/g, '')

  const winScript = `REM App Name: Domain Designer Cli
REM Script Version: ${packageInfo.version}
REM Repo Addr: ${repoAddr}
REM Package Manager: ${packageManager}

@echo off
setlocal
set "scriptPath=%~dp0"

${packageManager === 'bun' ? 'bunx ' : ''}domain-designer-cli runWeb --source=%scriptPath%
`

  const linuxScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === 'bun' ? 'bunx ' : ''}domain-designer-cli runWeb --source="$(dirname "$(realpath "$0")")"
`

  const macScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === 'bun' ? 'bunx ' : ''}domain-designer-cli runWeb --source="$(dirname "$(realpath "$0")")"
`

  const osType = environmentAgg.states.osType.value
  if (osType === 'windows') {
    return {
      name: 'RunWeb.bat',
      content: winScript,
    }
  } else if (osType === 'linux') {
    return {
      name: 'RunWeb.sh',
      content: linuxScript,
    }
  } else if (osType === 'mac') {
    return {
      name: 'RunWeb.sh',
      content: macScript,
    }
  } else {
    log.printError(`Unsupported OS: ${osType}`)
  }
}

export function getGenCodeScript(): Script | undefined {
  const environmentAgg = useEnvironmentAgg()
  const packageManager = environmentAgg.states.packageManager.value
  const repoAddr = packageInfo.repository.url.replace(/git\+/g, '')

  const winScript = `REM App Name: Domain Designer Cli
REM Script Version: ${packageInfo.version}
REM Repo Addr: ${repoAddr}
REM Package Manager: ${packageManager}

@echo off
setlocal
set "scriptPath=%~dp0"

${packageManager === 'bun' ? 'bunx ' : ''}domain-designer-cli genCode --source=%scriptPath%
`

  const linuxScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === 'bun' ? 'bunx ' : ''}domain-designer-cli genCode --source="$(dirname "$(realpath "$0")")"
`

  const macScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${packageManager}

${packageManager === 'bun' ? 'bunx ' : ''}domain-designer-cli genCode --source="$(dirname "$(realpath "$0")")"
`

  const osType = environmentAgg.states.osType.value
  if (osType === 'windows') {
    return {
      name: 'GenCode.bat',
      content: winScript,
    }
  } else if (osType === 'linux') {
    return {
      name: 'GenCode.sh',
      content: linuxScript,
    }
  } else if (osType === 'mac') {
    return {
      name: 'GenCode.sh',
      content: macScript,
    }
  } else {
    log.printError(`Unsupported OS: ${osType}`)
  }
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
