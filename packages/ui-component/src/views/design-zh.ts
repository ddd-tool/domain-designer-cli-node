import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
const i = d.info

// 用户
const 用户 = d.actor('用户', '下单用户')
const 卖家 = d.actor('卖家', '商铺老板')

// 聚合
const 订单聚合 = d.agg(
  '订单聚合',
  () => {
    const 商品价格 = i.valueObj('商品价格')
    const 商品数量 = i.valueObj('商品数量')
    return [
      ['订单号', d.note`订单号为业务主键，仓储可以根据它查询出全局唯一的一个订单聚合`],
      '下单时间',
      [
        '用户账号',
        `用户账号的数据来自于XXX，
它包含了用户在本平台的各种权限数据以及主要增值服务的开通信息`,
      ],
      商品价格,
      商品数量,
      i.func(
        '订单金额',
        [商品价格, 商品数量],
        d.note`计算公式为【订单金额】= ${商品价格} x ${商品数量}`,
      ),
    ]
  },
  '这是订单聚合',
)

// 命令
const 创建订单 = d.command('创建订单', [订单聚合.inner.订单号, 订单聚合.inner.用户账号])
const 自动扣款 = d.command('自动扣款', [订单聚合.inner.订单号])

// 事件
const 下单成功 = d.event('下单成功', [订单聚合.inner.订单号, 订单聚合.inner.下单时间])
const 下单失败 = d.event('下单失败', [订单聚合.inner.订单号, 订单聚合.inner.下单时间])
const 扣款成功 = d.event('扣款成功', [订单聚合.inner.订单号, 订单聚合.inner.下单时间])
const 扣款失败 = d.event('扣款失败', [订单聚合.inner.订单号, 订单聚合.inner.下单时间])
// 规则
const 付款规则 = d.policy(
  '付款规则',
  d.note`
如果${订单聚合.inner.用户账号}开通了自动扣费服务，则发起自动扣款
规则1：
规则2：
规则3：
... ...
  `,
)
// 服务
const 自动扣款服务 = d.service('自动扣款服务', '根据付款规则发起自动扣款')
// 外部系统
const 物流系统 = d.system('物流系统')
const 邮件系统 = d.system('邮件系统')

// 读模型
const 订单详情 = d.readModel(
  '订单详情读模型',
  [订单聚合.inner.订单号, 订单聚合.inner.下单时间],
  d.note`${自动扣款服务}
`,
)

const 创建订单失败流程 = d.startWorkflow('创建订单失败')
用户.command(创建订单).agg(订单聚合).event(下单失败)
下单失败.system(邮件系统)

const 创建订单成功_自动扣款失败流程 = d.startWorkflow('创建订单成功，自动扣款失败')
用户.command(创建订单)
  .agg(订单聚合)
  .event(下单成功)
  .policy(付款规则)
  .service(自动扣款服务)
  .command(自动扣款)
  .agg(订单聚合)
  .event(扣款失败)
扣款失败.readModel(订单详情)
扣款失败.system(邮件系统)

const 创建订单成功_自动扣款成功流程 = d.startWorkflow('创建订单成功，自动扣款成功')
用户.command(创建订单)
  .agg(订单聚合)
  .event(下单成功)
  .policy(付款规则)
  .service(自动扣款服务)
  .command(自动扣款)
  .agg(订单聚合)
  .event(扣款成功)
扣款成功.readModel(订单详情)
扣款成功.system(物流系统)

d.startWorkflow('未归纳流程')
用户.command(创建订单).agg(订单聚合).event(下单失败)
下单失败.system(邮件系统)

d.startWorkflow('读模型')
const 用户读 = d.actor('用户', '用户(读模型)')
用户读.readModel(订单详情)

d.defineUserStory('作为商城用户，我要下单并且实现自动扣款，以便购得心仪得商品', [
  创建订单失败流程,
  创建订单成功_自动扣款失败流程,
  创建订单成功_自动扣款成功流程,
])

const 商品聚合 = d.agg(
  '商品聚合',
  [i.id('商品编号'), '商品名称', '商品单价', '上架时间', '商家名称', '商品状态'],
  '这是商品聚合',
)

const 上架商品 = d.command('上架商品', [商品聚合.inner.商品编号])
const 下架商品 = d.command('下架商品', [商品聚合.inner.商品编号])

const 上架成功 = d.event('上架成功', [商品聚合.inner.商品编号, 商品聚合.inner.上架时间])
const 上架失败 = d.event('上架失败', [商品聚合.inner.商品编号])

const 商家上架商品流程 = d.startWorkflow('商家上架商品流程')
卖家.command(上架商品).agg(商品聚合).event(上架成功)

const 商家下架商品流程 = d.startWorkflow('商家下架商品流程')
卖家.command(下架商品).agg(商品聚合).event(上架失败)

d.defineUserStory('卖家对商品进行上架、下架操作', [商家上架商品流程, 商家下架商品流程])

const 外部系统触发下单失败流程 = d.startWorkflow('外部系统触发下单失败流程')
物流系统.event(下单失败).readModel(订单详情)

d.defineUserStory('外部系统调用', [外部系统触发下单失败流程])

export default d
