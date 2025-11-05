import { expect, it } from 'vitest'
import { strUtil } from '../common'

it('snakeToUpperCamel', () => {
  expect(strUtil.snakeToUpperCamel('hello_world')).toBe('HelloWorld')
})

it('camelToLowerSnake', () => {
  expect(strUtil.camelToLowerSnake('HelloWorld')).toBe('hello_world')
  expect(strUtil.camelToLowerSnake('helloWorld')).toBe('hello_world')
})

it('camelToUpperSnake', () => {
  expect(strUtil.camelToUpperSnake('HelloWorld')).toBe('HELLO_WORLD')
  expect(strUtil.camelToUpperSnake('helloWorld')).toBe('HELLO_WORLD')
})

it('stringToLowerSnake', () => {
  expect(strUtil.stringToLowerSnake('helloWorld')).toBe('hello_world')
  expect(strUtil.stringToLowerSnake('HelloWorld')).toBe('hello_world')
  expect(strUtil.stringToLowerSnake('hello_world')).toBe('hello_world')
  expect(strUtil.stringToLowerSnake('hello-world')).toBe('hello_world')
  expect(strUtil.stringToLowerSnake('hello world')).toBe('hello_world')
})

it('stringToUpperCamel', () => {
  expect(strUtil.stringToUpperCamel('helloWorld')).toBe('HelloWorld')
  expect(strUtil.stringToUpperCamel('HelloWorld')).toBe('HelloWorld')
  expect(strUtil.stringToUpperCamel('hello_world')).toBe('HelloWorld')
  expect(strUtil.stringToUpperCamel('hello-world')).toBe('HelloWorld')
  expect(strUtil.stringToUpperCamel('hello world')).toBe('HelloWorld')
})

it('stringToLowerCamel', () => {
  expect(strUtil.stringToLowerCamel('helloWorld')).toBe('helloWorld')
  expect(strUtil.stringToLowerCamel('HelloWorld')).toBe('helloWorld')
  expect(strUtil.stringToLowerCamel('hello_World')).toBe('helloWorld')
  expect(strUtil.stringToLowerCamel('hello-world')).toBe('helloWorld')
  expect(strUtil.stringToLowerCamel('hello world')).toBe('helloWorld')
})
