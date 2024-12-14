import { Command } from 'commander'
import type { Reactive, Ref } from '@vue/reactivity'
import { InitCommandArgs, RunWebCommandArgs, SubcommandEnum, UpdateCommandArgs } from './define'
import prompts from 'prompts'
import { useI18nAgg } from '../i18n-agg'

const $t = useI18nAgg().commands.t

export function requireInfoCommand(params: { currentCommand: Ref<SubcommandEnum> }) {
  return new Command().name('hello').action(() => {
    params.currentCommand.value = SubcommandEnum.Info
  })
}

export async function requireHelloCommandArgs(params: { currentCommand: Ref<SubcommandEnum> }) {
  params.currentCommand.value = SubcommandEnum.Info
}

export function requireInitCommand(params: { currentCommand: Ref<SubcommandEnum>; args: Reactive<InitCommandArgs> }) {
  return new Command()
    .name('init')
    .requiredOption('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.Init
      params.args.source = options.source
    })
}

export async function requireInitCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<InitCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.Init
  params.args.source = process.cwd()
}

export function requireUpdateCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateCommandArgs>
}) {
  return new Command()
    .name('update')
    .requiredOption('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.UpdateDeps
      params.args.source = options.source
    })
}

export async function requireUpdateCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<UpdateCommandArgs>
}) {
  params.currentCommand.value = SubcommandEnum.UpdateDeps
  params.args.source = process.cwd()
}

export function requireRunWebCommand(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<RunWebCommandArgs>
}) {
  return new Command()
    .name('runWeb')
    .requiredOption('--source <sourceDir>', "ts files' dir")
    .action((options) => {
      params.currentCommand.value = SubcommandEnum.RunWeb
      params.args.source = options.source
    })
}

export async function requireRunWebCommandArgs(params: {
  currentCommand: Ref<SubcommandEnum>
  args: Reactive<RunWebCommandArgs>
}) {
  const { source } = await prompts([
    {
      type: 'text',
      name: 'source',
      message: $t('question.subcommand.runWeb.source'),
    },
  ])
  params.currentCommand.value = SubcommandEnum.RunWeb
  params.args.source = source
}
