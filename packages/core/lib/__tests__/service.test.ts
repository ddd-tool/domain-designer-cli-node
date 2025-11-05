import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('service 糖', () => {
  const d = createDomainDesigner()
  const service = d.service('service')
  const command = service.command('command', ['field1', ['field2', '']])
  const facadeCmd = service.facadeCmd('facadeCmd', ['field1', ['field2', '']])
  const agg = service.agg('agg', ['field1', ['field2', '']])
  expect(command.inner.field1).not.toBeUndefined()
  expect(command.inner.field2).not.toBeUndefined()

  expect(facadeCmd.inner.field1).not.toBeUndefined()
  expect(facadeCmd.inner.field2).not.toBeUndefined()

  expect(agg.inner.field1).not.toBeUndefined()
  expect(agg.inner.field2).not.toBeUndefined()
})

it('toFormat', () => {
  const d = createDomainDesigner()
  const service = d.service('service')
  expect(service.toFormat()).toBe('<service>')
})
