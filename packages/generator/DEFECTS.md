# @ddd-tool/domain-designer-generator 设计缺陷分析报告

> 生成时间: 2025-01-18
> 分析范围: `@ddd-tool/domain-designer-generator` 包
> 包版本: 0.2.0-aplha.0

## 核心问题总结

经过代码审查和实际使用分析，该包存在**多个需要改进的设计问题**。

按严重程度排序（从高到低）：

---

## 1. 基于字符串名称的类型推断（P0 - 严重设计缺陷）

**问题位置**: 所有语言插件

### 问题描述

类型推断通过正则表达式匹配字段名称来实现，而非使用显式的类型元数据。

**代码示例** ([generator-java-plugin.ts:66-94](lib/domain-plugin/generator-java-plugin.ts#L66-L94)):

```typescript
function inferJavaTypeByName(imports: Set<string>, obj: DomainDesignObject): string {
  const name = strUtil.stringToLowerSnake(obj._attributes.name).replace(/_/, ' ')
  if (/\b(time|timestamp|date|deadline|expire)\b/.test(name)) {
    if (additions.has(JavaGeneratorAddition.Timezone)) {
      imports.add('java.time.OffsetDateTime')
      return 'OffsetDateTime'
    } else {
      imports.add('java.time.LocalDateTime')
      return 'LocalDateTime'
    }
  } else if (/\b(enum|gender|sex|count|amount|num|number|flag|times)\b/.test(name)) {
    return 'Integer'
  } else if (/\b(price)$/.test(name)) {
    imports.add('java.math.BigDecimal')
    return 'BigDecimal'
  } else if (/^(if|is)\b/.test(name)) {
    return 'Boolean'
  }
  // ... 更多正则模式
  return 'String'  // 默认值
}
```

### 实际影响

1. **脆弱性**: 字段命名变化会破坏类型推断
2. **不一致**: 四种语言插件有相似但不完全相同的模式
3. **限制**: 无法表达自定义类型或复杂的类型映射
4. **未文档化**: 用户必须猜测命名模式才能获得期望的类型
5. **代码重复**: 相同的正则模式在四个语言插件中重复（约 200 行）

### 证据

- Java 插件: 29 行类型推断代码
- Kotlin 插件: 26 行（与 Java 几乎相同）
- Go 插件: 22 行（与 Java 几乎相同）
- C# 插件: 类似模式

### 用户遇到的问题

```typescript
// 用户代码：
d.info('created_at')  // 推断为 String（不在正则匹配中）
d.info('createTime')  // 推断为 LocalDateTime（匹配 time）
d.info('orderPrice')  // 推断为 BigDecimal（匹配 price）
d.info('priceTotal')  // 推断为 String（不匹配 price$）

// 用户无法知道为什么有些字段类型正确，有些不对
```

### 建议改进

```typescript
// 方案 1: 在 DomainDesigner API 中添加显式类型声明
d.info('createdAt').type('datetime')

// 方案 2: 使用类型元数据
d.info('createdAt').meta({
  javaType: 'LocalDateTime',
  kotlinType: 'Instant',
  goType: 'time.Time',
  csharpType: 'DateTime'
})

// 方案 3: 提供类型推断配置
const designer = createDomainDesigner({
  typeMapping: {
    createdAt: { java: 'LocalDateTime', kotlin: 'Instant' },
    amount: { java: 'BigDecimal', kotlin: 'BigDecimal' }
  }
})
```

**优先级**: P0 - 严重影响开发体验和代码生成的可靠性

---

## 2. 大量代码重复（P1 - 高优先级）

**问题位置**: [lib/domain-plugin/](lib/domain-plugin/)

### 问题描述

四个语言插件共享 80% 以上的相同代码，但完全重复实现。

### 证据统计

| 语言插件 | 代码行数 | 重复比例 | 估计重复行数 |
|---------|---------|---------|-------------|
| Java | 889 行 | - | - |
| Kotlin | 410 行 | 46% | ~190 行 |
| C# | 498 行 | 56% | ~280 行 |
| Go | 403 行 | 45% | ~180 行 |
| **总计** | **2200 行** | - | **~650 行重复** |

### 重复的模式

1. **值对象检测逻辑**（四个插件完全相同）:

```typescript
// 在每个插件中都有这段代码：
const ignoredValueObjects = api.states.designer.value
  ._getContext()
  .getDesignerOptions()
  .ignoreValueObjects.map((s) => strUtil.stringToLowerCamel(s))

function isValueObject(info: DomainDesignInfo<DomainDesignInfoType, string>): boolean {
  return !ignoredValueObjects.includes(strUtil.stringToLowerCamel(info._attributes.name))
}
```

2. **类型推断函数**（80% 相似）
3. **导入收集逻辑**（结构完全相同）
4. **代码文件生成**（相同模式，仅语法差异）

### 实际影响

1. **维护负担**: 修复 bug 需要同步修改 4 个文件
2. **不一致风险**: bug 修复可能遗漏某些插件
3. **插件开发门槛**: 添加新语言需要复制 400+ 行代码
4. **代码膨胀**: 2200 行代码中有 650 行是重复的

### 建议改进

```typescript
// 创建基类提取公共逻辑：
abstract class BaseLanguagePlugin<LANG extends Language> {
  protected abstract inferType(imports: Set<string>, obj: DomainDesignObject): string
  protected abstract generateClassDecl(className: string, imports: Set<string>): string[]

  // 共享实现
  protected isValueObject(info: DomainDesignInfo): boolean {
    const ignored = this.getIgnoredValueObjects()
    return !ignored.includes(strUtil.stringToLowerCamel(info._attributes.name))
  }

  protected collectImports(imports: Set<string>, infos: DomainDesignInfo[]): void {
    for (const info of infos) {
      if (this.isValueObject(info)) {
        imports.add(this.getValueObjectImport(info))
      } else {
        this.inferType(imports, info)
      }
    }
  }

  protected abstract getValueObjectImport(info: DomainDesignInfo): string
}

// 每个语言插件只需实现语言特定的细节：
class JavaPlugin extends BaseLanguagePlugin<'java'> {
  protected inferType(imports, obj) {
    // 仅 Java 特定的类型推断（~30 行）
  }

  protected getValueObjectImport(info) {
    return `${this.context.namespace}.${this.context.moduleName}.value.${info.name}`
  }
}
```

**优先级**: P1 - 显著影响可维护性和扩展性

---

## 3. 生成的代码包含 HACK 注释（P1 - 高优先级）

**问题位置**: 所有语言插件（28 处）

### 问题描述

生成的代码包含 `// HACK` 注释，表明实现不完整。

### 证据

```bash
# 搜索结果：
packages/generator/lib/domain-plugin/generator-csharp-plugin.ts:149:    // HACK implement
packages/generator/lib/domain-plugin/generator-csharp-plugin.ts:202:    // HACK implement
packages/generator/lib/domain-plugin/generator-go-plugin.ts:94:    // HACK check value
packages/generator/lib/domain-plugin/generator-java-plugin.ts:114:    // HACK check value
packages/generator/lib/domain-plugin/generator-kotlin-plugin.ts:152:    // HACK Implement
# ... 共 28 处
```

**类型分布**:
- `// HACK check value` (18 处) - 值验证未实现
- `// HACK implement` (7 处) - 方法体为空
- `// HACK need implement` (3 处) - 关键功能缺失

### 实际影响

1. **生成的代码不完整**: 用户必须手动检查并修复所有 HACK
2. **违背工具初衷**: 代码生成应该提高生产力，而不是增加工作量
3. **运行时错误风险**: 如果用户忽略 HACK，可能导致运行时错误

### 示例

```typescript
// 生成的代码（Java Record Value Object）:
public record OrderId(@NonNull Long value) {
    public OrderId {
        // HACK check value  // ❌ 没有实际验证
    }
}

// 用户期望的应该是：
public record OrderId(@NonNull Long value) {
    public OrderId {
        if (value == null || value <= 0) {
            throw new IllegalArgumentException("Invalid OrderId");
        }
    }
}
```

### 建议改进

**方案 1**: 实现完整的验证逻辑
```typescript
code.push(`public ${className} {`)
code.push(`    if (value == null || value <= 0) {`)
code.push(`        throw new IllegalArgumentException("${className} cannot be null or <= 0");`)
code.push(`    }`)
code.push(`}`)
```

**方案 2**: 生成编译错误强制实现
```typescript
code.push(`public ${className} {`)
code.push(`    // TODO: Implement validation for ${className}`)
code.push(`    Objects.requireNonNull(value, "${className} value cannot be null");`)
code.push(`}`)
```

**方案 3**: 提供配置选项
```typescript
interface GeneratorOptions {
  skipValidation?: boolean  // 明确文档化跳过验证
  validationLevel?: 'none' | 'basic' | 'strict'
}
```

**优先级**: P1 - 影响生成代码的可用性

---

## 4. ReadModel 代码生成未实现（P2 - 中优先级）

**问题位置**: [generator-java-plugin.ts:881-884](lib/domain-plugin/generator-java-plugin.ts#L881-L884)

### 问题描述

ReadModel 的代码生成在所有插件中都被注释掉了。

```typescript
// const readModels = api.states.designer.value._getContext().getReadModels()
// for (const readModel of readModels) {
//   const codes = api.commands._genReadModelCode(readModel)
// }
```

### 实际影响

1. **功能不完整**: 用户无法生成查询模型
2. **API 误导**: 类型定义存在但功能不可用
3. **文档缺失**: 没有文档说明此功能不可用

### 相关代码

类型定义存在 ([define.ts:181-183](lib/domain/define.ts#L181-L183)):
```typescript
export type ReadModelCodeProvider = (
  readModel: DomainDesignReadModel<DomainDesignInfoRecord>
) => CodeSnippets<'ReadMode'>[]
```

但 provider 设置为空函数 ([generator-agg.ts:27](lib/domain/generator-agg.ts#L27)):
```typescript
let readModelCodeProvider: ReadModelCodeProvider = () => []
```

### 建议改进

**选择 1**: 实现 ReadModel 生成
```typescript
api.commands._setReadModelCodeProvider((readModel) => {
  // 实现完整的 ReadModel 代码生成
  return [{
    type: 'ReadMode',
    imports: new Set(),
    content: generateReadModelClass(readModel)
  }]
})
```

**选择 2**: 移除相关代码和类型
```typescript
// 从 define.ts 中移除：
// export type ReadModelCodeProvider
// export interface DomainDesignReadModel

// 从 generator-agg.ts 中移除：
// let readModelCodeProvider
// _genReadModelCode
// _setReadModelCodeProvider
```

**选择 3**: 明确文档化当前限制
```typescript
// 在 README 或文档中说明：
// ⚠️ ReadModel 代码生成功能尚未实现
// 目前生成的代码仅包含 Command, Event, Aggregate 等
```

**优先级**: P2 - 功能不完整但可选择性使用

---

## 5. API 导出命名不直观（P2 - 中优先级）

**问题位置**: [lib/index.ts:3](lib/index.ts#L3)

### 问题描述

使用 `define` 作为导出命名空间，与包名 `generator` 不一致，导致 API 使用不直观。

```typescript
export * as define from './domain/define'
```

### 实际影响

用户必须编写冗长的命名空间路径：

```typescript
// 当前使用：
import { define } from '@ddd-tool/domain-designer-generator'
const context: define.java.JavaContext = {}
const addition = define.java.JavaGeneratorAddition.Lombok
const language = define.Language.Java

// 更直观的方式：
import { generator } from '@ddd-tool/domain-designer-generator'
const context: generator.java.JavaContext = {}
const addition = generator.java.JavaGeneratorAddition.Lombok
const language = generator.Language.Java
```

### 证据

从 CLI 代码 ([gen-java.ts:8](../../cli/src/domain/cli-args-agg/cmd-gen-code/gen-java.ts#L8)):
```typescript
const context = {} as define.java.JavaContext  // ❌ 不直观
```

### 建议改进

```typescript
// 方案 1: 重命名以匹配包名
export * as generator from './domain/define'

// 方案 2: 在根级别导出常用类型
export { Language, JavaGeneratorAddition, JavaContext, KotlinContext, ... } from './domain/define'
export namespace java { export * from './domain/define/java' }
export namespace kotlin { export * from './domain/define/kotlin' }

// 方案 3: 保持 define 但添加文档说明
/**
 * 类型定义和枚举
 * @example
 * import { define } from '@ddd-tool/domain-designer-generator'
 * const lang = define.Language.Java
 */
export * as define from './domain/define'
```

**优先级**: P2 - 影响 API 易用性但不影响功能

---

## 6. Context 类型处理不安全（P2 - 中优先级）

**问题位置**: [generator-agg.ts:21](lib/domain/generator-agg.ts#L21)

### 问题描述

Context 使用 `as any` 类型断言初始化，设置时没有验证。

```typescript
const context = ref<GeneratorContext<any>>({} as GeneratorContext<any>)

setContext<LANG extends Language>(ctx: GeneratorContext<LANG>): void {
  context.value = ctx  // 没有验证 required 字段
}
```

### 实际影响

1. **类型安全缺失**: 缺少必需字段时不会在编译时捕获
2. **运行时错误风险**: 访问未定义字段可能导致运行时错误
3. **每个插件各自验证**: 导致不一致

### 证据

从 CLI 代码 ([gen-java.ts:9-118](../../cli/src/domain/cli-args-agg/cmd-gen-code/gen-java.ts#L9-L118)):
```typescript
const context = {} as define.java.JavaContext  // 空对象断言为完整类型
// ... 条件填充字段
context.nonNullAnnotation = nonNullAnnotation!  // 需要非空断言
```

### 建议改进

```typescript
// 定义完整的必需字段
interface JavaContext extends GeneratorContext<Language.Java> {
  nonNullAnnotation: string      // Required
  jdkVersion: '8' | '17' | '21'  // Required
  idGenStrategy?: IdGenStrategy  // Optional
  nullableAnnotation?: string    // Optional
}

// 提供工厂函数确保必需字段
function createJavaContext(partial: Partial<JavaContext>): JavaContext {
  return {
    // 默认值
    nonNullAnnotation: 'org.springframework.lang.NonNull',
    jdkVersion: '17',
    // 用户提供的值
    ...partial  // 类型错误如果必需字段缺失
  }
}

// 使用
const context = createJavaContext({
  namespace: 'com.example',
  additions: new Set([...]),
  moduleName: 'order'
  // nonNullAnnotation 和 jdkVersion 使用默认值
})
```

**优先级**: P2 - 影响类型安全和代码健壮性

---

## 7. 插件热交换机制过度设计（P3 - 低优先级）

**问题位置**: [generator-agg.ts:90](lib/domain/generator-agg.ts#L90)

### 问题描述

使用 `vue-fn/domain-server` 的插件热交换系统，但实际使用场景只需要简单的单语言生成。

### 实际使用模式

从 CLI 代码 ([index.ts:157-170](../../cli/src/domain/cli-args-agg/cmd-gen-code/index.ts#L157-L170)):
```typescript
if (!pluginLoaded) {
  if (args.language === define.Language.Java) {
    GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
  } else if (args.language === define.Language.Kotlin) {
    GeneratorPliginHelper.registerPlugin(GENERATOR_KOTLIN_PLUGIN)
  }
  // ...
  pluginLoaded = true  // 只注册一次，从未卸载
}
```

### 实际影响

1. **不必要的复杂性**: 热交换功能从未被使用
2. **状态管理开销**: `unmount()` 清理状态暗示潜在的内存泄漏
3. **依赖外部框架**: 依赖 `vue-fn/domain-server` 增加复杂度

### 建议

对于 CLI 用法，直接实例化更简单：

```typescript
// 简化方案：
const generator = createJavaGenerator(context)
const codeFiles = generator.generate(designer)

// 而不是：
GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
const agg = useGeneratorAgg(designer)
agg.commands.setContext(context)
const codeFiles = agg.commands.genCodeFiles()
```

**优先级**: P3 - 当前设计可用但可简化

---

## 8. 测试覆盖不足（P3 - 低优先级）

**问题位置**: [lib/__tests__/](lib/__tests__/)

### 问题描述

只有字符串工具函数有测试，核心生成逻辑没有测试。

### 证据

- `common.test.ts`: 40 行 - 测试字符串工具
- `java.test.ts`: 集成测试但不验证生成代码的正确性
- **无单元测试**: 类型推断函数、provider 函数、CodeFile 类

### 实际影响

1. **类型推断 bug**: 只能在生产中发现
2. **重构风险**: 修改代码没有测试保障
3. **代码质量**: 依赖手动测试

### 建议改进

```typescript
// 添加类型推断测试
describe('inferJavaTypeByName', () => {
  it('should infer LocalDateTime for time-related names', () => {
    const imports = new Set<string>()
    const type = inferJavaTypeByName(imports, { name: 'createTime' })
    expect(type).toBe('LocalDateTime')
    expect(imports.has('java.time.LocalDateTime')).toBe(true)
  })

  it('should infer Integer for count-related names', () => {
    const imports = new Set<string>()
    const type = inferJavaTypeByName(imports, { name: 'itemCount' })
    expect(type).toBe('Integer')
  })
})

// 添加 provider 测试
describe('InfoCodeProvider', () => {
  it('should generate valid Record Value Object', () => {
    const info = d.info('OrderId').id('orderId')
    const snippets = provider._genInfoCode(info)
    expect(snippets[0].content).toContain('public record OrderId')
    expect(snippets[0].content).not.toContain('// HACK')
  })
})
```

**优先级**: P3 - 不影响当前功能但影响代码质量

---

## 9. 硬编码的包结构（P3 - 低优先级）

**问题位置**: 所有语言插件

### 问题描述

包结构在代码中硬编码，用户无法自定义。

```typescript
const VALUE_PACKAGE = 'value'
const COMMAND_PACKAGE = 'command'
const EVENT_PACKAGE = 'event'
```

### 实际影响

1. **不可定制**: 生成的代码包结构固定
2. **可能不符合项目约定**: 不同项目有不同的包结构规范
3. **未文档化**: 用户只能在生成后才知道包结构

### 建议

```typescript
interface GeneratorOptions {
  packageStructure?: {
    value?: string    // 默认 'value'
    command?: string  // 默认 'command'
    event?: string    // 默认 'event'
    aggregate?: string
  }
}

// 或者在 JavaContext 中添加：
interface JavaContext extends GeneratorContext<Language.Java> {
  packageNames?: {
    value?: string
    command?: string
    event?: string
  }
}
```

**优先级**: P3 - 当前设计可用但缺乏灵活性

---

## 10. CodeFile 类缺少导入去重保护（P3 - 低优先级）

**问题位置**: [define.ts:41-83](lib/domain/define.ts#L41-L83)

### 问题描述

`CodeFile.addImports()` 内部使用 Set，但没有防止不同代码片段添加相同导入的保护。

```typescript
addImports(imports: string[] | Set<string>) {
  for (const imp of imports) {
    this.imports.add(imp)  // Set 处理去重
  }
}

// 但在插件中：
for (const imp of code.imports) {
  file.appendContentln(`import ${imp};`)  // 写入时没有去重保护
}
```

### 实际影响

虽然 Set 防止内部重复，但没有处理：
1. 同一个导入通过不同代码片段添加
2. 冲突的导入（同一个类来自不同包）

### 建议

```typescript
class CodeFile {
  private imports: Map<string, string> = new Map()  // className -> fullImport

  addImport(fullImport: string) {
    const className = fullImport.split('.').pop()!
    // 检测冲突
    if (this.imports.has(className) && this.imports.get(className) !== fullImport) {
      throw new Error(`Import conflict: ${className} from ${this.imports.get(className)} and ${fullImport}`)
    }
    this.imports.set(className, fullImport)
  }

  getImportStatements(): string[] {
    return Array.from(this.imports.values()).map(imp => `import ${imp};`)
  }
}
```

**优先级**: P3 - 当前实现基本可用

---

## 设计缺陷优先级总结

| 优先级 | 问题 | 影响 | 修复成本 |
|--------|------|------|----------|
| **P0** | 基于字符串的类型推断 | 严重：脆弱、不可靠、未文档化 | 高 |
| **P1** | 大量代码重复 | 高：维护负担、扩展困难 | 中 |
| **P1** | HACK 注释 | 高：生成代码不完整 | 中 |
| **P2** | ReadModel 未实现 | 中：功能不完整 | 中 |
| **P2** | API 导出命名 | 中：API 不直观 | 低 |
| **P2** | Context 类型处理 | 中：类型不安全 | 低 |
| **P3** | 插件热交换过度设计 | 低：不必要的复杂性 | 中 |
| **P3** | 测试覆盖不足 | 低：代码质量 | 中 |
| **P3** | 硬编码包结构 | 低：缺乏灵活性 | 低 |
| **P3** | CodeFile 导入处理 | 低：边界情况 | 低 |

### 优先级说明

- **P0（严重）**: 严重影响开发体验、可靠性或学习成本
- **P1（高）**: 显著影响可维护性或功能完整性
- **P2（中）**: 影响代码组织、类型安全或 API 设计
- **P3（低）**: 影响很小或有缓解方案

---

## 与 core 包的对比

| 项目 | P0 问题 | P1 问题 | P2 问题 | 总体评价 |
|------|---------|---------|---------|----------|
| **core 包** | 0 个 | 0 个 | 1 个（单一职责） | ✅ 设计优秀 |
| **generator 包** | 1 个 | 2 个 | 3 个 | ⚠️ 需要改进 |

**结论**: generator 包的问题比 core 包严重得多，主要原因：

1. **字符串类型推断**是根本性设计缺陷
2. **代码重复**导致维护负担
3. **HACK 注释**表明功能不完整

---

## 建议的修复路线图

### 第一阶段（必须）

1. **修复类型推断**: 添加显式类型声明 API
2. **移除 HACK 注释**: 实现完整的验证或明确文档化
3. **完成或移除 ReadModel**: 不要留下半成品

### 第二阶段（推荐）

4. **重构代码重复**: 提取基类
5. **改进 Context 类型安全**: 添加工厂函数
6. **改进 API 命名**: 更直观的导出

### 第三阶段（可选）

7. **简化插件系统**: 如果不需要热交换
8. **添加测试覆盖**: 核心生成逻辑
9. **支持包结构自定义**: 配置化硬编码值

---

## 附录：关键文件结构

```
packages/generator/lib/
├── index.ts                          # 16 行 - 主入口（API 命名问题）
├── domain/
│   ├── define.ts                     # 184 行 - 类型定义
│   ├── generator-agg.ts              # 102 行 - 生成器聚合（Context 类型安全）
│   └── __tests__/
│       └── common.test.ts            # 40 行 - 只有字符串工具测试
├── domain-plugin/
│   ├── generator-java-plugin.ts      # 889 行 - 类型推断、重复、HACK
│   ├── generator-kotlin-plugin.ts    # 410 行 - 类型推断、重复、HACK
│   ├── generator-csharp-plugin.ts    # 498 行 - 类型推断、重复、HACK
│   └── generator-go-plugin.ts        # 403 行 - 类型推断、重复、HACK
└── common.ts                         # 61 行 - 字符串工具
```

---

## 最终结论

`@ddd-tool/domain-designer-generator` 包存在**显著的设计问题**：

1. **1 个 P0 严重问题**: 字符串类型推断是根本性设计缺陷
2. **2 个 P1 高优先级问题**: 代码重复和 HACK 注释
3. **3 个 P2 中优先级问题**: 功能不完整、API 设计、类型安全
4. **4 个 P3 低优先级问题**: 过度设计、测试覆盖、灵活性

### 与 core 包的区别

- **core 包**: 设计优秀，只有 1 个 P2 级别建议改进
- **generator 包**: 需要重点改进，特别是类型推断和代码重复

### 关键建议

**最优先修复**:
1. 重新设计类型推断机制（使用显式元数据）
2. 消除代码重复（提取基类）
3. 移除所有 HACK 注释

**不推荐的"改进"**:
- 在当前字符串推断基础上修补（根本性缺陷，需要重新设计）
- 完全移除插件系统（虽然过度设计，但当前可用）

---

## 参考资料

- [DDD 领域驱动设计](https://domainlanguage.com/ddd/)
- [TypeScript 最佳实践](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [SOLID 原则](https://en.wikipedia.org/wiki/SOLID)
- [DRY 原则 (Don't Repeat Yourself)](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
