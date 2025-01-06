import log from '@/utils/log'
import fs from 'fs'
import path from 'path'
import { GenCodeCommandArgs } from './define'
import { spawnSync } from 'child_process'
import { DomainDesigner, isDomainDesigner } from '@ddd-tool/domain-designer-core'
import { useGeneratorAgg, GeneratorPliginHelper, GENERATOR_JAVA_PLUGIN } from '@ddd-tool/domain-designer-generator'

export default async function (args: Required<GenCodeCommandArgs>) {
  const webRoot = args.webRoot
  const sourcePath = args.source
  const packageManager = process.env.PACKAGE_MANAGER!

  spawnSync(`pnpx zx ${webRoot.replace('\\', '/')}/scripts/build-ts.mjs ${sourcePath}`, {
    encoding: 'utf-8',
    stdio: 'inherit',
    shell: true,
  })
  log.printSuccess('构建成功')

  const files = fs.readdirSync(`${sourcePath.replace('\\', '/')}/.output/esm`)

  let agg: ReturnType<typeof useGeneratorAgg>
  let pluginLoaded = false

  for (const file of files) {
    const m = await import(`file://${sourcePath.replace('\\', '/')}/.output/esm/${file}`)
    if (!isDomainDesigner(m.default)) {
      continue
    }
    const designer = m.default as DomainDesigner
    if (!pluginLoaded) {
      GeneratorPliginHelper.registerPlugin(GENERATOR_JAVA_PLUGIN)
      pluginLoaded = true
    }
    agg = useGeneratorAgg(designer)
    agg.commands.setContext(args.context)
    const codeFiles = agg.commands.genCodeFiles()
    for (const codeFile of codeFiles) {
      const p = path.join(sourcePath, '.output', args.language, ...codeFile.getParentDir())
      fs.writeFileSync(path.join(p, codeFile.getName()), codeFile.getContent(), 'utf-8')
    }
  }
}
