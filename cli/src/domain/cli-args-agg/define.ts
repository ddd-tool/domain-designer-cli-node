import packageInfo from '@/utils/package-info'
import log from '@/utils/log'
import { checkOS } from '@/utils/check-env'

export enum SubcommandEnum {
  Init = 'init',
  UpdateWorkspace = 'updateWorkspace',
  RunWeb = 'runWeb',
  Info = 'info',
  None = 'none',
}

export type InitCommandArgs = {
  webRoot: string
  source: string
}

export type UpdateWorkspaceCommandArgs = {
  webRoot: string
  source: string
}

export type RunWebCommandArgs = {
  webRoot: string
  source: string
}

export type Script = {
  name: string
  content: string
}

export function getRunWebScript(): Script | undefined {
  const repoAddr = packageInfo.repository.url.replace(/git\+/g, '')

  const winScript = `REM App Name: Domain Designer Cli
REM Script Version: ${packageInfo.version}
REM Repo Addr: ${repoAddr}
REM Package Manager: ${process.env.PACKAGE_MANAGER}

@echo off
setlocal
set "scriptPath=%~dp0"

domain-designer-cli runWeb --source=%scriptPath%
`

  const linuxScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${process.env.PACKAGE_MANAGER}

domain-designer-cli runWeb --source="$(dirname "$(realpath "$0")")"
`

  const macScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}
# Package Manager: ${process.env.PACKAGE_MANAGER}

domain-designer-cli runWeb --source="$(dirname "$(realpath "$0")")"
`

  const osType = checkOS()
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
