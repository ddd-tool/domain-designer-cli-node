import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('初始化指令', () => {
  const d = createDomainDesigner()

  const command1 = d.command('command1', ['field1', d.info.valueObj('field2')])
  expect(command1._attributes.name).toBe('command1')
  expect(command1.inner.field1).not.toBeUndefined()
  expect(command1.inner.field2).not.toBeUndefined()

  const command2 = d.command('command2', () => ['field1', d.info.valueObj('field2')])
  expect(command2._attributes.name).toBe('command2')
  expect(command2.inner.field1).not.toBeUndefined()
  expect(command2.inner.field2).not.toBeUndefined()

  const facadeCmd1 = d.facadeCmd('facadeCmd1', ['field1', d.info.valueObj('field2')])
  expect(facadeCmd1._attributes.name).toBe('facadeCmd1')
  expect(facadeCmd1.inner.field1).not.toBeUndefined()
  expect(facadeCmd1.inner.field2).not.toBeUndefined()

  const facadeCmd2 = d.facadeCmd('facadeCmd2', () => ['field1', d.info.valueObj('field2')])
  expect(facadeCmd2._attributes.name).toBe('facadeCmd2')
  expect(facadeCmd2.inner.field1).not.toBeUndefined()
  expect(facadeCmd2.inner.field2).not.toBeUndefined()
})

it('command糖', () => {
  const d = createDomainDesigner()
  const command = d.command('command', [
    d.info.id('id'),
    'name1',
    ['name2', ''],
    ['name3', d.note`I am name3`],
    d.info.version('version'),
    d.info.func('func', ['a', 'b']),
    d.info.document('doc'),
  ])
  expect(command.inner.id).not.toBeUndefined()
  expect(command.inner.name1).not.toBeUndefined()
  expect(command.inner.version).not.toBeUndefined()
  expect(command.inner.func).not.toBeUndefined()
  expect(command.inner.doc).not.toBeUndefined()

  const agg = command.agg('agg', ['field1', ['field2', '']])
  expect(agg.inner.field1).not.toBeUndefined()
  expect(agg.inner.field2).not.toBeUndefined()
})

it('facadeCmd糖', () => {
  const d = createDomainDesigner()
  const facadeCmd = d.facadeCmd('facadeCmd', [
    d.info.id('id'),
    'name1',
    ['name2', ''],
    ['name3', d.note`I am name3`],
    d.info.version('version'),
    d.info.func('func', ['a', 'b']),
    d.info.document('doc'),
  ])
  const agg = facadeCmd.agg('agg', ['field1', ['field2', '']])
  expect(agg.inner.field1).not.toBeUndefined()
  expect(agg.inner.field2).not.toBeUndefined()
})

it('toFormat', () => {
  const d = createDomainDesigner()

  const command = d.command('command', ['field1', d.info.valueObj('field2')])
  expect(command.toFormat()).toBe('<command>')

  const facadeCmd = d.facadeCmd('facadeCmd', ['field1', d.info.valueObj('field2')])
  expect(facadeCmd.toFormat()).toBe('<facadeCmd>')
})
