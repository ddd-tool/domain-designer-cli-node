# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when helping with domain modeling in this workspace.

## Project Overview

This workspace uses **Domain Designer CLI** - a Domain-Driven Design (DDD) modeling tool that enables developers to design domains using TypeScript code. The tool generates visualizations (event storming UML, user stories, workflow animations) and can produce code in multiple languages (Java, Kotlin, C#, Go).

## Current Workspace

This is a **user workspace** initialized with `domain-designer-cli init`. The workspace contains example models that demonstrate how to use the tool.

## Core API

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
```

### Available Methods

| Method                | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| `d.actor()`           | Create actors (users/systems that initiate commands) |
| `d.command()`         | Create commands (intent to change state)             |
| `d.facadeCmd()`       | Create facade commands                               |
| `d.agg()`             | Create aggregates (domain boundaries)                |
| `d.event()`           | Create events (facts that have happened)             |
| `d.policy()`          | Create policies (business rules)                     |
| `d.service()`         | Create domain services                               |
| `d.system()`          | Create external systems                              |
| `d.readModel()`       | Create read models (query models)                    |
| `d.startWorkflow()`   | Start defining a workflow                            |
| `d.defineUserStory()` | Group workflows by user intent                       |
| `d.note()`            | Create documentation notes                           |

## Workflow Builder Pattern

Workflows define the sequence of interactions in the domain:

```typescript
// Start a workflow
const workflowName = d.startWorkflow('CreateOrder')

// Chain the interactions: actor → command → aggregate → event → ...
actor.command(createOrder).agg(orderAgg).event(orderCreated)
```

### Complete Example

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()

// Create value objects (infos)
const orderId = d.info.id('订单号')
const userId = d.info.id('用户id')
const orderTime = d.info.version('下单时间')

// Create events
const orderCreated = d.event('下单成功', [orderId, userId, orderTime])
const paymentSuccess = d.event('支付成功', [orderId])

// Create commands
const createOrder = d.command('创建订单', [orderId, userId, orderTime])
const makePayment = d.command('支付', [orderId])

// Create aggregates
const orderAgg = d.agg('订单聚合', [orderId])
orderAgg.event(orderCreated)

// Create actors
const customer = d.actor('用户')

// Create workflow
d.startWorkflow('创建订单并支付')
customer
  .command(createOrder)
  .agg(orderAgg)
  .event(orderCreated)
  .command(makePayment)
  .agg(orderAgg)
  .event(paymentSuccess)

// Create user story
d.defineUserStory('用户下单购物', ['创建订单并支付'])

export default d
```

## File Organization

### Single-File Mode (simple-example.ts)

For small domains, put everything in one file:

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()

// ... all definitions

export default d
```

### Multi-File Mode (complex-example.ts)

For larger domains, split into modules:

```typescript
// common.ts - Shared setup
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
export const d = createDomainDesigner({ moduleName: 'my-domain' })

// user.ts - User domain
import { d } from './common'
const user = d.actor('用户')
// ... more definitions

// book.ts - Book domain
import { d } from './common'
const book = d.agg('图书')
// ... more definitions

// index.ts - Main entry
import { d } from './common'
import './user'
import './book'
export default d
```

## Value Object Types

```typescript
d.info.id('name') // ID type
d.info.document('name') // Document type
d.info.func('name') // Function type
d.info.valueObj('name') // Value Object type
d.info.version('name') // Version type
```

## Modeling Guidelines

### 1. Start with User Intent

Use **User Stories** to group workflows by user intent:

```typescript
d.defineUserStory('用户注册账号', ['注册用户', '发送验证邮件'])
d.defineUserStory('用户下单', ['创建订单', '支付'])
```

### 2. Define Aggregates as Boundaries

Aggregates represent consistency boundaries:

```typescript
const orderAgg = d.agg('订单聚合', [
  d.info.id('订单号'),
  d.info.document('商品列表'),
  d.info.version('状态'),
])
```

### 3. Events Represent Facts

Events are things that **have happened** (past tense):

```typescript
const orderCreated = d.event('订单已创建') // Good
const creatingOrder = d.event('创建订单') // Also acceptable
const createOrder = d.event('创建订单') // Avoid - sounds like a command
```

### 4. Commands Represent Intent

Commands are things someone **wants to happen**:

```typescript
const createOrder = d.command('创建订单') // Good
const orderCreated = d.command('订单已创建') // Avoid - sounds like an event
```

## Common Patterns

### Policy Pattern

Policies automate business rules:

```typescript
const paymentPolicy = d.policy('支付超时取消规则')
const cancelOrder = d.command('取消订单')

// When payment timeout event occurs, trigger cancellation
paymentTimeout.event(cancelOrder)
```

### External Systems

Integrate with external systems:

```typescript
const emailSystem = d.system('邮件系统')
orderCreated.event(emailSystem)
```

### Read Models

Define query models:

```typescript
const orderSummary = d.readModel('订单汇总读模型', [
  d.info.id('订单号'),
  d.info.document('商品信息'),
  d.info.version('订单状态'),
])
```

## Testing the Model

### Visualize

Run the web server to see visualizations:

```bash
.\RunWeb.bat    # Windows
./RunWeb.sh     # Linux/macOS
```

Visualizations include:

- Event Storming UML diagram
- User story workflows
- Workflow animations
- Completeness analysis

### Generate Code

Generate implementation code:

```bash
.\GenCode.bat   # Windows
./GenCode.sh    # Linux/macOS
```

Supported languages: Java, Kotlin, C#, Go

## Tips for AI Assistants

When helping with domain modeling:

1. **Ask clarifying questions** about the business domain
2. **Start with actors and user stories** to understand user intent
3. **Identify aggregates** by looking for consistency boundaries
4. **Use Chinese** for domain concepts if the user prefers (the tool supports it)
5. **Always define workflows** to show how elements interact
6. **Group related workflows** into user stories for better organization
7. **Keep aggregates small** - one aggregate per root entity
8. **Use value objects** to give meaning to primitive types

## Error Handling

If you see errors like:

```
The requested module does not provide an export named 'X'
```

This typically means the `@ddd-tool/domain-designer-core` package needs to be rebuilt. If this is a development environment, run:

```bash
pnpm --filter @ddd-tool/domain-designer-core build
```
