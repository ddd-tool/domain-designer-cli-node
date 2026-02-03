# AI Assistance

## CLAUDE.md File

When you initialize a workspace with `domain-designer-cli init`, a **CLAUDE.md** file is automatically generated in the root directory.

This file is designed specifically for **AI assistants** (like Claude Code, GitHub Copilot Workspace, etc.) and contains:

- **Complete API Reference** - All available methods and parameter descriptions
- **Modeling Guidelines** - How to apply Domain-Driven Design principles
- **Code Examples** - Complete examples from simple to complex
- **Best Practices** - Workflows, user stories, aggregate design patterns
- **Error Handling** - Common issues and solutions

## How to Use

### 1. Have AI Read Project Files

At the start of your conversation, tell the AI to read files in your workspace:

```text
Please read the CLAUDE.md file and example files in the project to understand how to use Domain Designer CLI for domain modeling.
```

### 2. Describe Business Scenarios

Describe your business requirements in natural language, and the AI will generate corresponding domain model code based on the guidance in CLAUDE.md:

```text
I need an e-commerce order system with the following features:
- Users can create orders
- Orders can be paid
- Send email notification after successful payment
```

### 3. AI Will Automatically Generate

The AI will generate based on the guidance:

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()

// Create value objects
const orderId = d.info.id('orderId')
const userId = d.info.id('userId')

// Create events
const orderCreated = d.event('OrderCreated', [orderId, userId])
const paymentSuccess = d.event('PaymentSuccess', [orderId])

// Create commands
const createOrder = d.command('CreateOrder', [orderId, userId])
const makePayment = d.command('MakePayment', [orderId])

// Create aggregate
const orderAgg = d.agg('OrderAggregate', [orderId])

// Create workflow
d.startWorkflow('CreateOrderAndPay')
const customer = d.actor('Customer')
customer
  .command(createOrder)
  .agg(orderAgg)
  .event(orderCreated)
  .command(makePayment)
  .agg(orderAgg)
  .event(paymentSuccess)

export default d
```

## Recommended AI Assistants

- **Claude Code** (claude.ai/code) - Excellent understanding of TypeScript and DDD
- **GitHub Copilot Workspace** - Can understand entire project context
- **Cursor** - AI-native development environment support

## Prompting Tips

1. **Have AI read CLAUDE.md first** - Ensure it understands the API and best practices
2. **Use natural language for business** - No technical terms needed
3. **Iterate gradually** - Start with simple scenarios, add complexity gradually
4. **Request visualization** - Ask AI to help run RunWeb script to see results
5. **Request code generation** - Ask AI to help run GenCode script to generate code
