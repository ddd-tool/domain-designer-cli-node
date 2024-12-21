import log from '@/utils/log'
import { spawnSync } from 'child_process'

export default async function () {
  log.printInfo('================ Print info: Starting... ================')
  spawnSync('echo "print domain-designer info"', { encoding: 'utf-8', stdio: 'inherit', shell: true })
  log.print('')
  // 获取环境变量中的语言设置
  const lang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES || false

  log.print('DEBUG_MODE', process.env.DEBUG_MODE)
  log.print('')
  log.print('lang', log.info(lang))
  log.print('')
  log.print('__dirname', log.info(__dirname))
  log.print('')
  log.print('cwd()', log.info(process.cwd()))
  log.print('')

  log.printSuccess('================ Print info: Succeeded ================')
}
