import { createDomainDesigner, isDomainDesigner } from '..'
import { expect, it } from 'vitest'
import { LinkType } from '../common'
import { DomainDesignObject } from '../define'

it('注册元素', () => {
  const d = createDomainDesigner()

  // 用户
  const 用户 = d.actor('用户')
  // 聚合
  const 聚合 = d.agg('聚合', () => {
    return [d.info.id('主键')]
  })
  // 命令
  const 命令1 = d.command('命令1', [d.info.id('id')])
  const 命令2 = d.facadeCmd('命令2', [d.info.id('id')])
  // 事件
  const 事件 = d.event('事件', [聚合.inner.主键])
  // 策略
  const 策略 = d.policy('策略')
  // 服务
  const 服务 = d.service('服务')
  // 外部系统
  const 外部系统 = d.system('外部系统')
  // 读模型
  const 读模型 = d.readModel('读模型', [d.info.id('id')])

  const context = d._getContext()
  expect(context.getActors()[0]._attributes.__id).toEqual(用户._attributes.__id)
  expect(context.getCommands()[0]._attributes.__id).toEqual(命令1._attributes.__id)
  expect(context.getFacadeCommands()[0]._attributes.__id).toEqual(命令2._attributes.__id)
  expect(context.getAggs()[0]._attributes.__id).toEqual(聚合._attributes.__id)
  expect(context.getEvents()[0]._attributes.__id).toEqual(事件._attributes.__id)
  expect(context.getPolicies()[0]._attributes.__id).toEqual(策略._attributes.__id)
  expect(context.getServices()[0]._attributes.__id).toEqual(服务._attributes.__id)
  expect(context.getSystems()[0]._attributes.__id).toEqual(外部系统._attributes.__id)
  expect(context.getReadModels()[0]._attributes.__id).toEqual(读模型._attributes.__id)
})

it('连接', () => {
  const d = createDomainDesigner()
  // 用户
  const 用户 = d.actor('用户')
  // 聚合
  const 聚合 = d.agg('聚合', () => {
    return [d.info.id('主键')]
  })
  // 命令
  const 命令1 = d.command('命令1', [d.info.valueObj('id')])
  const 命令2 = d.facadeCmd('命令2', [d.info.id('id')])
  // 事件
  const 事件 = d.event('事件', [聚合.inner.主键])
  // 策略
  const 策略 = d.policy('策略')
  // 服务
  const 服务 = d.service('服务')
  // 外部系统
  const 外部系统 = d.system('外部系统')
  // 读模型
  const 读模型 = d.readModel('读模型', [d.info.id('id')])
  用户.command(命令1).agg(聚合).event(事件).policy(策略).service(服务)
  事件.system(外部系统)
  用户.facadeCmd(命令2).service(服务)
  事件.readModel(读模型)
  用户.readModel(读模型)

  const context = d._getContext()
  function checkLink(from: DomainDesignObject, to: DomainDesignObject, linkType: LinkType = 'Association') {
    expect(
      context.getLinks()[
        `${from._attributes.rule},${from._attributes.__id},${to._attributes.rule},${to._attributes.__id}`
      ]
    ).toBe(linkType)
    expect(context.getAssociationMap()[from._attributes.__id].has(to))
    expect(context.getAssociationMap()[to._attributes.__id].has(from))
    expect(
      [...context.getAssociationMap()[to._attributes.__id]].filter((i) => i._attributes.__id === from._attributes.__id)
        .length
    ).toBe(1)
    expect(
      [...context.getAssociationMap()[from._attributes.__id]].filter((i) => i._attributes.__id === to._attributes.__id)
        .length
    ).toBe(1)
  }
  checkLink(用户, 命令1)
  checkLink(命令1, 聚合)
  checkLink(聚合, 事件)
  checkLink(事件, 策略)
  checkLink(策略, 服务)
  checkLink(事件, 外部系统)
  checkLink(用户, 命令2)
  checkLink(命令2, 服务)
  checkLink(事件, 读模型, 'Aggregation')
  checkLink(用户, 读模型, 'Dependency')
})

it('命令内部字段', () => {
  const d = createDomainDesigner()
  const 主键 = d.info.id('主键')
  const 命令1 = d.command('命令', [主键])
  const 命令2 = d.facadeCmd('命令', [主键])
  expect(命令1.inner.主键).not.toBeUndefined()
  expect(命令2.inner.主键).not.toBeUndefined()
})

it('聚合内部字段', () => {
  const d = createDomainDesigner()
  const 主键 = d.info.id('主键')
  const 聚合 = d.agg('聚合', [主键])
  expect(聚合.inner.主键).not.toBeUndefined()
})

it('事件内部字段', () => {
  const d = createDomainDesigner()
  const 主键 = d.info.id('主键')
  const 事件 = d.event('事件', [主键])
  expect(事件.inner.主键).not.toBeUndefined()
})

it('定义流程', () => {
  const d = createDomainDesigner()
  const 用户 = d.actor('用户')
  const 聚合 = d.agg('聚合', [d.info.id('主键')])
  const 命令1 = d.command('命令1', [聚合.inner.主键])
  命令1.inner
  const 命令2 = d.facadeCmd('命令2', [聚合.inner.主键])
  const 成功事件 = d.event('成功事件', [聚合.inner.主键])
  const 失败事件 = d.event('失败事件', [聚合.inner.主键])
  const 成功流程 = d.startWorkflow('成功流程')
  用户.command(命令1).agg(聚合).event(成功事件)
  const 失败流程 = d.startWorkflow('失败流程')
  用户.facadeCmd(命令2).agg(聚合).event(失败事件)
  d.defineUserStory('', [成功流程, 失败流程])

  expect(d._getContext().getWorkflows().成功流程.length).toEqual(4)
  expect(d._getContext().getWorkflows().失败流程.length).toEqual(4)
})

it('designer类型判断', () => {
  const d = createDomainDesigner()
  expect(isDomainDesigner(d)).toBeTruthy()
})
