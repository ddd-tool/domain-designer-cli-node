import { expect, it } from 'vitest'
import { createDomainDesigner } from '..'

it('字符串转换模板函数', () => {
  const d = createDomainDesigner()
  const note = d.note('default')
  const agg = d.agg('agg', [d.info.id('id')], '')
  const event = agg.event('event', [agg.inner.id], '')
  const policy = event.policy('policy', '')
  const actor = d.actor('actor', '')
  const system = d.system('system', '')
  const service = d.service('service', '')
  const infoId = d.info.id('infoId', '')
  const command = d.command('command', [agg.inner.id], '')
  const facadeCmd = d.facadeCmd('facadeCmd', [agg.inner.id], '')
  expect(note._attributes.template.reduce).instanceOf(Function)
  expect(agg._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(event._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(policy._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(actor._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(system._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(service._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(infoId._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(command._attributes.note?._attributes.template.reduce).instanceOf(Function)
  expect(facadeCmd._attributes.note?._attributes.template.reduce).instanceOf(Function)
})

it('字符串模板类型校验', () => {
  const d = createDomainDesigner()
  const agg = d.agg('agg', [d.info.id('id')])
  const event = d.event('event', [agg.inner.id])
  const policy = d.policy('policy')
  const actor = d.actor('actor')
  const system = d.system('system')
  const service = d.service('service')
  const infoId = d.info.id('infoId')
  const command = d.command('command', [agg.inner.id])
  const facadeCmd = d.facadeCmd('facadeCmd', [agg.inner.id])
  const note = d.note`
    ${agg}
    ${event}
    ${policy}
    ${actor}
    ${system}
    ${service}
    ${infoId}
    ${command}
    ${facadeCmd}
  `
  expect(note._attributes.inject.length).toEqual(9)
})
