import { readonly } from 'vue'
import { DomainDesignNote, DomainDesignNoteProvider, DomainDesignNoteInject } from './types'

export function createNoteProvider(_designCode: string): DomainDesignNoteProvider {
  function noteFn(temp: undefined): undefined
  function noteFn(temp: string): DomainDesignNote
  function noteFn(temp: DomainDesignNote): DomainDesignNote // ✓ 泛型重载
  function noteFn(temp: TemplateStringsArray, ...values: DomainDesignNoteInject[]): DomainDesignNote
  function noteFn(
    temp: string | TemplateStringsArray | undefined | DomainDesignNote,
    ...values: DomainDesignNoteInject[]
  ): DomainDesignNote | undefined {
    if (temp === undefined) {
      return undefined
    } else if (isDomainDesignNote(temp)) {
      return temp
    }
    let template: Readonly<TemplateStringsArray>
    if (typeof temp === 'string') {
      const arr = new Array<string>()
      arr.push(temp)
      Object.defineProperty(arr, 'raw', {
        value: Object.freeze([temp]),
        writable: false,
      })
      template = readonly(arr) as TemplateStringsArray
    } else {
      template = temp
    }
    // const template = typeof temp === 'string' ? createTemplateFromString(temp) : temp
    return {
      _attributes: {
        rule: 'Note',
        template: template,
        inject: values,
      },
    }
  }
  return noteFn
}

function isDomainDesignNote(param: any): param is DomainDesignNote {
  return param._attributes && param._attributes.rule === 'Note'
}
