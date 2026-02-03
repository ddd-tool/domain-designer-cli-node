# 领域建模工作空间

这是一个使用 [Domain Designer CLI](https://github.com/ddd-tool/domain-designer-cli-node) 创建的领域驱动设计（DDD）建模工作空间。

## 快速开始

### 1. 查看可视化

运行以下命令启动 Web 服务，实时查看领域模型的可视化效果：

```bash
# Windows
.\RunWeb.bat

# Linux / macOS
./RunWeb.sh
```

### 2. 生成代码

运行以下命令根据领域模型生成代码：

```bash
# Windows
.\GenCode.bat

# Linux / macOS
./GenCode.sh
```

## 项目结构

```
.
├── simple-example.ts           # 简单示例（单文件模式）
├── complex-example.ts          # 复杂示例（模块化模式）
├── complex-example-detail/     # 复杂示例的详细模块
│   ├── common.ts              # 公共定义
│   ├── user.ts                # 用户领域
│   └── book.ts                # 图书领域
├── node_modules/               # 类型定义（仅包含 .d.ts 文件）
├── RunWeb.bat / RunWeb.sh     # 启动 Web 可视化服务
├── GenCode.bat / GenCode.sh   # 代码生成脚本
└── README.md                   # 本文件
```

## 编写领域模型

### 数据源规则

**只有**位于工作空间根目录且**默认导出**了 `DomainDesigner` 实例的 TypeScript 文件才会被识别为数据源。

```typescript
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()

// ... 定义领域模型

export default d // 必须默认导出
```

### 单文件模式 vs 模块化模式

**单文件模式**（参考 `simple-example.ts`）：

- 适合小型领域模型
- 所有定义在一个文件中
- 快速上手，简单直接

**模块化模式**（参考 `complex-example.ts`）：

- 适合大型、复杂的领域模型
- 将不同领域拆分到不同文件中
- 更好的代码组织和可维护性

### 实时预览

- 修改 `.ts` 文件后，刷新浏览器页面即可看到更新
- 新增或删除 `.ts` 文件后，需要重新运行 `RunWeb` 脚本

## 使用 AI 辅助建模

本项目提供了 `CLAUDE.md` 文件，专门用于指导 Claude Code 等 AI 工具辅助你进行领域建模。

启用 AI 辅助的方法：

1. 在 VS Code 中安装 [Claude Code](https://claude.ai/code) 扩展
2. 在工作空间中直接与 Claude 对话，例如：
   - "帮我创建一个用户注册的聚合"
   - "为订单添加支付事件"
   - "检查我的领域模型是否完整"

## 相关资源

- [Domain Designer CLI GitHub](https://github.com/ddd-tool/domain-designer-cli-node)
- [领域驱动设计（DDD）入门指南](https://martinfowler.com/tags/domain%20driven%20design.html)
