# 强类型需求描述

在业务很简单的情况下，文字描述就足够说清楚一段需求了。但是随着业务的增长和迭代、代码越来越多，“一处变更了，但是另一处遗漏了”这种事越来越可能发生，我们就要花费更多的时间用于检查。

此时不妨多利用 `d.note` 函数，在需求描述中对相关的变量进行强引用，让 ts 编译器来分担一些排错的任务。

```ts
const bookValues = {
  图书价格: i.valueObj('price', '图书价格'),
}

const orderValues = {
  订单流水号: i.id('orderSequence', '订单流水号'),
  订购数量: i.valueObj('quantity', '订购数量'),
}

const 订单聚合 = d.agg(
  'OrderAgg',
  [
    orderValues.订单流水号,
    d.info.valueObj(
      '最终价格',
      d.note`最终价格 = ${bookValues.图书价格} * ${orderValues.订购数量}`
    ),
  ],
  '订单聚合'
)
```
