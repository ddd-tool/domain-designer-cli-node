// noinspection NonAsciiCharacters

import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
import type { DomainDesigner } from '@ddd-tool/domain-designer-core'

// moduleName 用于在代码生成时指定当前领域的分包名称。
// 也可以不传参数，会默认为当前文件名，所以文件名为中文的时候要指定一下
// const d = createDomainDesigner()
const d = createDomainDesigner({ moduleName: 'order' })

// 1.可以将聚合与流程分开定义，避免代码混乱、同时也方便比较、思考各个聚合的内部信息
// 2.根据规则，只有工作空间根目录中默认导出了一个设计器实例的ts文件
// `export default <DomainDesigner>`
// 才会被识别为一个'数据源'。其他文件的内容可以自行编排
export function createOrderAgg(d: DomainDesigner) {
  const i = d.info
  const productPrice = i.valueObj('productPrice', '商品价格')
  const productQuantity = i.valueObj('productQuantity', '商品数量')
  return d.agg('orderAgg', [
    i.id('orderId'),
    'orderTime',
    ['userAccount', '用户账号'],
    productPrice,
    productQuantity,
    i.func(
      'orderAmount',
      [productPrice, productQuantity],
      d.note`订单金额 = 商品单价${productPrice} x 商品数量${productQuantity}`
    ),
    'name',
    i.version('updateTime'),
  ])
}

const 商城用户 = d.actor('user', '商城用户')

// 聚合是在另一个ts文件中定义的，我们可以像普通esmodule项目一样正常写 import 和 export
const 订单聚合 = createOrderAgg(d)

// 下面的代码都是“代码即注释”，写起来、读起来不会有什么困难
// 需要注意的是：`订单聚合.inner.orderId`的写法并不表示谁依赖谁。
// 这只是为了在业务复杂的时候，表示“这里的orderId就是订单中的orderId”，原因如下：
// 1 这样写我们就可以借助ts的编译检查来辅助检查，有一定程度的完备性保证
// 2 在web端的展示中，相同的字段也能同时得到展示方面的加强（加粗闪烁等）
// 3 经过实践发现ide的智能提示可以轻松地“聚合.inner.字段”，一路“点”出来，
// 反而比再敲一遍省事，同时避免重复敲会犯错

const 邮件系统 = d.system('logisticsSystem', '邮件系统')
const 物流系统 = d.system('mailSystem', '物流系统')

const 创建订单失败流程 = d.startWorkflow('创建订单失败流程')
const 下单命令 = d.command('createOrderCommand', [订单聚合.inner.orderId, 订单聚合.inner.userAccount])
const 下单失败事件 = d.event('orderFailedEvent', [订单聚合.inner.orderId, 'time'])
商城用户.command(下单命令).agg(订单聚合).event(下单失败事件)
下单失败事件.system(物流系统)

const 创建订单成功_自动扣款失败流程 = d.startWorkflow('创建订单成功_自动扣款失败流程')
const 自动扣款命令 = d.facadeCmd('autoDeductFacadeCommand', [订单聚合.inner.orderId])
const 下单成功事件 = d.event('orderSucceedEvent', [订单聚合.inner.orderId, 订单聚合.inner.orderTime])
const 自动扣款服务 = d.service('autoDeductService', '根据支付规则进行自动扣款')
const 支付规则 = d.policy(
  'paymentPolicy',
  d.note`
如果 ${订单聚合.inner.userAccount}启用了自动扣款服务,那么开始自动扣款
规则 1:
规则 2:
规则 3:
... ...
`
)
const 订单详情读模型 = d.readModel('orderDetailReadModel', [订单聚合.inner.orderId, 订单聚合.inner.orderTime])
const 扣款失败事件 = d.event('deductFailedEvent', [订单聚合.inner.orderId, 'time'])
商城用户
  .command(下单命令)
  .agg(订单聚合)
  .event(下单成功事件)
  .policy(支付规则)
  .service(自动扣款服务)
  .facadeCmd(自动扣款命令)
  .agg(订单聚合)
  .event(扣款失败事件)
扣款失败事件.readModel(订单详情读模型)
扣款失败事件.system(物流系统)

const 创建订单成功_自动扣款成功流程 = d.startWorkflow('创建订单成功_自动扣款成功流程')
const 扣款成功事件 = d.event('deductSucceedEvent', [订单聚合.inner.orderId, 订单聚合.inner.orderTime])
商城用户
  .command(下单命令)
  .agg(订单聚合)
  .event(下单成功事件)
  .policy(支付规则)
  .service(自动扣款服务)
  .facadeCmd(自动扣款命令)
  .agg(订单聚合)
  .event(扣款成功事件)
扣款成功事件.readModel(订单详情读模型)
扣款成功事件.system(邮件系统)

d.startWorkflow('未分类流程')
商城用户.command(下单命令).agg(订单聚合).event(下单失败事件)
下单失败事件.system(物流系统)

d.startWorkflow('readModel')
const userRead = d.actor('user', 'user (read model)')
userRead.readModel(订单详情读模型)

d.defineUserStory('作为商城用户，我要下单并且实现自动扣款，以便购得心仪得商品', [
  创建订单失败流程,
  创建订单成功_自动扣款失败流程,
  创建订单成功_自动扣款成功流程,
])

d.defineUserStory('作为商城用户，我要查看订单情况，以便了解订单状态', [创建订单成功_自动扣款成功流程])

export default d
