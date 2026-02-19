# @ddd-tool/domain-designer-core

> Core domain modeling library for Domain-Driven Design (DDD) in TypeScript

**@ddd-tool/domain-designer-core** enables developers to design domains using TypeScript code with similar expressiveness as visual diagrams. Leverage TypeScript's type checking to ensure model completeness and catch design errors at compile time.

## Features

- **Type-Safe Domain Modeling**: Design domains with full TypeScript type safety
- **Fluent Workflow Builder**: Chain actor → command → aggregate → event sequences naturally
- **User Story Organization**: Group workflows by user intent
- **Event Storming Support**: Model DDD concepts like actors, commands, events, aggregates, policies, and more
- **Code Generation Ready**: Seamlessly integrates with code generators for multiple languages

## Installation

```bash
npm install @ddd-tool/domain-designer-core
```

```bash
pnpm add @ddd-tool/domain-designer-core
```

```bash
bun add @ddd-tool/domain-designer-core
```

## Quick Start

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
const i = d.info

// Define value objects and IDs
const orderId = i.id('OrderId')
const userId = i.valueObj('UserId')
const orderTime = i.valueObj('OrderTime')

// Define domain elements
const placeOrder = d.command('PlaceOrder', [orderId, userId])
const orderAggregate = d.agg('OrderAggregate', [
  orderId,
  userId,
  orderTime,
  'ProductPrice',
  'ProductQuantity',
])
const orderPlaced = d.event('OrderPlaced', [orderId, orderTime])

// Define actors and systems
const customer = d.actor('Customer', 'The user placing orders')
const paymentSystem = d.system('PaymentSystem')

// Build workflows
const placeOrderWorkflow = d.startWorkflow('Place Order')
customer.command(placeOrder).agg(orderAggregate).event(orderPlaced)
orderPlaced.system(paymentSystem)

// Define user stories
d.defineUserStory('As a customer, I want to place an order', [placeOrderWorkflow])

export default d
```

## Core Concepts

### Domain Elements

The library provides methods to create all essential DDD building blocks:

- **Actors** (`d.actor()`): Users or systems that initiate commands
- **Commands** (`d.command()`): Intent to change state
- **Events** (`d.event()`): Facts that have happened
- **Aggregates** (`d.agg()`): Consistency boundaries with entities and value objects
- **Policies** (`d.policy()`): Business rules that trigger on events
- **Services** (`d.service()`): Domain services for complex operations
- **Systems** (`d.system()`): External systems your domain interacts with
- **Read Models** (`d.readModel()`): Query models optimized for reads
- **Facade Commands** (`d.facadeCmd()`): Composite commands that delegate to services

### Info Types

Define structured data within your domain:

```typescript
const i = d.info

// Value objects
const orderId = i.id('OrderId')
const price = i.valueObj('Price')

// Documents
const spec = i.document('Specification')

// Functions with dependencies
const totalAmount = i.func('TotalAmount', [price, 'quantity'])

// Versions
const version = i.version('Version')
```

### Workflow Builder Pattern

Build fluent chains that represent your domain flows:

```typescript
const workflow = d.startWorkflow('Order Processing Workflow')
customer
  .command(placeOrder)
  .agg(orderAggregate)
  .event(orderPlaced)
  .policy(paymentPolicy)
  .service(paymentService)
  .command(processPayment)
  .agg(paymentAggregate)
  .event(paymentCompleted)
```

Each element in the chain can continue to the next appropriate element:

- **Command** → Aggregate
- **Aggregate** → Event
- **Event** → Policy, System, ReadModel
- **Policy** → Command, FacadeCommand, Service
- **Service** → Command, FacadeCommand, Aggregate
- **System** → Command, FacadeCommand, Event

### User Stories

Group related workflows by user intent:

```typescript
d.defineUserStory('Place and pay for order', [
  'Place Order',
  'Process Payment',
  'Handle Payment Failure',
])
```

### Notes and Documentation

Add descriptive notes using template literals:

```typescript
const paymentPolicy = d.policy(
  'PaymentPolicy',
  d.note`
    Process payment when ${orderPlaced} occurs
    Rules:
    1. Validate ${paymentAmount}
    2. Check ${customerStatus}
    3. Charge ${paymentMethod}
  `,
)
```

## API Reference

### `createDomainDesigner(options?)`

Creates a new DomainDesigner instance.

```typescript
interface DomainDesignOptions {
  moduleName?: string
  ignoreValueObjects?: string[]
  __toFormatType?: 'BngleBrackets' | 'JSON' | 'JSONPretty'
}

const d = createDomainDesigner({
  moduleName: 'OrderManagement',
  ignoreValueObjects: ['time', 'id', 'name'],
})
```

### DomainDesigner Methods

| Method                             | Description                     |
| :--------------------------------- | :------------------------------ |
| `actor(name, note?)`               | Create an actor                 |
| `command(name, infos, note?)`      | Create a command                |
| `facadeCmd(name, infos, note?)`    | Create a facade command         |
| `agg(name, infos, note?)`          | Create an aggregate             |
| `event(name, infos, note?)`        | Create an event                 |
| `policy(name, note?)`              | Create a policy                 |
| `service(name, note?)`             | Create a domain service         |
| `system(name, note?)`              | Create an external system       |
| `readModel(name, infos, note?)`    | Create a read model             |
| `info.document(name, note?)`       | Create a document info          |
| `info.func(name, deps?, note?)`    | Create a function info          |
| `info.id(name, note?)`             | Create an ID info               |
| `info.valueObj(name, note?)`       | Create a value object           |
| `info.version(name, note?)`        | Create a version info           |
| `startWorkflow(name)`              | Start a new workflow chain      |
| `defineUserStory(name, workflows)` | Define a user story             |
| `note`                             | Create a note for documentation |

## Type Safety

The library provides full TypeScript type safety:

```typescript
// Type-safe access to aggregate internals
const order = d.agg('Order', [orderId, userId])
console.log(order.inner.orderId) // Fully typed!

// Type-safe workflow chains
customer.command(placeOrder).agg(order) // Compile-time validation
```

## License

Apache-2.0

## Repository

[https://github.com/ddd-tool/domain-designer-core-ts](https://github.com/ddd-tool/domain-designer-core-ts)

## Author

AlphaFoxz ([https://github.com/AlphaFoxz](https://github.com/AlphaFoxz))
