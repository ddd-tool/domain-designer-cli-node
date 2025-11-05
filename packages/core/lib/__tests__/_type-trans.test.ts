import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'
import exp from 'constants'

it('', () => {
  const d = createDomainDesigner()
  const 命令 = d.command('命令', [
    d.info.document('a'),
    d.info.func('b1'),
    d.info.func('b2', ['param1']),
    d.info.id('c'),
    'd1',
    d.info.valueObj('d2'),
    d.info.valueObj('d3', d.note`field2`),
    d.info.version('e'),
  ])
  expect(命令.inner.a._attributes.name).toBe('a')
  expect(命令.inner.b1._attributes.name).toBe('b1')
  expect(命令.inner.b1._attributes.subtype.length).toBe(0)
  expect(命令.inner.b2._attributes.name).toBe('b2')
  expect(命令.inner.b2._attributes.subtype.length).toBe(1)
  expect(命令.inner.c._attributes.name).toBe('c')
  expect(命令.inner.d1._attributes.name).toBe('d1')
  expect(命令.inner.d1._attributes.subtype).toBe('None')
  expect(命令.inner.d2._attributes.name).toBe('d2')
  expect(命令.inner.d2._attributes.subtype).toBe('None')
  expect(命令.inner.d3._attributes.name).toBe('d3')
  expect(命令.inner.d3._attributes.subtype).toBe('None')
  expect(命令.inner.e._attributes.name).toBe('e')

  const 事件 = d.event('事件', ['中文， 【 ? 事件'])
  expect(事件.inner['中文， 【 ? 事件']._attributes.name).toBe('中文， 【 ? 事件')

  const 聚合 = d.agg('聚合', ['id', d.info.valueObj('name')])
  expect(聚合.inner.id._attributes.name).toBe('id')
  expect(聚合.inner.name._attributes.name).toBe('name')

  const actor = d.actor('actor')
  const command = actor.command('命令', ['a1', d.info.valueObj('a2')])
  expect(command.inner.a1._attributes.name).toBe('a1')
  expect(command.inner.a2._attributes.name).toBe('a2')
  const agg = command.agg('聚合', ['b1', d.info.valueObj('b2'), d.info.func('b3', ['b4', d.info.valueObj('b5')])])
  expect(agg.inner.b1._attributes.name).toBe('b1')
  expect(agg.inner.b2._attributes.name).toBe('b2')
  expect(agg.inner.b3._attributes.name).toBe('b3')
  const event = agg.event('事件', ['c1', d.info.valueObj('c2')])
  expect(event.inner.c1._attributes.name).toBe('c1')
  expect(event.inner.c2._attributes.name).toBe('c2')
})
