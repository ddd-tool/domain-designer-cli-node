import type { DomainDesigner } from '@ddd-tool/domain-designer-core'

const data: Record<string, DomainDesigner> = {
  user: (await import('F:/idea_projects/oneboot/.sdk/uml/demo/user.ts')).default,
  'design-zh': (await import('./design-zh')).default,
  'design-en': (await import('./design-en')).default,
  'design-en2': (await import('./design-en')).default,
  'design-en3': (await import('./design-en')).default,
  'design-en4': (await import('./design-en')).default,
  'design-en5': (await import('./design-en')).default,
  'design-en6': (await import('./design-en')).default,
  'design-en7': (await import('./design-en')).default,
  'design-en8': (await import('./design-en')).default,
  'design-en9': (await import('./design-en')).default,
  'design-en0': (await import('./design-en')).default,
  'design-en11': (await import('./design-en')).default,
  'design-en22': (await import('./design-en')).default,
  'design-en33': (await import('./design-en')).default,
  'design-en44': (await import('./design-en')).default,
  'design-en55': (await import('./design-en')).default,
  'design-en66': (await import('./design-en')).default,
  'design-en77': (await import('./design-en')).default,
  'design-en88': (await import('./design-en')).default,
  'design-en99': (await import('./design-en')).default,
  'design-en00': (await import('./design-en')).default,
  'design-en111': (await import('./design-en')).default,
  'design-en222': (await import('./design-en')).default,
  'design-en333': (await import('./design-en')).default,
}

export default data
