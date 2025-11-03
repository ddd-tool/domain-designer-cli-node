import { describe, expect, it } from 'vitest'
import packageInfo from '../package-info'

describe('package', () => {
  it('homepage', () => {
    expect(packageInfo.homepage.startsWith('https://github.com/ddd-tool/domain-designer-cli-node')).toBeTruthy()
    expect(
      packageInfo.repository?.url?.startsWith('git+https://github.com/ddd-tool/domain-designer-cli-node')
    ).toBeTruthy()
  })
})
