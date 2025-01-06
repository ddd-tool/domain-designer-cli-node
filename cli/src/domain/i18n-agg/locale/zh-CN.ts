import { I18nMessages } from '../messages'

const zhDict: I18nMessages = {
  'signal.{str}': '错误: {str}',
  'signal.scriptStart': '===== 脚本开始执行 =====',
  'signal.successComplete': '===== 脚本执行成功 =====',
  'signal.exitWithError': '===== 脚本异常退出 =====',
  'question.subcommand': '请选择要执行的业务类型',
  'question.subcommand.genCode': '生成代码',
  'question.subcommand.genCode.language': '选择你的编程语言',
  'question.subcommand.genCode.package': '输入领域模块的package名称',
  'question.subcommand.genCode.namespace': '输入领域模块的namespace名称',
  'question.subcommand.genCode.additions': '选择附加选项',
  'question.subcommand.init': '初始化项目',
  'question.subcommand.updateWorkspace': '更新依赖',
  'question.subcommand.runWeb': '运行 Web 服务',
  'question.subcommand.runWeb.source': '请输入ts文件目录',
  'question.subcommand.info': '【测试】',
  'error.userCancel': '用户终止了脚本执行',
  'error.invalidArgs{str}': '无效的参数: {str}',
  'error.badArgs': '错误的参数',
  'error.shouldBeValidDir{dir}': '{dir} 应该是一个有效的目录',
  'error.shouldBeEmptyDir{dir}': '{dir} 应该是一个空目录',
  'error.noPackageManager': '未找到包管理器,请安装 bun 或 pnpm',
}

export default zhDict
