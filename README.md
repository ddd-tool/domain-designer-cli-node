# 使用方法

## 1. 安装依赖

[nodejs](https://nodejs.org/en/download/) >= 18

[pnpm](https://pnpm.io/) >= 9

- 确保有全局的`pnpm`指令

## 2. 安装本软件

```bash
pnpm i @ddd-tool/domain-designer-cli -g
```

## 3. 在一个空文件夹中初始化

```bash
domain-designer-cli init
```

- 初始化后的目录包含如下内容：

  - node_modules。为ide提供代码补全的最小.d.ts包，不包含任何实现

  - 一个示例 ts 文件。可以快速了解如何使用 ts 代码进行建模

  - RunWeb脚本。用于实时查看建模效果

## 4. 编写 ts 文件

- 可以自行创建多个任意名称的 ts 文件

- 多个 ts 文件会被 web 服务识别为多个数据源，可在web页面的设置中切换数据源

## 5. Web 端运行

- 运行自动生成的`RunWeb`脚本文件，即可启动 web 服务

## 6. 其他说明

- 对于每个 ts 文件内的修改，刷新页面即可看到效果

- 如果新增或者删除了 ts 文件，需要重新运行`RunWeb`脚本
