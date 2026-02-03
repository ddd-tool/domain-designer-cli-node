import { I18nMessages } from '../messages'

const enDict: I18nMessages = {
  'signal.{str}': 'Error: {str}',
  'signal.scriptStart': '===== Script start =====',
  'signal.successComplete': '===== Program execution succeeded =====',
  'signal.exitWithError': '===== Exit with error =====',
  'question.subcommand': 'Select the business type',
  'question.subcommand.genCode': 'Generate code',
  'question.subcommand.genCode.language': 'Select your programming language',
  'question.subcommand.genCode.namespace': 'Input your domain namespace',
  'question.subcommand.genCode.package': 'Input your domain package',
  'question.subcommand.genCode.csharp.additions': 'Select additional options',
  'question.subcommand.genCode.csharp.additions.timezone':
    'Use [DateTimeOffset] to represent time',
  'question.subcommand.genCode.csharp.additions.recordStruct':
    'Use record+struct value object',
  'question.subcommand.genCode.csharp.additions.primaryConstructor':
    'Use primary constructor',
  'question.subcommand.genCode.csharp.additions.commandHandlerInterface':
    'Implement custom CommandHandler interface',
  'question.subcommand.genCode.csharp.additions.commandHandlerInterface.hint':
    'Please enter the custom CommandHandler interface name',
  'question.subcommand.genCode.csharp.additions.aggInterface':
    'Implement custom Agg interface',
  'question.subcommand.genCode.csharp.additions.aggInterface.hint':
    'Please enter the custom Agg interface name',
  'question.subcommand.genCode.kotlin.additions': 'Select additional options',
  'question.subcommand.genCode.kotlin.additions.commandHandler':
    'Generate CommandHandler for each command',
  'question.subcommand.genCode.kotlin.additions.valueClass':
    'Use value class (Kotlin1.5+)',
  'question.subcommand.genCode.kotlin.additions.timezone':
    'Use [OffsetDateTime] to represent time',
  'question.subcommand.genCode.java.additions': 'Select additional options',
  'question.subcommand.genCode.java.additions.springFramework':
    'Use spring container for development',
  'question.subcommand.genCode.java.additions.jpa': 'Use jpa for persistence',
  'question.subcommand.genCode.java.additions.lombok':
    'Use [@Getter, @RequiredArgsConstructor...] of lombok',
  'question.subcommand.genCode.java.additions.lombokBuilder':
    'Use [@Builder] of lombok to avoid long parameter lists',
  'question.subcommand.genCode.java.additions.commandHandler':
    'Generate CommandHandler for each command',
  'question.subcommand.genCode.java.additions.recordValueObject':
    'Use [java record] to generate value object (JDK16+)',
  'question.subcommand.genCode.java.additions.timezone':
    'Use [OffsetDateTime] to represent time',
  'question.subcommand.genCode.java.nonNullAnnotation':
    'Select non-null annotation',
  'question.subcommand.genCode.java.idGenStrategy':
    'Select ID generation strategy',
  'question.subcommand.genCode.additions.hint':
    '- Space to select. Return to submit',
  'question.subcommand.init': 'Initialize project',
  'question.subcommand.updateWorkspace': 'Update Workspace',
  'question.subcommand.runWeb': 'Run Web server',
  'question.subcommand.runWeb.source': 'Please enter the ts file directory',
  'question.subcommand.info': '[ test ]',
  'error.userCancel': 'User canceled',
  'error.invalidArgs{str}': 'Invalid args: {str}',
  'error.badArgs': 'Bad args',
  'error.shouldBeValidDir{dir}': '{dir} should be a valid directory',
  'error.shouldBeValidWorkspaceOrEmptyDir{dir}':
    '{dir} should be a valid workspace or an empty directory',
  'error.shouldBeEmptyDir{dir}': '{dir} should be an empty directory',
  'error.noPackageManager':
    'No package manager found, please install bun or pnpm',
  'warning.needUpdate{workspaceVer}{scriptVer}':
    'Script version not compared.\nCurrent workspace version: {workspaceVer}\nCurrent script version:    {scriptVer}\nIf you want to use the local script version, please execute the update command in the workspace',
}

export default enDict
