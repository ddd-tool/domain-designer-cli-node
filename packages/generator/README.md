# @ddd-tool/domain-designer-generator

> Code generation utilities for Domain-Driven Design models

**@ddd-tool/domain-designer-generator** provides code generation capabilities for domain models created with `@ddd-tool/domain-designer-core`. Generate boilerplate code in multiple programming languages to jumpstart your DDD implementation.

## Features

- **Multi-Language Support**: Generate code for Java, Kotlin, C#, and Go
- **Extensible Plugin System**: Create custom generators for your target language
- **Type-Safe Generation**: Leverages TypeScript types from your domain model
- **Configurable Output**: Customize namespaces, packages, and code style
- **Language-Specific Features**: Support for Lombok, Spring Framework, JPA, and more

## Installation

```bash
npm install @ddd-tool/domain-designer-generator
```

```bash
pnpm add @ddd-tool/domain-designer-generator
```

```bash
bun add @ddd-tool/domain-designer-generator
```

### Peer Dependencies

This package requires **@vue/reactivity**:

```bash
npm install @vue/reactivity@3.5.27
```

## Quick Start

```typescript
import { useGeneratorAgg, GeneratorPliginHelper, GENERATOR_JAVA_PLUGIN } from '@ddd-tool/domain-designer-generator'
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
import { java } from '@ddd-tool/domain-designer-generator/types'

// Create your domain model
const d = createDomainDesigner()
const i = d.info

const orderId = i.id('OrderId')
const userId = i.valueObj('UserId')
const createOrder = d.command('CreateOrder', [orderId, userId])
const order = d.agg('Order', [orderId, userId])

// Setup generator
const agg = useGeneratorAgg(d)
GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)

// Configure generation context
const context: java.JavaContext = {
  namespace: 'com.example.order',
  moduleName: 'order',
  additions: new Set([java.JavaGeneratorAddition.CommandHandler]),
  nonNullAnnotation: 'org.springframework.lang.NonNull',
  nullableAnnotation: 'org.springframework.lang.Nullable',
  idGenStrategy: java.IdGenStrategy.SEQUENCE,
  jdkVersion: '17',
}

agg.commands.setContext(context)

// Generate code files
const files = agg.commands.genCodeFiles()

// Output files
for (const file of files) {
  console.log(`${file.getParentDir().join('/')}/${file.getName()}`)
  console.log(file.getContent())
}
```

## Supported Languages

| Language | Plugin | Status |
| :--- | :--- | :--- |
| **Java** | `GENERATOR_JAVA_PLUGIN` | ✅ Full Support |
| **Kotlin** | `GENERATOR_KOTLIN_PLUGIN` | ✅ Full Support |
| **C#** | `GENERATOR_CSHARP_PLUGIN` | ✅ Full Support |
| **Go** | `GENERATOR_GO_PLUGIN` | ✅ Full Support |

## Language-Specific Features

### Java

**Generator Additions:**

- `Lombok` - Add Lombok annotations for getters/setters
- `LombokBuilder` - Add @Builder annotation
- `RecordValueObject` - Use Java records for value objects
- `CommandHandler` - Generate command handler interfaces
- `Jpa` - Add JPA annotations for aggregates
- `Timezone` - Add timezone support for date/time fields
- `SpringFramework` - Spring Framework integration

**ID Generation Strategies:**

- `TABLE` - Table-based ID generation
- `SEQUENCE` - Database sequence
- `IDENTITY` - Auto-increment identity
- `UUID` - UUID identifiers
- `AUTO` - JPA provider chooses strategy

**Context:**

```typescript
const context: java.JavaContext = {
  namespace: 'com.example.domain',
  moduleName: 'order',
  additions: new Set([
    java.JavaGeneratorAddition.Lombok,
    java.JavaGeneratorAddition.CommandHandler,
    java.JavaGeneratorAddition.Jpa,
  ]),
  nonNullAnnotation: 'org.springframework.lang.NonNull',
  nullableAnnotation: 'org.springframework.lang.Nullable',
  idGenStrategy: java.IdGenStrategy.SEQUENCE,
  jdkVersion: '17', // '8' | '17' | '21'
}
```

### Kotlin

**Generator Additions:**

- `ValueClass` - Use Kotlin value classes for value objects
- `CommandHandler` - Generate command handler interfaces
- `Timezone` - Add timezone support for date/time fields

**Context:**

```typescript
const context: kotlin.KotlinContext = {
  namespace: 'com.example.domain',
  moduleName: 'order',
  additions: new Set([
    kotlin.KotlinGeneratorAddition.ValueClass,
    kotlin.KotlinGeneratorAddition.CommandHandler,
  ]),
}
```

