import { expect, it } from 'vitest'
import { checkDomainDesigner, checkStory, checkWorkflow } from '../check'
import { createDomainDesigner } from '..'
import { match_table, match_string } from '../check/wasm'

it('wasm', async () => {
  const f = match_string('a', 'a')
  expect(f).toBe(1)
  const m = match_table(['a', 'b'], ['a', 'b'], 0.7)
  expect(m.matches.length).toBe(2)
  expect(m.matches[0].source).toBe('a')
  expect(m.matches[0].target).toBe('a')
  expect(m.matches[0].score).toBe(1)
  expect(m.matches[1].source).toBe('b')
  expect(m.matches[1].target).toBe('b')
  expect(m.matches[1].score).toBe(1)
})

it('check', async () => {
  const d = createDomainDesigner()
  const age = d.info.valueObj('age')
  const command = d.command('command', ['id', 'name', age])
  const agg = d.agg('agg', ['id', 'name', age])
  const workflow = d.startWorkflow('123')
  command.agg(agg)
  d.defineUserStory('story', [workflow])
  const result1 = await checkWorkflow(d, workflow)
  const result2 = await checkStory(d, 'story')
  const result3 = await checkDomainDesigner(d)
  expect(Object.values(result1)[0].length).toBe(2)
  expect(Object.values(result2)[0].length).toBe(2)
  expect(Object.values(result3)[0].length).toBe(2)
})

it('check 完整流程', async () => {
  const d = createDomainDesigner()

  // 用户
  const 用户 = d.actor('用户', '下单用户')

  // 聚合
  const 用户账号 = d.info.valueObj(
    '用户账号',
    d.note`用户账号的数据来自于XXX，
它包含了用户在本平台的各种权限数据以及主要增值服务的开通信息`
  )
  const 订单号 = d.info.id('订单号', d.note`订单号为业务主键，仓储可以根据它查询出全局唯一的一个订单聚合`)
  const 下单时间 = d.info.valueObj('下单时间')
  const 商品价格 = d.info.valueObj('商品价格')
  const 商品数量 = d.info.valueObj('商品数量')
  const 订单金额 = d.info.func(
    '订单金额',
    [商品价格, 商品数量],
    d.note`计算公式为【订单金额】= ${商品价格} x ${商品数量}`
  )
  const 订单聚合 = d.agg('订单聚合', [订单号, 下单时间, 用户账号, 商品价格, 商品数量, 订单金额], '这是订单聚合')

  // 命令
  const 创建订单 = d.command('创建订单', ['订单号', 用户账号])
  const 自动扣款 = d.command('自动扣款', [订单号])

  // 事件
  const 下单成功 = d.event('下单成功', [订单号, 下单时间])
  const 下单失败 = d.event('下单失败', [订单号, 下单时间])
  const 扣款成功 = d.event('扣款成功', [订单号, 下单时间])
  const 扣款失败 = d.event('扣款失败', [订单号, 下单时间])
  // 规则
  const 付款规则 = d.policy(
    '付款规则',
    d.note`
如果${用户账号}开通了自动扣费服务，则发起自动扣款
规则1：
规则2：
规则3：
... ...
  `
  )
  // 服务
  const 自动扣款服务 = d.service('自动扣款服务', '根据付款规则发起自动扣款')
  // 外部系统
  const 物流系统 = d.system('物流系统')
  const 邮件系统 = d.system('邮件系统')

  // 读模型
  const 订单详情 = d.readModel(
    '订单详情读模型',
    [订单号, 下单时间],
    d.note`${自动扣款服务}
`
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

  d.defineUserStory('作为商城用户，我要查看订单情况，以便了解订单状态', [创建订单成功_自动扣款成功流程])

  const chekcResult = checkWorkflow(d, 创建订单成功_自动扣款失败流程)
  expect(Object.values(chekcResult).length).toBe(6)
  expect(Object.values(chekcResult)[0].length).toBe(1)
  expect(Object.values(chekcResult)[1].length).toBe(0)
  expect(Object.values(chekcResult)[2].length).toBe(0)
  expect(Object.values(chekcResult)[3].length).toBe(0)
  expect(Object.values(chekcResult)[4].length).toBe(0)
  expect(Object.values(chekcResult)[5].length).toBe(0)
})
