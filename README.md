# domain-designer-cli

目标是作为 ddd 建模生产力工具

## 前置依赖

[nodejs](https://nodejs.org/en/download/) >= 18

[pnpm](https://pnpm.io/) >= 9

- 确保有全局的`pnpm`指令

## 安装

```bash
pnpm i @ddd-tool/domain-designer-cli -g
```

## 使用

### 初始化一个工作空间

在一个空文件夹中执行命令

```bash
domain-designer-cli init
```

- 初始化后的目录包含如下内容：

  - node_modules。为 ide 提供代码补全的最小.d.ts 包，不包含任何实现

  - 一个示例 ts 文件。可以快速了解如何使用 ts 代码进行建模

  - RunWeb 脚本。用于实时查看建模效果

### 编写 ts 文件

- 可以自行创建多个任意名称的 ts 文件

- 多个 ts 文件会被 web 服务识别为多个数据源，可在 web 页面的设置中切换数据源

### Web 端运行

- 运行自动生成的`RunWeb`脚本文件，即可启动 web 服务

### 更新版本

#### 1、更新软件

```bash
pnpm i @ddd-tool/domain-designer-cli@latest -g
```

#### 2、更新工作空间

在已有的工作空间中执行命令

```bash
domain-designer-cli init
```

## 其他说明

- 对于每个 ts 文件内的修改，刷新页面即可看到效果

- 如果新增或者删除了 ts 文件，需要重新运行`RunWeb`脚本
