# 约定标准

## 命名

### 所有的设计器实例都赋值给变量名`d`（小写字母）

```ts
const d = createDomainDesigner()
```

### 如需要频繁调用`d.info`函数，则将这个函数赋值给变量名`i`（小写字母）

```ts
const i = d.info
```

### 变量名可以用中文，只要你愿意

```ts
const 创建用户命令 = d.command(
  'CreateUserCommand',
  ['userName'],
  '创建用户命令'
)
```

:::details 为啥用中文？
主要原因是：我们这里的任务是设计与分析，本来就很害怕把同一个词搞出两个叫法。如果事后有人看着这个设计图和需求文档，阴差阳错地发生了“中译英译中”的事件，又产生了什么微妙的误解反而得不偿失，为什么不直接用中文呢。

次要原因是：ts 能支持中文变量名，而且用起来没什么问题
:::

## 函数签名

### 在本工具的 api 设计方面，所有函数接受的参数都不大于 3 个

第一个参数通常是**名称**、最后一个参数通常是可选的**备注**、、如果该元素有子元素那么第二个参数就是节点的**内容**

如：

```ts
// 定义一个有唯一id意义的值，
// 它的名称是`bookId`，
// 它的备注是`图书id`
d.info.id('bookId', '图书id')
// 定义一个command节点，
// 它的名称是`RegisterBookCommand`，
// 它的内容是`isbn`、`bookName`，
// 它的备注是`注册图书命令`
d.command('RegisterBookCommand', ['isbn', 'bookName'], '注册图书命令')
```

## 结构

### 根目录下的每一个 ts 文件各自就是一个模块。这些 ts 文件中，都**定义且仅定义 1 个设计器实例**，同时**默认导出 1 个设计器实例**

::: code-group

```ts [/book.ts]
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
// IMPL 进行图书模块的设计
export default d
```

```ts [/user.ts]
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
// IMPL 进行用户模块的设计
export default d
```

:::

### 如果随着业务变得复杂，同一个模块需要拆分为多个文件，则以模块名作为前缀，新建一个文件夹来存放拆分后的代码

::: code-group

```ts [/book.ts]
import { d } from './book-detail/common'
import './book-detail/book'
import './book-detail/order'
export default d
```

```ts [book-detail/order.ts]
import { d, i } from './book-detail/common'
// IMPL 进行订单聚合的设计
```

```ts [book-detail/book.ts]
import { d, i } from './book-detail/common'
// IMPL 进行图书聚合的设计
```

```ts [book-detail/common.ts]
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
export const d = createDomainDesigner()
export const i = d.info
```

:::
