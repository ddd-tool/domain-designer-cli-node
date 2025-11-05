import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('policy 糖', () => {
  const d = createDomainDesigner()
  const policy = d.policy('policy')
  const command = policy.command('command', ['field1', ['field2', '']])
  const facadeCmd = policy.facadeCmd('facadeCmd', ['field1', ['field2', '']])
  const service = policy.service('service', '')
  expect(command.inner.field1).not.toBeUndefined()
  expect(command.inner.field2).not.toBeUndefined()

  expect(facadeCmd.inner.field1).not.toBeUndefined()
  expect(facadeCmd.inner.field2).not.toBeUndefined()

  expect(service._attributes.name).toBe('service')
})

it('toFormat', () => {
  const d = createDomainDesigner()
  const policy = d.policy('policy')
  expect(policy.toFormat()).toBe('<policy>')
})
