# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Domain Designer CLI** is a Domain-Driven Design (DDD) modeling productivity tool that enables developers to design domains using TypeScript code. The tool generates visualizations (event storming UML, user stories, workflow animations) and can produce code in multiple languages (Java, Kotlin, C#, Go).

Key principles:
- Use TypeScript code for domain modeling with similar expressiveness as visual diagrams
- Leverage TypeScript's type checking for model completeness
- Express "WHY" through workflows and user stories, not just "HOW"
- Code generation is a productivity booster, not a low-code platform

**Important**: Core and generator packages contain `DEFECTS.md` files tracking known issues. Review these when debugging unexpected behavior.

## Package Manager

- **Primary**: pnpm (>= 9)
- **Fallback**: bun is also supported
- Monorepo with pnpm workspaces (`pnpm-workspace.yaml`)

## Critical Build Note

When modifying the `@ddd-tool/domain-designer-core` package's public API (adding/removing exports), you MUST rebuild the core package:

```bash
pnpm --filter @ddd-tool/domain-designer-core build
```

This is required because other packages consume the pre-built `dist/` files (via `package.json` → `module` field), not the source TypeScript files. Without rebuilding, you'll see runtime errors like:

```text
The requested module does not provide an export named 'X'
```

## Common Commands

```bash
# Development
pnpm dev              # Run playground dev server
pnpm dev:ui           # Run UI component dev server

# Build
pnpm build            # Build all packages (syncs versions first)
pnpm verify           # Run package-specific verification scripts (type checking, linting, etc.)

# Testing
pnpm test             # Run all tests
pnpm test:cli         # Run CLI tests only

# Demo (for development/testing)
pnpm demo:run         # Run demo with source
pnpm demo:init        # Initialize demo workspace
pnpm demo:runWeb      # Run web demo
pnpm demo:genCode     # Generate code from demo
pnpm demo:update      # Update demo workspace
pnpm demo:info        # Show demo info
```

## Architecture

### Monorepo Structure

```
packages/
├── cli/              # Command-line interface (bin/domain-designer-cli.cjs)
├── core/             # Core domain designer engine (@ddd-tool/domain-designer-core)
├── generator/        # Code generation utilities (@ddd-tool/domain-designer-generator)
├── ui-component/     # Vue 3 UI components (@ddd-tool/domain-designer-ui-component)
├── web/              # Web visualization server
└── playground/       # Development demo environment
```

### Core Package Architecture

The `@ddd-tool/domain-designer-core` package provides the main API through `createDomainDesigner()`:

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
```

The `DomainDesigner` instance provides methods to create:
- **Aggregates**: `d.agg()` - Domain aggregates with entities and value objects
- **Actors**: `d.actor()` - Users/systems that initiate commands
- **Commands**: `d.command()` - Intent to change state
- **Events**: `d.event()` - Facts that have happened
- **Policies**: `d.policy()` - Business rules
- **Services**: `d.service()` - Domain services
- **Systems**: `d.code()` - External systems
- **Read Models**: `d.readModel()` - Query models
- **Workflows**: `d.startWorkflow()` - Sequences of actor → command → aggregate → event → ...
- **User Stories**: `d.defineUserStory()` - Group workflows by user intent

### Workflow Builder Pattern

The workflow builder uses a fluent chain pattern:
```typescript
const workflow = d.startWorkflow('Workflow Name')
actor.command(Command).agg(Aggregate).event(Event).policy(Policy).service(Service)
```

### Generator Architecture

The `@ddd-tool/domain-designer-generator` package provides:
- `useGeneratorAgg()` - Hook for aggregate generation
- `GeneratorPliginHelper` - Utility class for generators
- Language plugins: `GENERATOR_JAVA_PLUGIN`, `GENERATOR_KOTLIN_PLUGIN`, `GENERATOR_GO_PLUGIN`, `GENERATOR_CSHARP_PLUGIN`

Each plugin implements code generation for a specific target language.

## Workspace Data Sources

**Critical Rule**: Only TypeScript files in the workspace root that **default export a DomainDesigner instance** are recognized as "data sources":

```typescript
// Valid data source file (e.g., my-model.ts)
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
// ... define model
export default d  // <-- Required
```

Multiple data source files are recognized as switchable data sources in the web UI.

## TypeScript Configuration

- **Strict mode**: Enabled
- **Module resolution**: Bundler
- **Target**: ESNext
- Composite builds: Each package has its own `tsconfig.*.json`

## TypeScript Patterns

### Discriminated Unions for Mutually Exclusive Parameters

The codebase uses discriminated unions to enforce mutually exclusive parameters at compile time:

```typescript
export type FilterMode =
  | { mode: 'story'; currentStory: string }
  | { mode: 'workflows'; customWorkflowNames: string[] }

export function* nomnomlCodeGenerator(params: {
  design: DomainDesigner
  filter: FilterMode  // Exactly one mode must be provided
  linkReadModel: boolean
  linkSystem: boolean
}) {
  if (params.filter.mode === 'story') {
    // currentStory is available
  } else if (params.filter.mode === 'workflows') {
    // customWorkflowNames is available
  } else {
    isNever(params.filter)  // Exhaustive check
    throw new Error('filter mode error')
  }
}
```

This pattern prevents API misuse by making invalid states unrepresentable.

### Global Type Helpers

The project defines global utility types in each package's `globals.d.ts`:

- `isNever(...args: never[])` - Helper for exhaustive type checking in discriminated unions
- `Enum<T>` - Extracts union type values from an object (e.g., `Enum<typeof DomainDesignRule>`)

## Testing

- **Framework**: Vitest with globals enabled
- **Test location**: `**/__tests__/*.test.ts`
- **Coverage**: `@vitest/coverage-v8`
- Run single test: `vitest run <test-file>`

## CLI Architecture

The CLI (`packages/cli`) uses Commander.js and provides commands:
- `init` - Initialize a new workspace
- `runWeb` - Launch web visualization server
- `genCode` - Generate code from model
- `update` - Update workspace files
- `run` - Execute with source
- `info` - Show workspace information

## UI Components

Built with Vue 3 + PrimeVue:
- Event storming UML visualization
- User story display
- Workflow animations
- Completeness analysis
- Custom workflow filtering via `customWorkflowNames` state (for non-story-based filtering)

## Design Philosophy

1. **Low learning cost**: Users must be able to understand the tool in minutes
2. **Unidirectional workflow**: Design first, then implementation. Never let implementation details affect domain design
3. **Code generation as boilerplate reduction**: The goal is to save time on initial implementation, not to create a low-code platform

## File Naming Conventions

- Package names use `@ddd-tool/` scope
- CLI binary: `domain-designer-cli.cjs`
- Test files: `*.test.ts` in `__tests__` directories
- Type definitions: `*.d.ts`

## Build Process

1. `pnpm syncver` - Synchronize versions across packages (zx script)
2. `pnpm -r build` - Build all packages in order
3. Each package may have its own build script (e.g., `build:cli` uses zx)

## Version Management

- Version synchronization via `scripts/sync-version.mjs`
- All packages share version: `0.2.0-aplha.0` (note: typo in "aplha" is intentional)

## Templates Directory

Contains example models for reference:
- `simple-example.ts` - Basic order processing domain
- `complex-example.ts` - More elaborate domain model
- `node_modules/` - Type definitions only (no implementations)
