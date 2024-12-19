import { Command } from 'commander'
import type { Reactive, Ref } from '@vue/reactivity'
import { InitCommandArgs, RunWebCommandArgs, SubcommandEnum, UpdateWorkspaceCommandArgs } from './define'

export function requireInfoCommand(params: { currentCommand: Ref<SubcommandEnum> }) {
  return new Command().name('info').action(() => {
    params.currentCommand.value = SubcommandEnum.Info
  })
}

export async function requireInfoCommandArgs(params: { currentCommand: Ref<SubcommandEnum> }) {
  params.currentCommand.value = SubcommandEnum.Info
}

export function requireInitCommand(params: { currentCommand: Ref<SubcommandEnum>; args: Reactive<InitCommandArgs> }) {
  return new Command()
    .name('init')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.Init
      if (options.source) {
        params.args.source = options.source
      }
    })
}

export async function requireInitCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<InitCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.Init
}

export function requireUpdateWorkspaceCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateWorkspaceCommandArgs>
}) {
  return new Command()
    .name('update')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.UpdateWorkspace
      if (options.source) {
        params.args.source = options.source
      }
    })
}

export async function requireUpdateWorkspaceCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateWorkspaceCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.UpdateWorkspace
}

export function requireRunWebCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<RunWebCommandArgs>
}) {
  return new Command()
    .name('runWeb')
    .option('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.RunWeb
      if (options.source) {
        params.args.source = options.source
      }
    })
}

export async function requireRunWebCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<RunWebCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.RunWeb
}
