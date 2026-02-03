import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('agg 定义', () => {
  const d = createDomainDesigner()
  const agg1 = d.agg('agg1', ['field1', d.info.id('field2'), d.info.func('field3', ['a', 'b'])])
  expect(agg1._attributes.name).toBe('agg1')
  expect(agg1.inner.field1).not.toBeUndefined()
  expect(agg1.inner.field2).not.toBeUndefined()
  expect(agg1.inner.field3).not.toBeUndefined()

  const agg2 = d.agg('agg2', () => ['field1', d.info.id('field2'), d.info.valueObj('field3')])
  expect(agg2._attributes.name).toBe('agg2')
  expect(agg2.inner.field1).not.toBeUndefined()
  expect(agg2.inner.field2).not.toBeUndefined()
  expect(agg2.inner.field3).not.toBeUndefined()
})

it('agg糖', () => {
  const d = createDomainDesigner()
  const agg = d.agg('agg', ['field1', d.info.id('field2'), ['field3', '']])
  const event = agg.event('event', ['field1', ['field2', '']])
  expect(event.inner.field1).not.toBeUndefined()
  expect(event.inner.field2).not.toBeUndefined()
})

it('toFormat', () => {
  const d = createDomainDesigner()
  const agg = d.agg('agg', ['field1', d.info.id('field2'), ['field3', '']])
  expect(agg.toFormat()).toBe('<agg>')
})
