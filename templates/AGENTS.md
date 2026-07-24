# AGENTS.md

This file provides guidance to AI coding agents when helping with domain modeling in this workspace.

## Core API

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
const i = d.info
```

### API Methods

| Method | Purpose |
|--------|---------|
| `d.actor(name, note?)` | Create an actor |
| `d.command(name, content, note?)` | Create a command |
| `d.facadeCmd(name, content, note?)` | Create a facade command |
| `d.agg(name, content, note?)` | Create an aggregate |
| `d.event(name, content, note?)` | Create an event |
| `d.system(name, note?)` | Create an external system |
| `d.service(name, note?)` | Create a domain service |
| `d.policy(name, note?)` | Create a policy |
| `d.readModel(name, content, note?)` | Create a read model |
| `d.startWorkflow(name)` | Start a new workflow (also ends previous) |
| `d.defineUserStory(name, workflows)` | Group workflows by user intent |
| `d.note\`...\`` | Create a note with variable references via `${...}` |

### Info Methods (d.info / i)

| Method | Purpose |
|--------|---------|
| `i.id(name, note?)` | Value with unique id meaning |
| `i.valueObj(name, note?)` | Ordinary value |
| `i.document(name, note?)` | Document/binary value (experimental) |
| `i.func(name, dependsOn, note?)` | Computed value (experimental) |
| `i.version(name, note?)` | Version value (experimental) |

### CRITICAL: Common API Mistakes

These are WRONG — do NOT use:

```typescript
d.info.valueObject('x')  // ❌ does NOT exist
d.func('x', [...])       // ❌ does NOT exist
d.code('x')              // ❌ does NOT exist
```

Correct forms:

```typescript
d.info.valueObj('x')     // ✅
d.info.func('x', [...])  // ✅
d.system('x')            // ✅
```

### Initialization Options

```typescript
const d = createDomainDesigner({
  moduleName: 'order',
  ignoreValueObjects: ['time', 'name'],
})
```

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `moduleName` | string | Module name for code generation | _ts filename_ |
| `ignoreValueObjects` | string[] | Names to treat as primitives during code generation | ['time','id','pid','name','state','status','version','code','message','type','result','data','payload','meta','context','sorting'] |

## Shorthand Syntax

All nodes accept plain strings in `content`. String `'fieldName'` is equivalent to `i.valueObj('fieldName')`, and `['fieldName', '备注']` is equivalent to `i.valueObj('fieldName', '备注')`:

```typescript
// These are equivalent:
d.command('CreateUser', ['userName', 'email', ['gender', '性别']])
d.command('CreateUser', [i.valueObj('userName'), i.valueObj('email'), i.valueObj('gender', '性别')])
```

Use `i.id()`, `i.func()`, `i.document()`, `i.version()` explicitly when the type matters. Use shorthand for generic fields.

## Workflow Builder

Chain nodes to define business flow. Each call returns the target node for continued chaining:

```typescript
d.startWorkflow('CreateOrder')
customer.command(createOrder).agg(orderAgg).event(orderCreated)
```

Chains can be broken to represent forking:

```typescript
d.startWorkflow('CreateOrder')
customer.command(createOrder).agg(orderAgg).event(orderCreated)
orderCreated.policy(paymentPolicy).command(makePayment).agg(orderAgg).event(paymentSuccess)
orderCreated.system(emailSystem)
```

### Node Chaining Methods

| Node Type | Available Methods |
|-----------|-------------------|
| Actor | `.command()`, `.facadeCmd()`, `.readModel()` |
| Command | `.agg()` |
| FacadeCommand | `.agg()`, `.service()` |
| Aggregate | `.event()`, `.command()` |
| Event | `.policy()`, `.system()`, `.readModel()`, `.command()` |
| Policy | `.command()`, `.facadeCmd()`, `.service()` |
| Service | `.command()`, `.facadeCmd()`, `.agg()` |
| System | `.command()`, `.facadeCmd()`, `.event()` |

## Notes

The last parameter of most node functions is an optional note. Use plain strings for simple descriptions, `d.note` for variable references:

```typescript
// Simple note
const orderCreated = d.event('OrderCreated', [orderId], '订单已创建')

// Note with variable reference — creates traceability
const timeoutCmd = d.command(
  'TimeOutBorrowing',
  ['借书id'],
  d.note`逾期
    1. 书被借出，且1个月未还
    2. 增加借书会员的${userValues.逾期次数}`,
)
```

Prefer `d.note` with `${...}` references when a note mentions another domain concept.

`d.note` also supports multi-line business rules (common in policy/service):

```typescript
const 付款规则 = d.policy(
  'PaymentPolicy',
  d.note`如果${用户账号}开通了自动扣费服务，则发起自动扣款
    规则1：xxx
    规则2：xxx`,
)

const 借书服务 = d.service(
  'BorrowBookService',
  d.note`借书服务
    书可预定则可借出
    书已预定时借书人是预定则可借`,
)
```

## Events vs Commands Naming

Events describe **what happened**; commands describe **what someone wants to happen**:

```typescript
// ✅ Good — event names reflect facts
const orderCreated = d.event('OrderCreated', [...], '订单已创建')
const paymentFailed = d.event('PaymentFailed', [...], '支付失败')

// ✅ Good — command names reflect intent
const createOrder = d.command('CreateOrder', [...], '创建订单')
const makePayment = d.command('MakePayment', [...], '支付')

// ❌ Avoid — event name sounds like a command
const createOrder = d.event('CreateOrder', [...])
// ❌ Avoid — command name sounds like an event
const orderCreated = d.command('OrderCreated', [...])
```

