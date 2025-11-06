import fs from 'node:fs'
import path from 'node:path'

function syncVersion() {
  const rootPath = path.resolve(import.meta.dirname, '..')
  const packageInfo = JSON.parse(fs.readFileSync(path.join(rootPath, 'package.json'), 'utf-8'))
  const version = packageInfo.version
  if (!version) {
    console.error('version not found')
    process.exit(1)
  }
  fs.readdirSync(path.resolve(rootPath, 'packages')).forEach((pkgName) => {
    const pkgPath = path.resolve(rootPath, 'packages', pkgName)
    if (fs.existsSync(path.join(pkgPath, 'package.json'))) {
      const pkgInfo = JSON.parse(fs.readFileSync(path.join(pkgPath, 'package.json'), 'utf-8'))
      pkgInfo.version = version
      fs.writeFileSync(path.join(pkgPath, 'package.json'), JSON.stringify(pkgInfo, null, 2) + '\n', 'utf-8')
    }
  })
}

syncVersion()
