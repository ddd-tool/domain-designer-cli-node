import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()

const 参与者 = d.actor('参与者')
const 命令 = d.command('命令', ['不关心类型的信息', d.info.field.id('主键字段')])
const 事件 = d.event('事件', () => {
  const 防止作用域泄露的参数1 = d.info.field.str('防止作用域泄露的参数1')
  const 防止作用域泄露的参数2 = d.info.field.enum('防止作用域泄露的参数2', '枚举类型 1有效 2无效')
  const 防止作用域泄露的实体主键 = d.info.field.id('主键')
  const 防止作用域泄露的实体属性 = '实体属性'
  return [
    d.info.func('方法', [防止作用域泄露的参数1, 防止作用域泄露的参数2]),
    d.info.entity('实体', [防止作用域泄露的实体主键, 防止作用域泄露的实体属性]),
  ]
})
const 外部系统 = d.system('外部系统')

const 聚合 = d.agg(
  '聚合',
  [事件.inner.方法, 事件.inner.实体, 命令.inner.不关心类型的信息, 命令.inner.主键字段],
  d.desc`如果你愿意，可以在注释中使用类型安全的强引用来描述与其他元素的关系。
  如: ${参与者}可以在执行${命令}时，可选地指定${命令.inner.不关心类型的信息}字段`
)

const 工作流 = d.startWorkflow('开始一个工作流')
参与者.command(命令).agg(聚合).event(事件).system(外部系统)

d.defineUserStory('定义一个用户故事', [工作流])

export default d
