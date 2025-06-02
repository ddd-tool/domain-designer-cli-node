# 快速开始

## 安装

### 前置准备

- [Node.js](https://nodejs.org/zh-cn)18 及以上版本

- 一个你用起来趁手的 IDE 工具，与实际项目相同即可

使用包管理器全局安装本命令

::: code-group

```bash [npm]
npm i -g @ddd-tool/domain-designer-cli
```

```bash [pnpm]
pnpm i -g @ddd-tool/domain-designer-cli
```

```bash [yarn]
# 暂不支持 我不喜欢yarn
```

```bash [bun]
bun i -g @ddd-tool/domain-designer-cli
```

:::

再输入命令的时候会输出脚本信息，表示安装成功：

```bash
domain-designer-cli
```

```log
Repo Addr: https://github.com/ddd-tool/domain-designer-cli-node.git

Script Version: [版本号]

Usage: domain-designer-cli [options] [command]
...
...
```

### 初始化工作空间

工作空间就是一个专门存放本设计工具相关文件的一个文件夹，比如实际项目叫 ProjectName，我们新建了一个空的 docs 文件夹用于进行设计，输入如下命令即可初始化得到一个可用的工作空间：

```bash
cd ProjectName/docs
domain-designer-cli init
```

对于 linux / macOS 系统用户，需要再执行：

```bash
chmod +x *.sh
```

## 文件结构

假定项目名称为 ProjectName，工作空间为 docs 目录，工作空间的文件结构如下：

```text
ProjectName
├─ docs // 工作空间
│  ├─ .output // 代码生成输出目录，只有在执行过 GenCode 脚本后才会生成
│  │  ├─ esm
│  │  │  └─ example.mjs
│  │  ├─ csharp
│  │  │  └─ ...
│  │  ├─ go
│  │  │  └─ ...
│  │  ├─ java
│  │  │  └─ ...
│  │  ├─ kotlin
│  │  │  └─ ...
│  │  └─ ts
│  │     └─ ...
│  ├─ node_modules // 只包含帮助ide提示的.d.ts 文件，可放心加入版本控制
│  │  ├─ @ddd-tool
│  │  │  └─ ...
│  │  └─ version.txt
│  ├─ .gitignore // 默认的git忽略配置
│  ├─ example.ts // 一个示例模块
│  ├─ GenCode.(bat|sh) // 代码生成脚本
│  └─ RunWeb.(bat|sh) // 运行web脚本
└─ ...
```

## 运行 Web 服务

- 运行工作空间中的 RunWeb 脚本，等待依赖安装完成。

- 使用浏览器打开控制台中打印的地址即可。（默认地址 `http://localhost:5173/`，如果端口号已被占用，会自增）

- 对于 ts 文件内的改动，刷新页面就能生效；对于增删 ts 文件，需要重新运行 RunWeb 脚本
