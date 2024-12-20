import { useCliArgsAgg } from '@/domain/cli-args-agg'
import { useI18nAgg } from '@/domain/i18n-agg'
import { onCancel } from '@/utils/business'
import packageInfo from '@/utils/package-info'

const $t = useI18nAgg().commands.t

console.info($t('signal.scriptStart'))

const cliArgsAgg = useCliArgsAgg()

start()
  .then(() => {
    console.info($t('signal.successComplete'))
  })
  .catch((e: Error) => {
    console.error(e)
    console.error($t('signal.exitWithError'))
  })

process.on('SIGINT', onCancel)

async function start() {
  console.log(`Repo Addr: ${packageInfo.repository.url.replace(/git\+/g, '')}`)
  console.log('')
  console.log(`Script Version: ${packageInfo.version}`)
  console.log('')

  await cliArgsAgg.commands.init()
  cliArgsAgg.commands.exec()
}
