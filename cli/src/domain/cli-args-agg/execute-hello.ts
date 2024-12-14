import ChildProcess from 'child_process'

export default async function () {
  // 获取环境变量中的语言设置
  const lang = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES
  console.log('lang', lang)

  console.log('__dirname', __dirname)
  console.log('cwd()', process.cwd())

  const c = ChildProcess.execSync('pnpm hello')
  console.log(c.toString())
}
