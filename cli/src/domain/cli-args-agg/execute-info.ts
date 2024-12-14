import { spawnSync } from 'child_process'

export default async function () {
  spawnSync('echo "print domain-designer info"', { encoding: 'utf-8', stdio: 'inherit', shell: true })
  console.log('================ Print info: Starting... ================')
  // 获取环境变量中的语言设置
  const lang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES
  console.log('lang', lang)

  console.log('__dirname', __dirname)
  console.log('cwd()', process.cwd())

  console.log('================ Print info: Succeeded ================')
}
