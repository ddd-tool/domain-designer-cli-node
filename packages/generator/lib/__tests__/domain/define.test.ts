import { expect, it } from 'vitest'
import { isStruct } from '../../domain/define'
import designer1 from '../designer-demo1'

it('isStruct', () => {
  expect(isStruct(designer1._getContext().getCommands()[0])).toBeTruthy()
  expect(isStruct(designer1._getContext().getFacadeCommands()[0])).toBeTruthy()
  expect(isStruct(designer1._getContext().getAggs()[0])).toBeTruthy()
  expect(isStruct(designer1._getContext().getEvents()[0])).toBeTruthy()
  const record = designer1._getContext().getCommands()[0].inner as Record<string, any>
  expect(isStruct(record[Object.keys(record)[0]])).toBeFalsy()
})
