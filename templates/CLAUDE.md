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

### Initialization Options

Optional parameters for `createDomainDesigner()`:

```typescript
const d = createDomainDesigner({
  moduleName: 'order', // Module name for code generation
  ignoreValueObjects: ['time'], // Value object names to ignore during code generation
})
```

| Parameter            | Type     | Description                                       | Default Value                                                                                                                                     |
| -------------------- | -------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `moduleName`         | string   | Module name for code bundling                     | File name                                                                                                                                         |
| `ignoreValueObjects` | string[] | Value object names to skip during code generation | ['time', 'id', 'pid', 'name', 'state', 'status', 'version', 'code', 'message', 'type', 'result', 'data', 'payload', 'meta', 'context', 'sorting'] |

**Why `ignoreValueObjects`?** Generic names like `time` or `name` have weak business meaning. During code generation, they should be treated as primitive types rather than value objects.

### Common Pattern: `const i = d.info`

It's common to alias `d.info` as `i` for brevity:

```typescript
const d = createDomainDesigner()
const i = d.info

// Now you can use i instead of d.info
const userId = i.id('userId')
const userName = i.valueObj('userName', '用户名')
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

### Node Method Reference

Each type of node has specific methods that can be called in a workflow:

| Node Type         | Available Methods                                      | Description                              |
| :---------------- | :----------------------------------------------------- | :--------------------------------------- |
| **Actor**         | `.command()`, `.facadeCmd()`, `.readModel()`           | Initiates commands or reads data         |
| **Command**       | `.agg()`                                               | Targets an aggregate                     |
| **FacadeCommand** | `.agg()`, `.service()`                                 | Targets aggregate or calls service       |
| **Aggregate**     | `.event()`, `.command()`                               | Emits event or creates nested command    |
| **Event**         | `.policy()`, `.system()`, `.readModel()`, `.command()` | Triggers policy/system/readModel/command |
| **Policy**        | `.command()`, `.facadeCmd()`, `.service()`             | Issues commands or calls service         |
| **Service**       | `.command()`, `.facadeCmd()`, `.agg()`                 | Issues commands or targets aggregate     |
| **System**        | `.command()`, `.facadeCmd()`, `.event()`               | Issues commands or emits events          |

**Important**: Each method call in a workflow returns a reference to the target node, allowing you to continue chaining:

```typescript
d.startWorkflow('Example')
//      Actor       →    Command    →  Aggregate  →   Event
customer.command(createOrder).agg(orderAgg).event(orderCreated)
//                                                      ↓
//                                            Event → Policy
//                                              orderCreated.policy(autoConfirmPolicy)
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
export const i = d.info

// user.ts - User domain
import { d, i } from './common'
const user = d.actor('用户')
// ... more definitions

// book.ts - Book domain
import { d, i } from './common'
const book = d.agg('图书')
// ... more definitions

// index.ts - Main entry
import { d } from './common'
import './user'
import './book'
export default d
```

### Value Pool Pattern ("常量池")

For domains with multiple related aggregates, organize reusable values into "value pools":

```typescript
// book.ts
import { d, i } from './common'

export const bookValues = {
  ISBN: i.id('isbn', '国际标准书号 - 一书一码'),
  图书名称: i.valueObj('bookName', '图书名称'),
  图书价格: i.valueObj('bookPrice', '图书价格'),
}

const 图书聚合 = d.agg('BookAgg', [bookValues.ISBN, bookValues.图书名称], '图书聚合')

// order.ts
import { d, i } from './common'
import { bookValues } from './book'

export const orderValues = {
  订单流水号: i.id('orderSequence', '订单流水号'),
  订购数量: i.valueObj('quantity', '订购数量'),
  最终价格: i.func(
    '最终价格',
    [bookValues.图书价格, orderValues.订购数量],
    '最终价格 = 图书价格 * 订购数量',
  ),
}

// Cross-reference values using d.note()
const 全局流水号 = i.valueObj('globalSequence', d.note`全局流水号由${上游系统}接口统一生成`)
```

**Benefits of value pools:**

- Avoids repeated definitions
- Serves as a "glossary" for domain terms
- Makes cross-references explicit using `d.note()`

## Value Object Types

```typescript
d.info.id('name') // ID type
d.info.document('name') // Document type (experimental)
d.info.func('name') // Function type (experimental)
d.info.valueObj('name') // Value Object type
d.info.version('name') // Version type (experimental)
```

### Naming Conventions

**Variable names**: Use Chinese/native language for better domain understanding:

```typescript
const 图书价格 = i.valueObj('bookPrice', '图书价格')
const 用户名 = i.valueObj('userName', '用户名')
```

**Type/Node names**: Use English for the first parameter (actual code name), Chinese for documentation:

```typescript
// First parameter = code name (English)
// Second parameter = documentation (Chinese)
const 图书价格 = i.valueObj('bookPrice', '图书价格')
d.command('CreateUser', [用户名, 邮箱], '创建用户')
d.agg('UserAgg', [用户id], '用户聚合')
d.event('UserCreated', [用户id], '用户已创建')
```

### Shorthand Syntax

All nodes accept plain strings as parameters. The shorthand `['fieldName', '备注']` syntax is equivalent to `i.valueObj('fieldName', '备注')`:

```typescript
// Both are equivalent - use d.info functions for clarity
d.command('CreateUser', [i.valueObj('userName'), i.valueObj('email'), i.valueObj('gender', '性别')])

