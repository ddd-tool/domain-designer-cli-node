import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

const __d1 = (await import('../../demo/示例')).default
const __d2 = (await import('./design-zh')).default
const __d3 = (await import('./design-en')).default

const data: Record<string, DomainDesigner> = {}

if (isDomainDesigner(__d1)) {
  data['示例'] = __d1
}
if (isDomainDesigner(__d2)) {
  data['design-zh'] = __d2
}
if (isDomainDesigner(__d3)) {
  data['design-en'] = __d3
}

export default data
