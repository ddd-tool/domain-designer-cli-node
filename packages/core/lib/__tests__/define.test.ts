import { it, expect } from 'vitest'
import {
  DomainObjectSet,
  isAnyDomainDesignObject,
  isDomainDesignActor,
  isDomainDesignAgg,
  isDomainDesignCommand,
  isDomainDesigner,
  isDomainDesignEvent,
  isDomainDesignFacadeCommand,
  isDomainDesignInfo,
  isDomainDesignInfoFunc,
  isDomainDesignPolicy,
  isDomainDesignReadModel,
  isDomainDesignService,
  isDomainDesignSystem,
} from '../define'
import { createDomainDesigner } from '..'

it('DomainObjectSet api', () => {
  const d = createDomainDesigner()
  const set = new DomainObjectSet()
  const actor = d.actor('user')
  set.add(actor)
  expect(set.has(actor)).toBe(true)
  expect(set.getById(actor._attributes.__id))
  let count = 0
  for (const _ of set) {
    count += 1
  }
  expect(count).toBe(1)
  set.delete(actor)
  expect(set.getById(actor._attributes.__id)).toBeUndefined()
})

it('check funcs', () => {
  const d = createDomainDesigner()
  isDomainDesignInfo(d.info.id('user'))
  isDomainDesignInfoFunc(d.info.func('func'))
  isDomainDesignActor(d.actor('actor'))
  isDomainDesignAgg(d.agg('agg', [d.info.id('id')]))
  isDomainDesignCommand(d.command('command', [d.info.id('id')]))
  isDomainDesignFacadeCommand(d.facadeCmd('facadeCmd', [d.info.id('id')]))
  isDomainDesignEvent(d.event('event', [d.info.id('id')]))
  isDomainDesignPolicy(d.policy('policy'))
  isDomainDesignReadModel(d.readModel('readModel', [d.info.id('id')]))
  isDomainDesignService(d.service('service'))
  isDomainDesignSystem(d.system('system'))
  isAnyDomainDesignObject(d.command('command', [d.info.id('id')]))

  isDomainDesigner(d)
})
