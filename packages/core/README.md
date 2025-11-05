# domain-designer-core

领域设计器核心库

## 关于 api 命名

- 多个单词能表示同一个意思时，选择使用频次高的

- 遵循 ts 命名规范，函数名尽量保持在 8 个字母内，保留前缀，对后缀进行缩写

- 如果缩写后的名称有明显歧义，那么干脆就不缩写了

## 功能设计

- [x] 提供一个 `createDomainDesigner` 函数，通过该函数能够实现用户在设计时的各种需求

  - [x] 内部提供可链式调用的函数

- [x] 提供一个 `checkDesigner` 函数，用于辅助检查完备性

  - [x] 内置字符串相似性算法，用于辅助检查完备性

## 关于 LinkType

- Association: 关联关系。默认实线连线，表示稳定的关系，从一个节点到下一个节点

- Dependency: 依赖关系。虚线连线，表示弱依赖关系。

- Aggregation: 聚合关系。空心菱形箭头连线，表示从部分组成整体（部分可单独存在）

- Composition: 组合关系。实心菱形箭头连线，表示从部分组成整体（部分不可单独存在，没有整体就没有部分）

## 关于 wasm

- 使用 rust 构建

```shell
cd wasm/

wasm-pack build

# -t, --target <TARGET> Sets the target environment. [possible values: bundler, nodejs, web, no-modules, deno] [default: bundler]
```
