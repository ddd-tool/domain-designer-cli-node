import fs from 'node:fs'
import path from 'node:path'
import { readPackageSync } from 'read-pkg'

const rootDir = process.cwd()

fs.copyFileSync(path.join(rootDir, 'README.md'), path.join(rootDir, 'dist', 'README.md'))
fs.copyFileSync(path.join(rootDir, 'LICENSE'), path.join(rootDir, 'dist', 'LICENSE'))

const distPackageInfo = readPackageSync()
delete distPackageInfo._id
delete distPackageInfo.files
delete distPackageInfo.scripts
delete distPackageInfo.readme
distPackageInfo.private = false
distPackageInfo.main = 'index.umd.cjs'
distPackageInfo.module = 'index.js'

// Replace workspace: dependencies with file: relative paths for embedded distribution
if (distPackageInfo.dependencies) {
  for (const [name, version] of Object.entries(distPackageInfo.dependencies)) {
    if (version === 'workspace:^' || version === 'workspace:*' || version === 'workspace:~') {
      // Replace with file: relative path for core package
      if (name === '@ddd-tool/domain-designer-core') {
        distPackageInfo.dependencies[name] = 'file:../../core/dist'
      }
    }
  }
}

fs.writeFileSync(path.join(rootDir, 'dist', 'package.json'), JSON.stringify(distPackageInfo, null, 2))
