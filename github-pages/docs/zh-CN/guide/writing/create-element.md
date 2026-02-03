# 创建元素

## 信息

调用`d.info`中的函数就能创建一个信息。

实际使用时并不总是需要显式地调用函数，所有节点都接受普通的字符串作为参数，因此**只在需要特别标注时使用这些函数即可**

### id

通常表示一个聚合的 id

```ts
const 图书id = d.info.id('bookId', '图书id的备注')
```

### valueObj

普通的、没有什么特殊含义的值

```ts
const 书名 = d.info.valueObj('name', '书名')
```

### document

::: warning 实验性功能
这是一个实验性功能，目前不能确定其在业务语义上的必要性、普适性。如有意见欢迎指出
:::
表示一个文档或二进制文件类的值

```ts
d.info.document('networkPacket', '网络报文')
```

### func

::: warning 实验性功能
这是一个实验性功能，目前不能确定其在业务语义上的必要性、普适性。如有意见欢迎指出
:::
表示一个需要被函数计算出的值

```ts
const bookValues = {
  图书价格: i.valueObj('price', '图书价格'),
}
const orderValues = {
  订购数量: i.valueObj('quantity', '订购数量'),
}
d.func(
      '最终价格',
      [bookValues.图书价格, orderValues.订购数量],
      `最终价格 = 图书价格 * 订购数量`
    ),
```

### version

::: warning 实验性功能
这是一个实验性功能，目前不能确定其在业务语义上的必要性、普适性。如有意见欢迎指出
:::
表示一个具有业务意义的、表示版本的值

```ts
d.info.version(
  'wikiEntryVersion',
  `百科词条版本号，
    虽然版本号可能在技术人员眼中就是一个乐观锁字段，但它在“百科词条”中是有具体的业务意义的`
)
```

## 节点

每一个节点都对应事件风暴中的一个节点

### actor 角色

```ts
d.actor('管理员')
```

### facadeCmd 外观命令

```ts
d.facadeCmd(
  'CreateUserFacadeCmd',
  ['userName', 'email', ['gender', '性别']],
  '创建用户外观命令'
)
```

等效于

```ts
d.command(
  'CreateUserFacadeCmd',
  [
    d.info.valueObj('userName'),
    d.info.valueObj('email'),
    d.info.valueObj('gender', '性别'),
  ],
  '创建用户外观命令'
)
```

### command 命令

```ts
d.command(
  'CreateUserCmd',
  ['userName', 'email', ['gender', '性别']],
  '创建用户命令'
)
```

等效于

```ts
d.command(
  'CreateUserCmd',
  [
    d.info.valueObj('userName'),
    d.info.valueObj('email'),
    d.info.valueObj('gender', '性别'),
  ],
  '创建用户命令'
)
```

### agg 聚合

```ts
d.agg(
  'OrderAgg',
  [d.info.id('orderId'), 'orderItems', ['orderStatus', '订单状态']],
  '订单聚合'
)
```

等效于

```ts
d.agg(
  'OrderAgg',
  [
    d.info.id('orderId'),
    d.info.valueObject('orderItems'),
    d.info.valueObject('orderStatus', '订单状态'),
  ],
  '订单聚合'
)
```

### event 事件

```ts
d.event(
  'OrderPlaced',
  [d.info.id('orderSequence', '订单流水号'), 'orderItems'],
  '已下单'
)
```

等效于

```ts
d.event(
  'OrderPlaced',
  [d.info.id('orderSequence', '订单流水号'), d.info.valueObject('orderItems')],
  '已下单'
)
```

### system 系统

```ts
d.system('MailSystem', '邮件系统')
```

### service 服务

```ts
d.service('PaymentService', '支付服务')
```

### policy 策略

```ts
d.policy(
  'PaymentPolicy',
  `付款规则
    1. xxx
    2. xxx
    ...`
)
```

### readModel 读模型

```ts
d.readModel(
  'OrderDetailReadModel',
  [d.info.id('orderId'), ['orderTime', '下单时间']],
  '订单详情读模型'
)
```

等效于

```ts
d.readModel(
  'OrderDetailReadModel',
  [d.info.id('orderId'), d.info.valueObj('orderTime', '下单时间')],
  '订单详情读模型'
)
```

## 备注

通常函数的最后一个参数为可选的备注，对于需求还不复杂的情况，只需要传字符串就够了。但我们也可以选择传入 note 函数生成的**包含变量引用的备注**

如：

```ts
const i = d.info
// “权限系统”需要有换行的、条例清新的备注。所以这里使用ts字符串模板
const 权限系统 = d.system(
  'AuthorizationSystem',
  `权限系统
    有如下职责：
    1. 鉴权
    2. 认证
    3. 赋权
    ...`
)
// “用户已充值”不需要什么特别的备注，所以传入普通的字符串
const 用户已充值 = d.event('UserRecharged', [i.id('userId')], '用户已充值')
// “用户状态”和权限系统是有关联的，所以使用note函数
const 用户状态 = d.info.valueObject(
  'userStatus',
  d.note`用户状态
    用户状态并不由本系统维护，而是从${权限系统}中同步来的`
)
```
