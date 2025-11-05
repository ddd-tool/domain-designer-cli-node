import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('event 定义', () => {
  const d = createDomainDesigner()
  const event1 = d.event('event1', ['field1', d.info.id('field2')])
  expect(event1._attributes.name).toBe('event1')
  expect(event1.inner.field1).not.toBeUndefined()
  expect(event1.inner.field2).not.toBeUndefined()

  const event2 = d.event('event2', () => ['field1', d.info.id('field2')])
  expect(event2._attributes.name).toBe('event2')
  expect(event2.inner.field1).not.toBeUndefined()
  expect(event2.inner.field2).not.toBeUndefined()
})

it('event糖', () => {
  const d = createDomainDesigner()
  const event = d.event('event', ['field1', d.info.id('field2'), ['field3', '']])
  const readModel = event.readModel('readModel', ['field1', ['field2', '']])
  const system = event.system('system')
  expect(readModel.inner.field1).not.toBeUndefined()
  expect(readModel.inner.field2).not.toBeUndefined()
  expect(typeof system._attributes.__id).toBe('string')
  expect(system._attributes.name).toBe('system')
  expect(system._attributes.note).toBeUndefined()
})

it('toFormat', () => {
  const d = createDomainDesigner()
  const event = d.event('event', ['field1', d.info.id('field2'), ['field3', '']])
  expect(event.toFormat()).toBe('<event>')
})
