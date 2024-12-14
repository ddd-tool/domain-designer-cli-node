import { I18nMessages } from '../messages'

const enDict: I18nMessages = {
  'signal.{str}': 'Error: {str}',
  'signal.scriptStart': '===== Script start =====',
  'signal.successComplete': '===== Program execution succeeded =====',
  'signal.exitWithError': '===== Exit with error =====',
  'question.subcommand': 'Select the business type',
  'question.subcommand.init': 'Initialize project',
  'question.subcommand.updateDeps': 'Update dependencies',
  'question.subcommand.runWeb': 'Run Web server',
  'question.subcommand.runWeb.source': 'Please enter the ts file directory',
  'question.subcommand.hello': '[ test ]',
  'error.userCancel': 'User canceled',
  'error.invalidArgs{str}': 'Invalid args: {str}',
  'error.badArgs': 'Bad args',
  'error.shouldBeValidDir{dir}': '{dir} should be a valid directory',
}

export default enDict
