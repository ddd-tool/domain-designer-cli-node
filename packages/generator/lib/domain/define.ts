import {
  DomainDesignInfo,
  DomainDesignInfoType,
  DomainDesignReadModel,
  isDomainDesignAgg,
  isDomainDesignCommand,
  isDomainDesignEvent,
  isDomainDesignFacadeCommand,
  isDomainDesignReadModel,
  type DomainDesignAgg,
  type DomainDesignCommand,
  type DomainDesignEvent,
  type DomainDesignFacadeCommand,
  type DomainDesignInfoRecord,
} from '@ddd-tool/domain-designer-core'

export type DomainNode =
  | DomainDesignCommand<DomainDesignInfoRecord>
  | DomainDesignFacadeCommand<DomainDesignInfoRecord>
  | DomainDesignAgg<DomainDesignInfoRecord>
  | DomainDesignEvent<DomainDesignInfoRecord>
  | DomainDesignReadModel<DomainDesignInfoRecord>

export function isStruct(o: object): o is DomainNode {
  return (
    isDomainDesignCommand(o) ||
    isDomainDesignFacadeCommand(o) ||
    isDomainDesignAgg(o) ||
    isDomainDesignEvent(o) ||
    isDomainDesignReadModel(o)
  )
}

export enum Language {
  Java = 'java',
  Kotlin = 'kotlin',
  CSharp = 'csharp',
  Go = 'go',
}

export class CodeFile {
  private readonly imports: Set<string> = new Set()
  private parentDir: string[]
  private name: string
  private content: string = ''
  constructor(parentDir: string[], name: string) {
    this.parentDir = parentDir
    this.name = name
  }

  addImport(imp: string) {
    this.imports.add(imp)
  }
  addImports(imports: string[] | Set<string>) {
    for (const imp of imports) {
      this.imports.add(imp)
    }
  }
  getImports(): string[] {
    return Array.from(this.imports)
  }
  appendContent(content: string) {
    this.content += content
  }
  appendContentln(content: string) {
    this.content += content + '\n'
  }
  getContent(): string {
    return this.content
  }
  getName(): string {
    return this.name
  }
  setName(name: string) {
    this.name = name
  }
  getParentDir(): string[] {
    return this.parentDir
  }
  setParentDir(parentDir: string[]) {
    this.parentDir = parentDir
  }
}
export interface CodeSnippets<
  TYPE extends
    | 'Info'
    | 'Agg'
    | 'AggImpl'
    | 'Command'
    | 'CommandHandler'
    | 'Event'
    | 'FacadeCommand'
    | 'FacadeCommandHandler'
    | 'ReadMode'
> {
  type: TYPE
  imports: Set<string>
  content: string
}

// ***************************************************************************
// 生成器选项
// ***************************************************************************
export namespace java {
  export enum JavaGeneratorAddition {
    Lombok = 'Lombok',
    LombokBuilder = 'LombokBuilder',
    RecordValueObject = 'RecordValueObject',
    CommandHandler = 'CommandHandler',
    Jpa = 'Jpa',
    Timezone = 'Timezone',
    SpringFramework = 'SpringFramework',
  }
  export enum IdGenStrategy {
    TABLE = 'TABLE',
    SEQUENCE = 'SEQUENCE',
    IDENTITY = 'IDENTITY',
    UUID = 'UUID',
    AUTO = 'AUTO',
  }
  export interface JavaContext extends GeneratorContext<Language.Java> {
    nonNullAnnotation: string
    nullableAnnotation: string
    jdkVersion: '8' | '17' | '21'
    idGenStrategy: IdGenStrategy
  }
}
export namespace kotlin {
  export enum KotlinGeneratorAddition {
    ValueClass = 'ValueClass',
    CommandHandler = 'CommandHandler',
    Timezone = 'Timezone',
  }
  export interface KotlinContext extends GeneratorContext<Language.Kotlin> {}
}
export namespace csharp {
  export enum CSharpGeneratorAddition {
    Timezone = 'Timezone',
    RecordStruct = 'RecordStruct',
    PrimaryConstructor = 'PrimaryConstructor',
    CommandHandlerInterface = 'CommandHandlerInterface',
    AggInterface = 'AggInterface',
  }
  export interface CSharpContext extends GeneratorContext<Language.CSharp> {
    commandHandlerInterface?: string
    aggInterface?: string
  }
}
export namespace go {
  export enum GoGeneratorAddition {
    SinglePackageEachDesigner = 'SinglePackageEachDesigner',
  }
  export interface GoContext extends GeneratorContext<Language.Go> {}
}

export type GeneratorAddition<LANG extends Language> = LANG extends 'java'
  ? java.JavaGeneratorAddition
  : LANG extends 'kotlin'
  ? kotlin.KotlinGeneratorAddition
  : LANG extends 'csharp'
  ? csharp.CSharpGeneratorAddition
  : LANG extends 'go'
  ? go.GoGeneratorAddition
  : never

export interface GeneratorContext<LANG extends Language> {
  namespace: string
  moduleName: string
  additions: Set<GeneratorAddition<LANG>>
}

export type InfoCodeProvider = (info: DomainDesignInfo<DomainDesignInfoType, string>) => CodeSnippets<'Info'>[]
export type CommandCodeProvider = (
  cmd: DomainDesignCommand<DomainDesignInfoRecord>
) => CodeSnippets<'Command' | 'CommandHandler'>[]
export type FacadeCommandCodeProvider = (
  cmd: DomainDesignFacadeCommand<DomainDesignInfoRecord>
) => CodeSnippets<'FacadeCommand' | 'FacadeCommandHandler'>[]
export type AggCodeProvider = (agg: DomainDesignAgg<DomainDesignInfoRecord>) => CodeSnippets<'Agg' | 'AggImpl'>[]
export type EventCodeProvider = (event: DomainDesignEvent<DomainDesignInfoRecord>) => CodeSnippets<'Event'>[]
export type ReadModelCodeProvider = (
  readModel: DomainDesignReadModel<DomainDesignInfoRecord>
) => CodeSnippets<'ReadMode'>[]
