import fs from 'fs'
import path from 'path'
import { readPackageSync } from 'read-pkg'

const rootDir = process.cwd()

const packageJsons = readPackageSync()
const publishPackageInfo = {
  ...packageJsons,
  private: false,
  module: 'index.js',
}
delete publishPackageInfo.scripts
delete publishPackageInfo.readme
delete publishPackageInfo.files
delete publishPackageInfo.devDependencies
delete publishPackageInfo._id

fs.writeFileSync(path.join(rootDir, 'dist', 'package.json'), JSON.stringify(publishPackageInfo, null, 2), 'utf8')

fs.writeFileSync(
  path.join(rootDir, 'dist', 'check', 'package.json'),
  JSON.stringify(
    {
      main: './index.mjs',
      module: './index.mjs',
      types: './index.d.ts',
    },
    null,
    2
  ),
  'utf8'
)

fs.copyFileSync(path.join(rootDir, 'README.md'), path.join(rootDir, 'dist', 'README.md'))

console.log('Package.json files generated for publish package.')