// Shorthand form
d.command('CreateUser', ['userName', 'email', ['gender', '性别']])
```

**Recommendation**: Prefer `d.info` functions for explicit type marking, especially for value objects that have business meaning. Use shorthand only for generic fields like `time` or `id`.

### Experimental Features

The following value types are experimental and their necessity is still being evaluated:

- **`document`** - For document or binary file values
- **`func`** - For values computed by functions
- **`version`** - For version numbers with business meaning

## Adding Documentation (Notes)

Most node functions accept a **last parameter** for documentation:

```typescript
// Simple documentation using a string
const orderCreated = d.event('OrderCreated', [orderId], '订单已创建')
const orderAgg = d.agg('OrderAgg', [orderId], '订单聚合')
const createOrder = d.command('CreateOrder', [orderId], '创建订单')
```

### Advanced Documentation with `d.note()`

`d.note()` is an advanced form of documentation that enables:

1. **Referencing other nodes** using `${node}` syntax (creates traceability)
2. **Multi-line business rules** with numbered lists
3. **Cross-module references** between domain concepts

#### When to Use `d.note()`

**Use simple strings** for basic descriptions:

```typescript
const addBook = d.command('AddToAvailableBooksCmd', [isbn, qrCode], '添加可预订书')
```

**Use `d.note()` when you need to:**

- Reference other nodes/values in the domain
- Document complex business rules
- Explain domain-specific concepts

#### Referencing Other Nodes

Use the `${node}` syntax to create explicit links between concepts:

```typescript
// In user.ts
export const userValues = {
  用户id: i.id('userId'),
  逾期次数: i.valueObj('overdueCount', '逾期次数'),
}

// In book.ts - reference using ${userValues.逾期次数}
const timeoutCommand = d.command(
  'TimeOutBorrowing',
  ['借书id'],
  d.note`逾期
    1. 书被借出，且1个月未还
    2. 增加借书会员的${userValues.逾期次数}`,
)

// Creates traceability - shows which value is being modified
const suspendPolicy = d.policy('SuspendAccountWhenTimeOut', d.note`增加账户${userValues.逾期次数}`)
```

#### Business Rules with Lists

```typescript
const reserveBook = d.command(
  'ReserveBook',
  [isbn, 'userId'],
  d.note`预定书
    1. 有可预定的书
    2. 会员账户没有被暂停
    3. 会员已预定或者借出的书小于3本`,
)

const borrowService = d.service(
  'BorrowBookService',
  d.note`借书服务
    书可预定则可借出
    书已预定时借书人是预定则可借`,
)
```

#### Complex Value Objects

For domain-specific or complex types:

```typescript
const qrCodeSet = i.valueObj('二维码集合', d.note`${bookValues.二维码} // 一书一码，业务唯一标识`)

const isbn = i.valueObj('isbn', d.note`国际标准书号 (ISBN-13)`)
```

**Key Point**: `d.note()` creates traceability. When a business rule mentions another concept, reference it explicitly:

```typescript
// Good - Creates explicit link
d.note`增加${userValues.逾期次数}`

// Avoid - No traceability
d.note`增加逾期计数`
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
const paymentTimeoutPolicy = d.policy('支付超时取消规则')
const cancelOrder = d.command('取消订单')
const orderCancelled = d.event('订单已取消')
const orderAgg = d.agg('订单聚合', [d.info.id('订单号')])

// When payment timeout event occurs, policy triggers cancellation
d.startWorkflow('支付超时取消流程')
paymentTimeout.policy(paymentTimeoutPolicy).command(cancelOrder).agg(orderAgg).event(orderCancelled)
```

### Event to External Systems

Events can trigger actions in external systems:

```typescript
const emailSystem = d.system('邮件系统')
const smsSystem = d.system('短信系统')

// In a workflow, connect events to systems
d.startWorkflow('订单创建通知流程')
orderCreated.system(emailSystem)
orderCreated.system(smsSystem)
```

### Event to Read Models

Events update read models:

```typescript
const orderSummary = d.readModel('订单汇总读模型', [
  d.info.id('订单号'),
  d.info.document('商品信息'),
  d.info.version('订单状态'),
])

// In a workflow, connect events to read models
d.startWorkflow('订单查询流程')
orderCreated.readModel(orderSummary)
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

```text
The requested module does not provide an export named 'X'
```

This typically means the `@ddd-tool/domain-designer-core` package needs to be rebuilt. If this is a development environment, run:

```bash
pnpm --filter @ddd-tool/domain-designer-core build
```
