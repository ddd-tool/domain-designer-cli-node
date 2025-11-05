import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('system 糖', () => {
  const d = createDomainDesigner()
  const system = d.system('system')
  const command = system.command('command', ['field1', ['field2', '']])
  const facadeCmd = system.facadeCmd('facadeCmd', ['field1', ['field2', '']])
  const event = system.event('event', ['field1', ['field2', '']])

  expect(command.inner.field1).not.toBeUndefined()
  expect(command.inner.field2).not.toBeUndefined()

  expect(facadeCmd.inner.field1).not.toBeUndefined()
  expect(facadeCmd.inner.field2).not.toBeUndefined()

  expect(event.inner.field1).not.toBeUndefined()
  expect(event.inner.field2).not.toBeUndefined()
})

it('toFormat', () => {
  const d = createDomainDesigner()
  const system = d.system('system')
  expect(system.toFormat()).toBe('<system>')
})
