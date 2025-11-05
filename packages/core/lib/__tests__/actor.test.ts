import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('actor 糖', () => {
  const d = createDomainDesigner()
  const actor = d.actor('actor')

  const command = actor.command('command', ['field1', ['field2', '']])
  const facadeCmd = actor.facadeCmd('facadeCmd', ['field1', ['field2', '']])
  const readModel = actor.readModel('readModel', ['field1', ['field2', '']])

  expect(command.inner.field1).not.toBeUndefined()
  expect(command.inner.field2).not.toBeUndefined()

  expect(facadeCmd.inner.field1).not.toBeUndefined()
  expect(facadeCmd.inner.field2).not.toBeUndefined()

  expect(readModel.inner.field1).not.toBeUndefined()
  expect(readModel.inner.field2).not.toBeUndefined()
})

it('toFormat', () => {
  const d = createDomainDesigner()
  const actor = d.actor('actor')
  expect(actor.toFormat()).toBe('<actor>')
})
