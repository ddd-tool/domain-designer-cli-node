import { type DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'

const __d1 = (await import('F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/示例-聚合')).default
const __d2 = (await import('F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/示例')).default

const data: Record<string, DomainDesigner> = {}

if (isDomainDesigner(__d1)) {
  data['示例-聚合'] = __d1
}
if (isDomainDesigner(__d2)) {
  data['示例'] = __d2
}

export default data
