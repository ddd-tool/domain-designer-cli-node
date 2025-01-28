export type I18nMessages = {
  'signal.scriptStart': string
  'signal.successComplete': string
  'signal.exitWithError': string
  'signal.{str}': string
  'question.subcommand': string
  'question.subcommand.genCode': string
  'question.subcommand.genCode.language': string
  'question.subcommand.genCode.namespace': string
  'question.subcommand.genCode.package': string
  'question.subcommand.genCode.csharp.additions': string
  'question.subcommand.genCode.csharp.additions.timezone': string
  'question.subcommand.genCode.csharp.additions.recordStruct': string
  'question.subcommand.genCode.csharp.additions.primaryConstructor': string
  'question.subcommand.genCode.csharp.additions.commandHandlerInterface': string
  'question.subcommand.genCode.csharp.additions.commandHandlerInterface.hint': string
  'question.subcommand.genCode.csharp.additions.aggInterface': string
  'question.subcommand.genCode.csharp.additions.aggInterface.hint': string
  'question.subcommand.genCode.kotlin.additions': string
  'question.subcommand.genCode.kotlin.additions.commandHandler': string
  'question.subcommand.genCode.kotlin.additions.valueClass': string
  'question.subcommand.genCode.kotlin.additions.timezone': string
  'question.subcommand.genCode.java.additions': string
  'question.subcommand.genCode.java.additions.springFramework': string
  'question.subcommand.genCode.java.additions.lombok': string
  'question.subcommand.genCode.java.additions.lombokBuilder': string
  'question.subcommand.genCode.java.additions.commandHandler': string
  'question.subcommand.genCode.java.additions.recordVakueObject': string
  'question.subcommand.genCode.java.additions.timezone': string
  'question.subcommand.genCode.java.nonNullAnnotation': string
  'question.subcommand.genCode.additions.hint': string
  'question.subcommand.init': string
  'question.subcommand.updateWorkspace': string
  'question.subcommand.runWeb': string
  'question.subcommand.runWeb.source': string
  'question.subcommand.info': string
  'error.userCancel': string
  'error.invalidArgs{str}': string
  'error.badArgs': string
  'error.shouldBeValidDir{dir}': string
  'error.shouldBeEmptyDir{dir}': string
  'error.noPackageManager': string
}

export type I18nMessagesKey = keyof I18nMessages
