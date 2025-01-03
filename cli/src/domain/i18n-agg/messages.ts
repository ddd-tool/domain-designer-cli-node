export type I18nMessages = {
  'signal.scriptStart': string
  'signal.successComplete': string
  'signal.exitWithError': string
  'signal.{str}': string
  'question.subcommand': string
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
