import { I18nMessages } from '../messages'

const zhDict: I18nMessages = {
  'signal.{str}': '错误: {str}',
  'signal.scriptStart': '===== 脚本开始执行 =====',
  'signal.successComplete': '===== 脚本执行成功 =====',
  'signal.exitWithError': '===== 脚本异常退出 =====',
  'question.subcommand': '请选择要执行的业务类型',
  'question.subcommand.genCode': '生成代码',
  'question.subcommand.genCode.language': '选择你的编程语言',
  'question.subcommand.genCode.namespace': '输入领域模块的namespace名称',
  'question.subcommand.genCode.package': '输入领域模块的package名称',
  'question.subcommand.genCode.csharp.additions': '选择附加选项',
  'question.subcommand.genCode.csharp.additions.timezone': '使用包含时区的DateTimeOffset表示时间',
  'question.subcommand.genCode.csharp.additions.recordStruct': '使用record+struct值对象',
  'question.subcommand.genCode.csharp.additions.primaryConstructor': '使用主构造函数',
  'question.subcommand.genCode.csharp.additions.commandHandlerInterface': '实现自定义的CommandHandler接口',
  'question.subcommand.genCode.csharp.additions.commandHandlerInterface.hint':
    '请输入要实现的自定义CommandHandler接口名称',
  'question.subcommand.genCode.csharp.additions.aggInterface': '实现自定义的Agg接口',
  'question.subcommand.genCode.csharp.additions.aggInterface.hint': '请输入要实现的自定义Agg接口名称',
  'question.subcommand.genCode.kotlin.additions': '选择附加选项',
  'question.subcommand.genCode.kotlin.additions.commandHandler': '为每个命令生成CommandHandler',
  'question.subcommand.genCode.kotlin.additions.valueClass': '使用值类（Kotlin1.5+）',
  'question.subcommand.genCode.kotlin.additions.timezone': '使用带时区的OffsetDateTime表示时间',
  'question.subcommand.genCode.java.additions': '选择附加选项',
  'question.subcommand.genCode.java.additions.springFramework': '使用spring容器进行开发',
  'question.subcommand.genCode.java.additions.jpa': '使用jpa进行持久化',
  'question.subcommand.genCode.java.additions.lombok': '使用lombok常用的Getter等注解',
  'question.subcommand.genCode.java.additions.lombokBuilder': '使用lombok的Builder注解避免长参数列表',
  'question.subcommand.genCode.java.additions.commandHandler': '为每个命令生成CommandHandler',
  'question.subcommand.genCode.java.additions.recordValueObject': '使用record类生成值对象（JDK16+）',
  'question.subcommand.genCode.java.additions.timezone': '使用带时区的OffsetDateTime表示时间',
  'question.subcommand.genCode.java.nonNullAnnotation': '选择非空注解',
  'question.subcommand.genCode.java.idGenStrategy': '选择ID生成策略',
  'question.subcommand.genCode.additions.hint': '- 空格勾选，回车提交',
  'question.subcommand.init': '初始化项目',
  'question.subcommand.updateWorkspace': '更新依赖',
  'question.subcommand.runWeb': '运行 Web 服务',
  'question.subcommand.runWeb.source': '请输入ts文件目录',
  'question.subcommand.info': '【测试】',
  'error.userCancel': '用户终止了脚本执行',
  'error.invalidArgs{str}': '无效的参数: {str}',
  'error.badArgs': '错误的参数',
  'error.shouldBeValidDir{dir}': '{dir} 应该是一个有效的目录',
  'error.shouldBeValidWorkspaceOrEmptyDir{dir}': '{dir} 应该是 一个空目录 或者 一个有效的工作区',
  'error.shouldBeEmptyDir{dir}': '{dir} 应该是一个空目录',
  'error.noPackageManager': '未找到包管理器,请安装 bun 或 pnpm',
  'warning.needUpdate{workspaceVer}{scriptVer}':
    '检测到工作目录版本与脚手架版本不匹配\n当前工作目录版本： {workspaceVer}\n脚手架版本：       {scriptVer}\n如果要以本地脚手架版本为准，请执行在工作目录执行update命令进行更新',
}

export default zhDict
