# 同模块多聚合

在同一个模块中，出现很多互相有关系的聚合很正常。在已知业务还会快速迭代的情况下，如果我们依旧像写流水账一样，不对变量之间的关系做额外的考量，则这些代码将会很快变得难以维护。

## 推荐根据不同业务，定义不同的“常量池”

我们假定`订单`和`图书`两个聚合的业务关系非常密切。于是有了如下代码：

```ts
const d = createDomainDesigner()
const i = d.info

const 上游系统 = d.system('UpstreamSystem', '上游系统')

// 图书“常量池”
const bookValues = {
  ISBN: i.id(
    'isbn',
    `国际标注书号
      这个值作为id，能唯一确定一款图书`
  ),
  图书名称: i.valueObj('bookName', '图书名称'),
  丛书名称: i.valueObj('seriesName', '丛书名称'),
  图书价格: i.valueObj('bookPrice', '图书价格'),
}

// 订单“常量池”
const orderValues = {
  订单流水号: i.id(
    'orderSequence',
    `订单流水号
      这个值作为id，在需求调研阶段确定`
  ),
  全局流水号: i.valueObj(
    'globalSequence',
    d.note`全局流水号
      在需求调研阶段确定了，这个值由一个${上游系统}接口统一生成`
  ),
  图书集合: i.func(
    'bookSets',
    [bookValues.ISBN, bookValues.图书价格, 'count'],
    '订单集合'
  ),
}

const 新书已入库 = d.event('BookPutInStorage', [bookValues.ISBN], '新书已入库')

const 入库新书命令 = d.command(
  'PutBookInStorage',
  [bookValues.ISBN, 'time'],
  '入库新书命令'
)

const 图书聚合 = d.agg(
  'bookAgg',
  [bookValues.ISBN, bookValues.图书名称, bookValues.丛书名称],
  '订单聚合'
)

const 订单聚合 = d.agg(
  'OrderAgg',
  [i.func('商品集合', [bookValues.ISBN])],
  '订单聚合'
)
```

在这个代码片段中，我们分别定义了`bookValues`和`orderValues`两个常量池。把需要多次复用的值放进去，后面的其他节点在定义过程中，只要是相同的值就从这里取。

::: info 这样做的好处是：

- 不再需要重复定义。如果每次都定义

- 这个“常量池”同时承担了名词解释的职责。对于一些不太容易理解的名词，或者觉得团队成员在理解这个名词时容易有分歧，我们可以在这里把它尽可能描述得详细

:::

## 灵活运用 ts 本身的模块机制

我们假定 order 聚合是依赖于 book 聚合的，可以这样拆分代码：

::: code-group

```ts [/mall.ts]
import { d } from './order-detail/common'
import './order-detail/book'
import './order-detail/order'
export default d
```

```ts [/mall-detail/order.ts]
import { d, i } from './common'
import { bookValues } from './book'

const 已下单 = d.event(
  'OrderPlaced',
  [i.id('orderSequence', '订单流水号'), bookValues.ISBN],
  '已下单'
)
```

```ts [/mall-detail/book.ts]
import { d, i } from './common'

export const bookValues = {
  ISBN: i.id('isbn', '国际标准书号'),
}
const 图书聚合 = d.agg(
  'bookAgg',
  [
    /* ... */
  ],
  '图书聚合'
)
```

```ts [/mall-detail/common.ts]
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
export const d = createDomainDesigner()
export const i = d.info
```

:::
