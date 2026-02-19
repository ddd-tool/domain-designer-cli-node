# Domain Designer CLI

> 基于 TypeScript 代码的领域驱动设计（DDD）建模生产力工具

**Domain Designer CLI** 让开发者能够使用 TypeScript 代码进行领域设计，拥有与可视化图表相当的表达能力。借助 TypeScript 的类型检查，确保模型的完备性，尽早发现设计错误。

## 设计原则

- **代码即图表**：通过 TypeScript 代码实现与可视化图表相当的表达能力
- **类型安全的完备性**：利用 TypeScript 的类型检查确保模型完备
- **表达 WHY，而不仅仅是 HOW**：通过工作流和用户故事来表达业务意图，而不仅仅是像传统设计图那样只表达实现细节

## 前置依赖

- **Node.js** ^20.19.0 || >=22.12.0 ([下载](https://nodejs.org/en/download/))
- **可选**：[bun](https://bun.sh/) 或 [pnpm](https://pnpm.io/) >= 9

CLI 会优先使用 `bun`，其次是 `pnpm`，最后是 `npm`。

## 安装

### 全局安装 CLI

```bash
bun i @ddd-tool/domain-designer-cli -g
# 或
pnpm i @ddd-tool/domain-designer-cli -g
```

### 更新 CLI

```bash
bun i @ddd-tool/domain-designer-cli@latest -g
# 或
pnpm i @ddd-tool/domain-designer-cli@latest -g
```

## 快速开始

### 1. 初始化工作空间

创建一个空目录并运行：

```bash
bunx domain-designer-cli init
# 或
domain-designer-cli init
```

对于 **Linux / macOS** 用户，还需要执行：

```bash
chmod +x *.sh
```

这将创建一个包含以下内容的工作空间：

- **TypeScript 类型定义**：`node_modules` 中用于 IDE 自动补全（不包含实现）
- **示例 TS 文件**：演示如何使用 TypeScript 进行建模
- **RunWeb 脚本**：用于实时可视化
- **GenCode 脚本**：用于代码生成

### 2. 设计领域模型

在工作空间根目录创建 TypeScript 文件。只有**默认导出 `DomainDesigner` 实例**的文件才会被识别为数据源：

```typescript
// my-model.ts
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
const i = d.info

// 定义值对象和 ID
const orderId = i.id('OrderId')
const userId = i.valueObj('UserId')

// 定义领域元素
const createOrder = d.command('CreateOrder', [orderId, userId])
const order = d.agg('Order', [orderId, userId])
const orderCreated = d.event('OrderCreated', [orderId])
const customer = d.actor('Customer')

// 构建工作流
const workflow = d.startWorkflow('Place Order')
customer.command(createOrder).agg(order).event(orderCreated)

// 定义用户故事
d.defineUserStory('As a customer, I want to place an order', [workflow])

// 必需：默认导出
export default d
```

**重要**：多个数据源文件会被识别为可切换的设计，在 Web UI 中可以切换。

### 3. 使用 Web UI 可视化

运行生成的 `RunWeb` 脚本启动可视化服务器：

```bash
./RunWeb.sh    # Linux/macOS
RunWeb.bat     # Windows
```

Web UI 提供：

- **交互式 UML 图表**：支持拖拽、缩放、平移
- **工作流动画**：理解业务流程
- **用户故事浏览器**：组织工作流
- **节点详情面板**：检查领域元素
- **多设计支持**：在多个模型之间切换
- **导出为 SVG**：用于文档

### 4. 生成代码

运行生成的 `GenCode` 脚本生成样板代码：

```bash
./GenCode.sh    # Linux/macOS
GenCode.bat     # Windows
```

按照交互式提示：

1. 选择数据源（如果有多个）
2. 选择目标语言
3. 配置生成选项
4. 生成代码文件

## 支持的编程语言

| 语言 | 状态 |
| :--- | :--- |
| **Java** | ✅ 已支持 |
| **Kotlin** | ✅ 已支持 |
| **C#** | ✅ 已支持 |
| **Go** | ✅ 已支持 |

## CLI 命令

### `init`

在当前目录初始化新工作空间。

```bash
domain-designer-cli init [选项]
```

**选项：**

| 选项 | 描述 |
| :--- | :--- |
| `--source <路径>` | 指定源目录（用于开发） |

### `runWeb`

启动 Web 可视化服务器。

```bash
domain-designer-cli runWeb [选项]
```

**选项：**

| 选项 | 描述 |
| :--- | :--- |
| `--source <路径>` | 指定工作空间目录 |
| `--port <端口>` | 指定端口（默认：自动检测） |

### `genCode`

从领域模型生成代码。

```bash
domain-designer-cli genCode [选项]
```

**选项：**

| 选项 | 描述 |
| :--- | :--- |
| `--source <路径>` | 指定工作空间目录 |
| `--language <语言>` | 目标语言（java, kotlin, csharp, go） |

### `update`

更新工作空间文件到最新版本。

```bash
domain-designer-cli update [选项]
```

**选项：**

| 选项 | 描述 |
| :--- | :--- |
| `--source <路径>` | 指定工作空间目录 |

### `run`

使用源执行（用于开发/测试）。

```bash
domain-designer-cli run [选项]
```

**选项：**

| 选项 | 描述 |
| :--- | :--- |
| `--source <路径>` | 指定工作空间目录 |
| `--debug` | 启用调试模式 |

### `info`

显示工作空间信息。

```bash
domain-designer-cli info [选项]
```

**选项：**

| 选项 | 描述 |
| :--- | :--- |
| `--source <路径>` | 指定工作空间目录 |

## 工作流程

### 编辑模型

- 对于现有 TS 文件内的修改，只需**刷新浏览器**即可看到更新
- 当添加或删除 TS 文件时，需要**重新启动 Web 服务器**，即再次运行 `RunWeb`

### 版本控制

**建议**：将所有工作空间文件提交到项目的版本控制中。由于 TypeScript 代码具有很高的表达性，团队成员即使没有安装该工具，也能理解并修改领域模型。

### 协作建模

基于 TypeScript 的方法可以实现：

- 通过标准 PR 流程进行**代码审查**
- **协作**而无需所有团队成员都安装该工具
- 与模型保持同步的**文档**
- 使用标准 IDE 工具进行**重构**

## 设计理念

### 1. 低学习成本

用户必须能在几分钟内学会使用该工具。复杂性被封装在库内，保持使用难度在 JavaScript 级别（无需担心类型）。

### 2. 单向工作流

对于功能添加，遵循原则：**先设计 → 后实现**

- **拒绝"实现影响设计"**
- 能节省实现时间的特性（即使每个项目只节省 10 分钟）就值得做
- 侵占下一步职责的特性则不值得做
- 代码生成是为了**减少样板代码**，而不是创建低代码平台

代码生成的目标是在初次实现时少写样板代码。如果生成的代码不完美，可以手动调整，然后随着时间推移迭代改进生成器——而不会增加领域建模的复杂性。

这**不是**一个"低代码"平台。低代码方法要求领域建模的复杂度与目标语言的实现复杂度相匹配。当实现代码需要调整（非领域设计问题）时，我们不应该担心修改设计——这本质上是返工。

一个好的工具应该让用户在自己的正确工作流程中顺利前进，而不是制造障碍。

## 功能

### 多平台支持

- ✅ **Windows**
- ✅ **Linux**
- ✅ **macOS**

### 代码生成

- ✅ **C#**
- ✅ **Go**
- ✅ **Java**
- ✅ **Kotlin**

### 可视化

- ✅ **事件风暴 UML**
- ✅ **用户故事**
- ✅ **工作流动画**
- ✅ **完备性分析**

## 许可证

Apache License, Version 2.0

## 仓库

[https://github.com/ddd-tool/domain-designer-cli-node](https://github.com/ddd-tool/domain-designer-cli-node)

## 作者

AlphaFoxz ([https://github.com/AlphaFoxz](https://github.com/AlphaFoxz))

## 相关包

- [@ddd-tool/domain-designer-core](https://www.npmjs.com/package/@ddd-tool/domain-designer-core) - 核心领域建模库
- [@ddd-tool/domain-designer-generator](https://www.npmjs.com/package/@ddd-tool/domain-designer-generator) - 代码生成工具
- [@ddd-tool/domain-designer-ui-component](https://www.npmjs.com/package/@ddd-tool/domain-designer-ui-component) - Vue 3 UI 组件
