import { useCliArgsAgg } from '@/domain/cli-args-agg'
import { useI18nAgg } from '@/domain/i18n-agg'
import { onCancel } from '@/utils/signal'
import packageInfo from '@/utils/package-info'
import log from '@/utils/log'

const $t = useI18nAgg().commands.t

log.printInfo($t('signal.scriptStart'))

const cliArgsAgg = useCliArgsAgg()

start()
  .then(() => {
    log.printSuccess($t('signal.successComplete'))
  })
  .catch((e: any) => {
    log.printError(e.message)
    log.printError($t('signal.exitWithError'))
  })

process.on('SIGINT', onCancel)

async function start() {
  log.print(
    `Repo Addr:`,
    log.info(packageInfo.repository.url.replace(/git\+/g, '')),
  )
  log.print('')
  log.print(`Script Version:`, log.info(packageInfo.version))
  log.print('')
  log.printDebug('argv:', process.argv)
  log.print('')

  await cliArgsAgg.commands.init()

  await cliArgsAgg.commands.exec()
}
