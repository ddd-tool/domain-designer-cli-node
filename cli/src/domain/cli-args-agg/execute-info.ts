import log from '@/utils/log'
import { spawnSync } from 'child_process'

export default async function () {
  log.printInfo('================ Print info: Starting... ================')
  spawnSync('echo "print domain-designer info"', { encoding: 'utf-8', stdio: 'inherit', shell: true })
  log.print('')
  // 获取环境变量中的语言设置
  const lang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES || false

  log.print(log.info('DEBUG_MODE:'), process.env.DEBUG_MODE)
  log.print('')
  log.print(log.info('lang:'), lang)
  log.print('')
  log.print(log.info('__dirname:'), __dirname)
  log.print('')
  log.print(log.info('cwd():'), process.cwd())
  log.print('')
  log.print(log.info('PACKAGE_MANAGER:'), process.env.PACKAGE_MANAGER)
  log.print('')

  log.printSuccess('================ Print info: Succeeded ================')
}
