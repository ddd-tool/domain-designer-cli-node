# AI 辅助

## CLAUDE.md 文件

当使用 `domain-designer-cli init` 初始化工作空间后，根目录会自动生成一个 **CLAUDE.md** 文件。

这个文件专门为 **AI 助手**（如 Claude Code、GitHub Copilot Workspace 等）设计，包含了：

- **完整的 API 参考** - 所有可用的方法和参数说明
- **建模指南** - 如何使用领域驱动设计原则进行建模
- **代码示例** - 从简单到复杂的完整示例
- **最佳实践** - 工作流、用户故事、聚合设计等模式
- **错误处理** - 常见问题和解决方案

## 如何使用

### 1. 让 AI 阅读项目文件

在对话开始时，告诉 AI 阅读工作空间中的文件：

```text
请阅读项目中的 CLAUDE.md 文件和示例文件，以便了解如何使用 Domain Designer CLI 进行领域建模。
```

### 2. 描述业务场景

用自然语言描述你的业务需求，AI 会根据 CLAUDE.md 中的指导来生成相应的领域模型代码：

```text
我需要一个电商订单系统，包含以下功能：
- 用户可以创建订单
- 订单可以支付
- 支付成功后发送邮件通知
```

### 3. AI 会自动生成

AI 会根据指导生成：

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()

// 创建值对象
const orderId = d.info.id('订单号')
const userId = d.info.id('用户id')

// 创建事件
const orderCreated = d.event('订单已创建', [orderId, userId])
const paymentSuccess = d.event('支付成功', [orderId])

// 创建命令
const createOrder = d.command('创建订单', [orderId, userId])
const makePayment = d.command('支付', [orderId])

// 创建聚合
const orderAgg = d.agg('订单聚合', [orderId])

// 创建工作流
d.startWorkflow('创建订单并支付')
const customer = d.actor('用户')
customer
  .command(createOrder)
  .agg(orderAgg)
  .event(orderCreated)
  .command(makePayment)
  .agg(orderAgg)
  .event(paymentSuccess)

export default d
```

## 推荐的 AI 助手

- **Claude Code** (claude.ai/code) - 对 TypeScript 和 DDD 有很好的理解
- **GitHub Copilot Workspace** - 可以理解整个项目上下文
- **Cursor** - 支持 AI 原生开发环境

## 提示技巧

1. **先让 AI 阅读 CLAUDE.md** - 确保它理解 API 和最佳实践
2. **使用自然语言描述业务** - 不需要懂技术术语
3. **逐步迭代** - 从简单的场景开始，逐步添加复杂度
4. **请求可视化** - 让 AI 帮助你运行 RunWeb 脚本查看结果
5. **请求代码生成** - 让 AI 帮助你运行 GenCode 脚本生成代码
