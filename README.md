# domain-designer-cli

通过编写 ts 的方式进行领域设计，目标是作为 ddd 建模生产力工具

设计原则：

- 尽可能让代码与视图拥有相近的表达能力

- 借助 ts 代码检查保证一定的完备性

- 探索在设计的时候，如何更多地表达 `WHY`，而不是像传统设计图一样只表达 `HOW`。（工作流 + 用户故事）

## 1 前置依赖

- [nodejs](https://nodejs.org/en/download/) ^20.19.0 || >=22.12.0

- 可选：[bun](https://bun.sh/) OR [pnpm](https://pnpm.io/) >= 9

- 本程序会优先使用 bun 运行，如果没有则切换为 pnpm，再其次使用 npm

## 2 安装

```bash
bun i @ddd-tool/domain-designer-cli -g
# or
pnpm i @ddd-tool/domain-designer-cli -g
```

## 3 更新版本

### 3.1 更新软件

```bash
bun i @ddd-tool/domain-designer-cli@latest -g
# or
pnpm i @ddd-tool/domain-designer-cli@latest -g
```

### 3.2 更新工作空间

在已有的工作空间中执行命令

```bash
bunx domain-designer-cli update
# or
domain-designer-cli update
```

## 4 使用

### 4.1 初始化一个工作空间

在一个空文件夹中执行命令

```bash
bunx domain-designer-cli init
# or
domain-designer-cli init
```

对于 linux / macOS 系统用户，需要再执行：

```bash
chmod +x *.sh
```

- 推荐将工作空间中的所有文件放入实际项目，随项目一起进行版本控制。由于 ts 代码的表达能力并不弱，在多人协作的时候，即使其他人没有安装本工具，也可以通过代码安全地了解、调整领域模型。

- 初始化后的目录包含如下内容：
  - node_modules 目录：为 ide 提供代码补全的少量 `.d.ts` 文件，不包含任何实现

  - 示例 ts 文件。可以快速了解如何使用 ts 代码进行建模

  - RunWeb 脚本：用于实时查看建模效果

  - GenCode 脚本：用于代码生成

### 4.2 编写 ts 文件

- 可以自行创建多个任意名称的 ts 文件

- ※ 特殊规则：只有位于工作空间根目录、且默认导出了一个 DomainDesigner 实例的 ts 文件才会被识别为一个“数据源”，如示例文件中的 `export default d`。除此以外，所有规则与普通 ts 项目一致

- 多个数据源 ts 文件会被 web 服务识别为多个数据源，可在 web 页面的设置中切换数据源

### 4.3 Web 端运行

- 运行自动生成的`RunWeb`脚本文件，即可启动 web 服务

### 4.4 代码生成

- 运行自动生成的`GenCode`脚本文件，根据实际需求进行命令行交互

- 支持编程语言列表：
  - [x] Java

  - [x] Kotlin

  - [x] C#

  - [x] GoLang

## 5 其他说明

- 对于每个 ts 文件内的修改，刷新页面即可看到效果

- 如果新增或者删除了 ts 文件，需要重新运行`RunWeb`脚本

## 6 设计理念

### 6.1 低学习成本

- 用户学习成本必须控制在几分钟以内。必须把复杂性封装到库内，然后把使用难度保持在 js 级别（无需考虑类型）

### 6.2 单向工作流

- 对于特性的添加，遵循“单向工作流”原则：先设计 -> 再开始落地 -> ...
  拒绝“落地影响设计”
  - 如果某些特性，哪怕可以给每个项目的落地节省 10 分钟，就可以考虑做

  - 如果某些特性，侵占了下一步工作的“职责”，那就不做

  - 例如：代码生成功能可以做，且这个功能应开始于减负，结束于减负：它的目标就是让我们在初次落地时少写一点样板代码，假如这个样板代码不太准确，我们可以先手动调整，然后在不增加领域建模负担的前提下慢慢优化功能。
    这个代码生成功能绝不会是“低代码”，否则这将要求领域设计工作的复杂度与完备性将与目标编程语言的实现相近，最大的问题是，假如是低代码理念，当落地代码需要有某些调整（非领域设计问题），我们又要回过头担忧怎么改设计了，这实质上是一种返工。最终浪费的时间将远超样板代码方面节省的时间。一个好的工具应该让使用者顺利在自己应有的工作流程中一步步走下去，而不是制造麻烦。

## TODO list

- [ ] 多端适配
  - [x] Windows

  - [x] Linux

  - [ ] Mac

- [x] 代码生成功能
  - [x] csharp

  - [x] go

  - [x] java

  - [x] kotlin

- [x] 图形化展示
  - [x] 事件风暴 uml

  - [x] 用户故事

  - [x] 工作流动画

  - [x] 完备性分析

## License

This project is licensed under the Apache License, Version 2.0. See the LICENSE file for details.