### C&#35;

**Generator Additions:**

- `Timezone` - Add timezone support for date/time fields
- `RecordStruct` - Use record structs for value objects
- `PrimaryConstructor` - Use primary constructors
- `CommandHandlerInterface` - Generate command handler interfaces
- `AggInterface` - Generate aggregate interfaces

**Context:**

```typescript
const context: csharp.CSharpContext = {
  namespace: 'Example.Domain',
  moduleName: 'Order',
  additions: new Set([
    csharp.CSharpGeneratorAddition.RecordStruct,
    csharp.CSharpGeneratorAddition.PrimaryConstructor,
  ]),
  commandHandlerInterface: 'ICommandHandler',
  aggInterface: 'IAggregate',
}
```

### Go

**Generator Additions:**

- `SinglePackageEachDesigner` - Create a single package per designer

**Context:**

```typescript
const context: go.GoContext = {
  namespace: 'github.com/example/domain',
  moduleName: 'order',
  additions: new Set([
    go.GoGeneratorAddition.SinglePackageEachDesigner,
  ]),
}
```

## API Reference

### `useGeneratorAgg(designer: DomainDesigner)`

Creates a generator aggregate for the given domain designer.

```typescript
const agg = useGeneratorAgg(domainDesigner)
```

### `GeneratorPliginHelper`

Helper class for managing generator plugins.

**Methods:**

| Method | Description |
| :--- | :--- |
| `registerPlugin(plugin)` | Register a generator plugin |
| `unregisterPlugin(plugin)` | Unregister a generator plugin |

**Example:**

```typescript
import { GENERATOR_JAVA_PLUGIN, GENERATOR_KOTLIN_PLUGIN } from '@ddd-tool/domain-designer-generator'

GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
GeneratorPliginHelper.registerPlugin(GENERATOR_KOTLIN_PLUGIN)
```

### Generator Aggregate Commands

| Command | Description |
| :--- | :--- |
| `setContext(context)` | Set the generation context |
| `genCodeFiles()` | Generate all code files |
| `setDomainDesigner(designer)` | Update the domain designer |
| `clearCaches()` | Clear generation caches |

### `CodeFile`

Represents a generated code file.

**Methods:**

| Method | Description |
| :--- | :--- |
| `getName()` | Get the file name |
| `getParentDir()` | Get the parent directory path as array |
| `getContent()` | Get the file content |
| `getImports()` | Get all imports |
| `setName(name)` | Set the file name |
| `setParentDir(dir)` | Set the parent directory |
| `appendContent(content)` | Append content to the file |
| `addImport(imp)` | Add an import statement |

## Generated Code Structure

For a typical domain model, the generator creates:

```text
<namespace>/
└── <moduleName>/
    ├── value/           # Value objects and IDs
    ├── command/         # Commands and command handlers
    ├── event/           # Domain events
    └── aggregate/       # Aggregates and implementations
```

**Example (Java):**

```text
com/
└── example/
    └── order/
        ├── value/
        │   ├── OrderId.java
        │   └── UserId.java
        ├── command/
        │   ├── CreateOrderCommand.java
        │   └── CreateOrderCommandHandler.java
        ├── event/
        │   └── OrderCreatedEvent.java
        └── aggregate/
            ├── OrderAgg.java
            └── OrderAggImpl.java
```

## Creating Custom Plugins

You can create custom generator plugins for your specific needs:

```typescript
import { GeneratorPliginHelper, type CodeSnippets } from '@ddd-tool/domain-designer-generator'

const customPlugin = GeneratorPliginHelper.createHotSwapPlugin(() => {
  return {
    mount({ api }) {
      // Setup code providers
      api.commands._setInfoCodeProvider((info) => {
        return [{
          type: 'Info',
          imports: new Set(),
          content: `// Custom info code for ${info._attributes.name}`,
        }]
      })
      // ... setup other providers
    },
    unmount({ api }) {
      // Cleanup
      api.commands.clearCaches()
    },
  }
})

GeneratorPliginHelper.registerPlugin(customPlugin)
```

## License

ISC

## Repository

[https://github.com/ddd-tool/domain-designer-core-ts](https://github.com/ddd-tool/domain-designer-core-ts)

## Related Packages

- [@ddd-tool/domain-designer-core](https://www.npmjs.com/package/@ddd-tool/domain-designer-core) - Core domain modeling library
- [@ddd-tool/domain-designer-ui-component](https://www.npmjs.com/package/@ddd-tool/domain-designer-ui-component) - Vue 3 UI components
