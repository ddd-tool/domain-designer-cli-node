import type { DomainDesigner } from '@ddd-tool/domain-designer-core'
const data: Record<string, DomainDesigner> = {
  '示例': (await import('F:/vscode_projects/@ddd-tool/domain-designer-cli-node/demo/示例')).default,
}

export default data
  