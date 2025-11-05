import { expect, it } from 'vitest'
import designer1 from './designer-demo1'
import { useGeneratorAgg, GENERATOR_KOTLIN_PLUGIN, GeneratorPliginHelper } from '..'
import { kotlin } from '../domain/define'

it('designer1', () => {
  const agg = useGeneratorAgg(designer1)
  GeneratorPliginHelper.registerPlugin(GENERATOR_KOTLIN_PLUGIN)
  const context: kotlin.KotlinContext = {
    additions: new Set([
      kotlin.KotlinGeneratorAddition.CommandHandler,
      kotlin.KotlinGeneratorAddition.ValueClass,
      kotlin.KotlinGeneratorAddition.Timezone,
    ]),
    // additions: new Set([kotlin.KotlinGeneratorAddition.CommandHandler]),
    moduleName: designer1._getContext().getDesignerOptions().moduleName || 'test',
    namespace: 'com.github.example',
  }
  agg.commands.setContext(context)
  const files = agg.commands.genCodeFiles()
  // expect(files).toBe(1)
  // expect(files.filter((i) => i.getName().endsWith('DeductFailedEvent.kt'))).toBe(1)
})

it('designer1-ignoredValueObjects1', () => {
  const agg = useGeneratorAgg(designer1)
  GeneratorPliginHelper.registerPlugin(GENERATOR_KOTLIN_PLUGIN)
  const context: kotlin.KotlinContext = {
    additions: new Set([kotlin.KotlinGeneratorAddition.CommandHandler, kotlin.KotlinGeneratorAddition.ValueClass]),
    moduleName: designer1._getContext().getDesignerOptions().moduleName || 'test',
    namespace: 'com.github.example',
  }
  agg.commands.setContext(context)
  const files = agg.commands.genCodeFiles()
  expect(files.filter((i) => i.getName() === 'Time.java').length).toBe(0)
  expect(
    files
      .filter((i) => i.getName() === 'DeductFailedEvent.kt')[0]
      .getContent()
      .includes('time: LocalDateTime')
  ).toBeTruthy()
  expect(
    files
      .filter((i) => i.getName() === 'DeductFailedEvent.kt')[0]
      .getContent()
      .includes('import java.time.LocalDateTime')
  ).toBeTruthy()
})
