import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

const __d1 = (await import('D:/vscode-projects/@ddd-tool/domain-designer-cli-node/demo/complex-example')).default
const __d2 = (await import('D:/vscode-projects/@ddd-tool/domain-designer-cli-node/demo/simple-example')).default

const data: Record<string, DomainDesigner> = {}

if (isDomainDesigner(__d1)) {
  data['complex-example'] = __d1
}
if (isDomainDesigner(__d2)) {
  data['simple-example'] = __d2
}

export default data
