# 代码生成

::: warning 实验性功能
这是一个实验性功能，很简陋，可能在相当长一段时间内都无法照顾到各种框架，期待大家的建议和代码贡献
:::

支持列表

- Java

- Kotlin

- C#

- Go

- TypeScript (未实现)

## 使用方式

运行工作空间中的 GenCode 脚本，跟随交互式命令进行配置

## 输出内容

我们假定项目名称为 ProjectName，工作空间为 docs 目录，目录结构如下：

```text
ProjectName
├─ docs // 工作空间
│  ├─ .output // 输出目录
│  │  ├─ esm
│  │  │  └─ example.mjs // 代码生成过程中的内部依赖文件，分别包含各模块的信息
│  │  ├─ csharp // 生成的 C# 代码
│  │  ├─ go // 生成的 Go 代码
│  │  ├─ java // 生成的 Java 代码
│  │  ├─ kotlin // 生成的 Kotlin 代码
│  │  └─ typescript // 生成的 TypeScript 代码
│  └─ ...
└─ ...

```
