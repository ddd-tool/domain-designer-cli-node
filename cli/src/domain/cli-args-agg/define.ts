import os from 'node:os'
import packageInfo from '@/utils/package-info'
import log from '@/utils/log'

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

@echo off
setlocal
set "scriptPath=%~dp0"

domain-designer-cli runWeb --source=%scriptPath%
`

  const linuxScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}

domain-designer-cli runWeb --source="$(pwd)"
`

  const macScript = `#!/bin/bash
# App Name: Domain Designer Cli
# Script Version: ${packageInfo.version}
# Repo Addr: ${repoAddr}

domain-designer-cli runWeb --source="$(pwd)"
`

  const osType = os.type()
  if (osType === 'Windows_NT') {
    return {
      name: 'RunWeb.bat',
      content: winScript,
    }
  } else if (osType === 'Linux') {
    return {
      name: 'RunWeb.sh',
      content: linuxScript,
    }
  } else if (osType === 'Darwin') {
    return {
      name: 'RunWeb.sh',
      content: macScript,
    }
  } else {
    log.printError(`Unsupported OS: ${osType}`)
  }
}
