import { spawnSync } from 'child_process'

export default async function () {
  console.log('================ Print info: Starting... ================')
  spawnSync('echo "print domain-designer info"', { encoding: 'utf-8', stdio: 'inherit', shell: true })
  console.log('')
  // 获取环境变量中的语言设置
  const lang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES

  console.log('DEBUG_MODE', process.env.DEBUG_MODE)
  console.log('')
  console.log('lang', lang)
  console.log('')
  console.log('__dirname', __dirname)
  console.log('')
  console.log('cwd()', process.cwd())
  console.log('')

  console.log('================ Print info: Succeeded ================')
}
