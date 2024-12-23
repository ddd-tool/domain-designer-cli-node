import { I18nMessages } from '../messages'

const enDict: I18nMessages = {
  'signal.{str}': 'Error: {str}',
  'signal.scriptStart': '===== Script start =====',
  'signal.successComplete': '===== Program execution succeeded =====',
  'signal.exitWithError': '===== Exit with error =====',
  'question.subcommand': 'Select the business type',
  'question.subcommand.init': 'Initialize project',
  'question.subcommand.updateWorkspace': 'Update Workspace',
  'question.subcommand.runWeb': 'Run Web server',
  'question.subcommand.runWeb.source': 'Please enter the ts file directory',
  'question.subcommand.info': '[ test ]',
  'error.userCancel': 'User canceled',
  'error.invalidArgs{str}': 'Invalid args: {str}',
  'error.badArgs': 'Bad args',
  'error.shouldBeValidDir{dir}': '{dir} should be a valid directory',
  'error.shouldBeEmptyDir{dir}': '{dir} should be an empty directory',
  'error.noPackageManager': 'No package manager found, please install bun or pnpm',
}

export default enDict