## Complete Example

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
const i = d.info

// Info
const 订单号 = i.id('orderId')
const 用户账号 = i.valueObj('userAccount')
const 下单时间 = i.valueObj('orderTime')

// Events
const 下单成功 = d.event('OrderCreated', [订单号, 用户账号, 下单时间], '下单成功')
const 下单失败 = d.event('OrderFailed', [订单号], '下单失败')
const 扣款成功 = d.event('PaymentSuccess', [订单号], '扣款成功')
const 扣款失败 = d.event('PaymentFailed', [订单号], '扣款失败')

// Commands
const 创建订单 = d.command('CreateOrder', [订单号, 用户账号], '创建订单')
const 自动扣款 = d.command('AutoPayment', [订单号], '自动扣款')

// Actors
const 用户 = d.actor('Customer', '下单用户')

// Aggregates
const 订单聚合 = d.agg('OrderAgg', [订单号, 下单时间, 用户账号], '订单聚合')

// Policies
const 付款规则 = d.policy('PaymentPolicy', d.note`如果${用户账号}开通了自动扣费服务，则发起自动扣款`)

// Services
const 自动扣款服务 = d.service('PaymentService', '根据付款规则发起自动扣款')

// External Systems
const 物流系统 = d.system('LogisticsSystem')
const 邮件系统 = d.system('EmailSystem')

// Read Models
const 订单详情 = d.readModel('OrderDetailRM', [订单号, 下单时间], '订单详情读模型')

// Workflows
const 创建订单失败流程 = d.startWorkflow('创建订单失败')
用户.command(创建订单).agg(订单聚合).event(下单失败)
下单失败.system(邮件系统)

const 创建订单成功_扣款失败流程 = d.startWorkflow('创建订单成功，扣款失败')
用户.command(创建订单)
  .agg(订单聚合)
  .event(下单成功)
  .policy(付款规则)
  .service(自动扣款服务)
  .command(自动扣款)
  .agg(订单聚合)
  .event(扣款失败)
扣款失败.readModel(订单详情)
扣款失败.system(邮件系统)

const 创建订单成功_扣款成功流程 = d.startWorkflow('创建订单成功，扣款成功')
用户.command(创建订单)
  .agg(订单聚合)
  .event(下单成功)
  .policy(付款规则)
  .service(自动扣款服务)
  .command(自动扣款)
  .agg(订单聚合)
  .event(扣款成功)
扣款成功.readModel(订单详情)
扣款成功.system(物流系统)

// User Stories
d.defineUserStory('作为商城用户，我要下单并自动扣款', [
  创建订单失败流程,
  创建订单成功_扣款失败流程,
  创建订单成功_扣款成功流程,
])

export default d
```

## File Organization

### Single-File Mode

For small domains, one file with `export default d`:

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
const i = d.info
// ... all definitions
export default d
```

### Multi-File Mode

For larger domains, split into a folder. The entry file re-exports `d`:

```typescript
// order-detail/common.ts
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
export const d = createDomainDesigner({ moduleName: 'order' })
export const i = d.info

// order-detail/user.ts
import { d, i } from './common'
// ... user domain definitions

// order-detail/book.ts
import { d, i } from './common'
import { userValues } from './user'
// ... book domain definitions

// order.ts (root entry)
import { d } from './order-detail/common'
import './order-detail/user'
import './order-detail/book'
export default d
```

### Value Pool Pattern

For domains with multiple related aggregates, define reusable values in pools:

```typescript
export const bookValues = {
  ISBN: i.id('isbn', '国际标准书号'),
  书名: i.valueObj('bookName', '图书名称'),
  图书价格: i.valueObj('bookPrice', '图书价格'),
}

export const orderValues = {
  订单流水号: i.id('orderSequence', '订单流水号'),
  订购数量: i.valueObj('quantity', '订购数量'),
  最终价格: i.func(
    'finalPrice',
    [bookValues.图书价格, orderValues.订购数量],
    '最终价格 = 图书价格 * 订购数量',
  ),
}
```

Benefits: no repeated definitions, serves as a glossary, cross-references are explicit.

## Naming Conventions

- **Variable names**: Can use Chinese/native language for domain clarity: `const 图书价格 = i.valueObj('bookPrice', '图书价格')`
- **First parameter (code name)**: Use English — this becomes the identifier in generated code: `'bookPrice'`, `'UserAgg'`, `'OrderCreated'`
- **Note parameter**: Use the user's preferred language for documentation
- **Designer instance**: Always assign to variable `d`; alias `d.info` as `i`

## Modeling Guidelines

1. **Define nodes first, then chain in workflows** — avoid declaring nodes inline while chaining (anonymous nodes cannot be referenced later)
2. **Events = facts that happened** (past tense); **Commands = intent to change state**
3. **Use `d.note` with `${...}`** when a note references another domain concept — this creates traceability that plain strings cannot provide
4. **Group workflows into user stories** with `d.defineUserStory()` when the domain is complex enough to benefit from it
5. **Use value pools** when multiple aggregates share the same values — avoids duplication and keeps a single source of truth
