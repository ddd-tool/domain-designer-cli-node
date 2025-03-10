import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

const __d1 = (await import('D:/vscode-projects/@ddd-tool/domain-designer-cli-node/demo/example-agg')).default
const __d2 = (await import('D:/vscode-projects/@ddd-tool/domain-designer-cli-node/demo/example')).default

const data: Record<string, DomainDesigner> = {}

if (isDomainDesigner(__d1)) {
  data['example-agg'] = __d1
}
if (isDomainDesigner(__d2)) {
  data['example'] = __d2
}

export default data
