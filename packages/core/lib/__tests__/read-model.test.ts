import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('read-model 定义', () => {
  const d = createDomainDesigner()
  const readModel1 = d.readModel('readModel1', ['field1', d.info.id('field2')])
  expect(readModel1._attributes.name).toBe('readModel1')
  expect(readModel1.inner.field1).not.toBeUndefined()
  expect(readModel1.inner.field2).not.toBeUndefined()

  const readModel2 = d.readModel('readModel2', () => ['field1', d.info.id('field2')])
  expect(readModel2._attributes.name).toBe('readModel2')
  expect(readModel2.inner.field1).not.toBeUndefined()
  expect(readModel2.inner.field2).not.toBeUndefined()
})

it('toFormat', () => {
  const d = createDomainDesigner()
  const readModel = d.readModel('readModel', ['field1', d.info.id('field2'), ['field3', '']])
  expect(readModel.toFormat()).toBe('<readModel>')
})
