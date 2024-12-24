# domain-designer-cli

通过编写 ts 的方式进行领域设计，目标是作为 ddd 建模生产力工具

设计原则：

- 尽可能让代码与视图拥有相近的表达能力

- 借助 ts 代码检查保证一定的完备性

- 探索在设计的时候，如何更多地表达 `WHY`，而不是像传统设计图一样只表达 `HOW`。（工作流 + 用户故事）

## 1 前置依赖

[nodejs](https://nodejs.org/en/download/) >= 18

[bun](https://bun.sh/) OR [pnpm](https://pnpm.io/) >= 9

- 确保有全局的 `bun` 或者 `pnpm` 指令 bun

- 本程序会优先使用 bun 运行，如果没有则切换为 pnpm

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
domain-designer-cli update
```

## 4 使用

### 4.1 初始化一个工作空间

在一个空文件夹中执行命令

```bash
domain-designer-cli init
```

- 推荐将工作空间中的所有文件放入实际项目，随项目一起进行版本控制。由于 ts 代码的表达能力并不弱，在多人协作的时候，即使其他人没有安装本工具，也可以通过代码安全地了解、调整领域模型。

- 初始化后的目录包含如下内容：

  - node_modules 目录：为 ide 提供代码补全的少量 `.d.ts` 文件，不包含任何实现

  - 示例 ts 文件。可以快速了解如何使用 ts 代码进行建模

  - RunWeb 脚本：用于实时查看建模效果

### 4.2 编写 ts 文件

- 可以自行创建多个任意名称的 ts 文件

- ※ 特殊规则：只有位于工作空间根目录、且默认导出了一个 DomainDesigner 实例的 ts 文件才会被识别为一个“数据源”，如示例文件中的 `export default d`。除此以外，所有规则与普通 ts 项目一致

- 多个数据源 ts 文件会被 web 服务识别为多个数据源，可在 web 页面的设置中切换数据源

### 4.3 Web 端运行

- 运行自动生成的`RunWeb`脚本文件，即可启动 web 服务

## 5 其他说明

- 对于每个 ts 文件内的修改，刷新页面即可看到效果

- 如果新增或者删除了 ts 文件，需要重新运行`RunWeb`脚本

## License

This project is licensed under the Apache License, Version 2.0. See the LICENSE file for details.
