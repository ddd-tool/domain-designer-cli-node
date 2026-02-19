# Domain Designer CLI

> A Domain-Driven Design (DDD) modeling productivity tool using TypeScript code

**Domain Designer CLI** enables developers to design domains using TypeScript code with expressiveness similar to visual diagrams. Leverage TypeScript's type checking to ensure model completeness and catch design errors early.

## Design Philosophy

- **Code as Diagram**: Achieve expressiveness comparable to visual diagrams through TypeScript code
- **Type-Safe Completeness**: Use TypeScript's type checking to ensure model completeness
- **Express WHY, Not Just HOW**: Explore expressing business intent through workflows and user stories, not just implementation details like traditional design diagrams

## Prerequisites

- **Node.js** ^20.19.0 || >=22.12.0 ([Download](https://nodejs.org/en/download/))
- **Optional**: [bun](https://bun.sh/) OR [pnpm](https://pnpm.io/) >= 9

The CLI will prioritize using `bun`, falling back to `pnpm`, then `npm` if available.

## Installation

### Install CLI Globally

```bash
bun i @ddd-tool/domain-designer-cli -g
# or
pnpm i @ddd-tool/domain-designer-cli -g
```

### Update CLI

```bash
bun i @ddd-tool/domain-designer-cli@latest -g
# or
pnpm i @ddd-tool/domain-designer-cli@latest -g
```

## Quick Start

### 1. Initialize a Workspace

Create an empty directory and run:

```bash
bunx domain-designer-cli init
# or
domain-designer-cli init
```

For **Linux / macOS** users, additionally run:

```bash
chmod +x *.sh
```

This creates a workspace with:

- **TypeScript definitions** in `node_modules` for IDE autocomplete (no implementations included)
- **Example TS files** demonstrating how to model with TypeScript
- **RunWeb script** for real-time visualization
- **GenCode script** for code generation

### 2. Design Your Domain

Create TypeScript files in the workspace root. Only files that **default export a `DomainDesigner` instance** are recognized as data sources:

```typescript
// my-model.ts
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
const i = d.info

// Define value objects and IDs
const orderId = i.id('OrderId')
const userId = i.valueObj('UserId')

// Define domain elements
const createOrder = d.command('CreateOrder', [orderId, userId])
const order = d.agg('Order', [orderId, userId])
const orderCreated = d.event('OrderCreated', [orderId])
const customer = d.actor('Customer')

// Build workflows
const workflow = d.startWorkflow('Place Order')
customer.command(createOrder).agg(order).event(orderCreated)

// Define user stories
d.defineUserStory('As a customer, I want to place an order', [workflow])

// Required: default export
export default d
```

**Important**: Multiple data source files are recognized as switchable designs in the web UI.

### 3. Visualize with Web UI

Run the generated `RunWeb` script to launch the visualization server:

```bash
./RunWeb.sh    # Linux/macOS
RunWeb.bat     # Windows
```

The web UI provides:

- **Interactive UML diagrams** with drag, zoom, and pan
- **Workflow animations** to understand business flow
- **User story explorer** for organizing workflows
- **Node details panel** for inspecting domain elements
- **Multi-design support** for switching between models
- **Export to SVG** for documentation

### 4. Generate Code

Run the generated `GenCode` script to generate boilerplate code:

```bash
./GenCode.sh    # Linux/macOS
GenCode.bat     # Windows
```

Follow the interactive prompts to:

1. Select a data source (if multiple)
2. Choose target language
3. Configure generation options
4. Generate code files

## Supported Languages

| Language | Status |
| :--- | :--- |
| **Java** | ✅ Supported |
| **Kotlin** | ✅ Supported |
| **C#** | ✅ Supported |
| **Go** | ✅ Supported |

## CLI Commands

### `init`

Initialize a new workspace in the current directory.

```bash
domain-designer-cli init [options]
```

**Options:**

| Option | Description |
| :--- | :--- |
| `--source <path>` | Specify source directory (for development) |

### `runWeb`

Launch the web visualization server.

```bash
domain-designer-cli runWeb [options]
```

**Options:**

| Option | Description |
| :--- | :--- |
| `--source <path>` | Specify workspace directory |
| `--port <number>` | Specify port (default: auto-detect) |

### `genCode`

Generate code from your domain model.

```bash
domain-designer-cli genCode [options]
```

**Options:**

| Option | Description |
| :--- | :--- |
| `--source <path>` | Specify workspace directory |
| `--language <lang>` | Target language (java, kotlin, csharp, go) |

### `update`

Update workspace files to the latest version.

```bash
domain-designer-cli update [options]
```

**Options:**

| Option | Description |
| :--- | :--- |
| `--source <path>` | Specify workspace directory |

### `run`

Execute with source (for development/testing).

```bash
domain-designer-cli run [options]
```

**Options:**

| Option | Description |
| :--- | :--- |
| `--source <path>` | Specify workspace directory |
| `--debug` | Enable debug mode |

### `info`

Show workspace information.

```bash
domain-designer-cli info [options]
```

**Options:**

| Option | Description |
| :--- | :--- |
| `--source <path>` | Specify workspace directory |

## Workflow

### Editing Models

- For changes within existing TS files, simply **refresh the browser** to see updates
- When adding or removing TS files, **restart the web server** by running `RunWeb` again

### Version Control

**Recommendation**: Commit all workspace files to your project's version control. Since TypeScript code is highly expressive, team members can understand and modify the domain model even without installing the tool.

### Collaborative Modeling

The TypeScript-based approach enables:

- **Code review** through standard PR processes
- **Collaboration** without requiring all team members to install the tool
- **Documentation** that stays in sync with the model
- **Refactoring** using standard IDE tooling

## Design Principles

### 1. Low Learning Cost

Users must be able to learn the tool within minutes. Complexity is encapsulated within the library, keeping usage at JavaScript-level simplicity (no need to worry about types).

### 2. Unidirectional Workflow

For feature addition, follow the principle: **Design First → Implementation Later**

- **Reject "Implementation Influencing Design"**
- Features that save implementation time (even just 10 minutes per project) are worth doing
- Features that encroach on the next step's responsibilities are NOT worth doing
- Code generation is about **reducing boilerplate**, not creating a low-code platform

The goal of code generation is to write less boilerplate code during initial implementation. If the generated code isn't perfect, manually adjust it and iteratively improve the generator over time—without increasing the complexity of domain modeling.

This is **NOT** a "low-code" platform. A low-code approach would require domain modeling complexity to match the target language's implementation complexity. When implementation code needs adjustments (non-domain design issues), we shouldn't need to worry about modifying the design—that's essentially rework.

A good tool lets users proceed smoothly through their proper workflow, not create obstacles.

## Features

### Multi-Platform Support

- ✅ **Windows**
- ✅ **Linux**
- ✅ **macOS**

### Code Generation

- ✅ **C#**
- ✅ **Go**
- ✅ **Java**
- ✅ **Kotlin**

### Visualization

- ✅ **Event Storming UML**
- ✅ **User Stories**
- ✅ **Workflow Animations**
- ✅ **Completeness Analysis**

## License

Apache License, Version 2.0

## Repository

[https://github.com/ddd-tool/domain-designer-cli-node](https://github.com/ddd-tool/domain-designer-cli-node)

## Author

AlphaFoxz ([https://github.com/AlphaFoxz](https://github.com/AlphaFoxz))

## Related Packages

- [@ddd-tool/domain-designer-core](https://www.npmjs.com/package/@ddd-tool/domain-designer-core) - Core domain modeling library
- [@ddd-tool/domain-designer-generator](https://www.npmjs.com/package/@ddd-tool/domain-designer-generator) - Code generation utilities
- [@ddd-tool/domain-designer-ui-component](https://www.npmjs.com/package/@ddd-tool/domain-designer-ui-component) - Vue 3 UI components
