import type { DomainDesigner } from '@ddd-tool/domain-designer-core'
const data: Record<string, DomainDesigner> = {
  'design-zh': (await import('./design-zh')).default,
  'design-en': (await import('./design-en')).default
}

export default data
  