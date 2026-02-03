import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
const i = d.info

function createContextDesignerAgg() {
  return d.agg('上下文聚合', [
    ['idMap', d.note``],
    ['actors', ``],
    'commands',
    'facadeCommands',
    'aggs',
    'events',
    'systems',
    'policies',
    'services',
    'readModels',
  ])
}

const 开发者 = d.actor('开发者')
const 上下文聚合 = createContextDesignerAgg()
const 事件风暴内容 = i.func('事件风暴内容', [
  上下文聚合.inner.actors,
  上下文聚合.inner.commands,
  上下文聚合.inner.facadeCommands,
  上下文聚合.inner.aggs,
  上下文聚合.inner.events,
  上下文聚合.inner.systems,
  上下文聚合.inner.policies,
  上下文聚合.inner.services,
  上下文聚合.inner.readModels,
])

// =============================== 设计流程 ================================
const 开发者设计流程 = d.startWorkflow('开发者设计流程')
const 进行设计 = d.command('进行设计', [事件风暴内容])

const 编译通过 = d.event('编译/检查通过', [事件风暴内容])

const vue前端 = d.system('vue前端')
const 解析 = d.command('解析', [事件风暴内容])
const 得到数据结构 = d.event('得到数据结构', [['actors', '']])
开发者
  .command(进行设计)
  .agg(上下文聚合)
  .event(编译通过)
  .system(vue前端)
  .command(解析)
  .agg(上下文聚合)
  .event(得到数据结构)

d.defineUserStory('开发者对需求进行分析、迭代', [开发者设计流程])

// ================================ 代码生成 ================================
const 代码生成流程 = d.startWorkflow('代码生成流程')
const 生成代码 = d.command('生成代码', [
  ['目标平台', d.note('java/go/csharp/kotlin')],
])

开发者.command(生成代码).agg(上下文聚合)

d.defineUserStory('开发者生成代码', [代码生成流程])

export default d
