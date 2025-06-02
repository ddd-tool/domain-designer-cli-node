REM App Name: Domain Designer Cli
REM Script Version: 0.1.0-beta.14
REM Repo Addr: https://github.com/ddd-tool/domain-designer-cli-node.git
REM Package Manager: pnpm

@echo off
setlocal
set "scriptPath=%~dp0"

domain-designer-cli runWeb --source=%scriptPath%
