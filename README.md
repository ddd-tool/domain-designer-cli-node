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

## 4. 编写 ts 文件

- 可以自行创建多个任意名称的 ts 文件
- 多个 ts 文件会被 web 服务识别为多个数据源，可在视图中切换数据源

## 5. Web 端运行

- 运行自动生成的`RunWeb`脚本文件，即可启动 web 服务

## 6. 其他说明

- 对于 ts 文件内的修改，刷新页面即可看到效果
- 如果新增或者删除了 ts 文件，需要重新运行`RunWeb`脚本
