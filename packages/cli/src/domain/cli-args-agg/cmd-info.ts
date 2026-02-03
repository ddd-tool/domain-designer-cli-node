import log from '@/utils/log'
import { spawnSync } from 'child_process'
import { Subcommand } from './types'
import { Command } from 'commander'
import { Ref } from '@vue/reactivity'
import { useEnvironmentAgg } from '../environment-agg'

const environmentAgg = useEnvironmentAgg()

export function requireInfoCommand(params: { currentCommand: Ref<Subcommand> }) {
  return new Command()
    .name('info')
    .action(() => {
      params.currentCommand.value = Subcommand.Info
    })
    .addHelpText('before', 'Print info.\n')
    .addHelpText('before', '打印信息\n')
}

export async function requireInfoCommandArgs(params: { currentCommand: Ref<Subcommand> }) {
  params.currentCommand.value = Subcommand.Info
}

export async function execute() {
  log.printInfo('================ Print info: Starting... ================')
  spawnSync('echo "print domain-designer info"', {
    encoding: 'utf-8',
    stdio: 'inherit',
    shell: true,
  })
  log.print('')
  log.print(log.info('DEBUG_MODE:'), environmentAgg.states.debugMode.value)
  log.print('')
  log.print(log.info('lang:'), environmentAgg.states.osLanguage.value)
  log.print('')
  log.print(log.info('__dirname:'), __dirname)
  log.print('')
  log.print(log.info('cwd():'), process.cwd())
  log.print('')
  log.print(log.info('PACKAGE_MANAGER:'), environmentAgg.states.packageManager.value)
  log.print('')
  log.print(log.info('webRoot:'), environmentAgg.states.webRoot.value)
  log.print('')

  log.printSuccess('================ Print info: Succeeded ================')
}
