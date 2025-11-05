import { readonly } from 'vue'
import { DomainDesignNote, DomainDesignNoteProvider, DomainDesignNoteInject } from './define'

export function createNoteProvider(_designCode: string): DomainDesignNoteProvider {
  function noteFn(temp: undefined): undefined
  function noteFn(temp: string): DomainDesignNote
  function noteFn(temp: DomainDesignNote): DomainDesignNote
  function noteFn(temp: TemplateStringsArray, ...values: DomainDesignNoteInject[]): DomainDesignNote
  function noteFn(
    temp: string | TemplateStringsArray | undefined | DomainDesignNote,
    ...values: DomainDesignNoteInject[]
  ): DomainDesignNote | undefined {
    if (temp === undefined) {
      return undefined
    } else if (isDomainDesignNote(temp)) {
      return temp as DomainDesignNote
    }
    let template: Readonly<TemplateStringsArray>
    if (typeof temp === 'string') {
      const arr = new Array<string>()
      arr.push(temp)
      ;(arr as any).raw = readonly([temp])
      template = readonly(arr as unknown as TemplateStringsArray)
    } else {
      template = temp
    }
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
