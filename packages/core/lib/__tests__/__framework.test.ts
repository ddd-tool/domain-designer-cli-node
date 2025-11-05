import { expect, it } from 'vitest'
import { createDomainDesigner } from '../index'
import { defaultOptions } from '../common'

it('测试默认配置', () => {
  const d = createDomainDesigner()
  const defOptions = defaultOptions()
  const options = d._getContext().getDesignerOptions()
  expect(options.moduleName).toBe(defOptions.moduleName)
  expect(options.ignoreValueObjects).toEqual(defOptions.ignoreValueObjects)
  expect(options.__toFormatType).toBe(defOptions.__toFormatType)
})

it('测试用户配置', () => {
  const d = createDomainDesigner({ moduleName: 'test', ignoreValueObjects: ['time'], __toFormatType: 'JSON' })
  const options = d._getContext().getDesignerOptions()
  expect(options.moduleName).toBe('test')
  expect(options.ignoreValueObjects).toEqual(['time'])
  expect(options.__toFormatType).toBe('JSON')
})

it('测试用户配置2', () => {
  const d = createDomainDesigner({ ignoreValueObjects: [...defaultOptions().ignoreValueObjects, 'sorting'] })
  const options = d._getContext().getDesignerOptions()
  expect(options.ignoreValueObjects).includes('sorting')
})
