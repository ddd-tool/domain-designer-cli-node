# 创建设计器

## 基本用法

```ts
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
```

## 可选的初始化参数

```ts
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner({
  moduleName: 'order',
  ignoreValueObjects: ['time', 'name'],
})
```

| 参数名             | 参数类型 |                              说明                              | 默认值                                                                                                                                                                                                                  |
| ------------------ | :------: | :------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| moduleName         |  string  |       模块名，在代码生成时，会以该名称作为代码分包的依据       | _ts 文件名_                                                                                                                                                                                                             |
| ignoreValueObjects | string[] | 忽略的值对象名称，在代码生成阶段，如果名称匹配则不会生成值对象 | [<br/>'time',<br/>'id',<br/>'pid',<br/>'name',<br/>'state',<br/>'status',<br/>'version',<br/>'code',<br/>'message',<br/>'type',<br/>'result',<br/>'data',<br/>'payload',<br/>'meta',<br/>'context',<br/>'sorting'<br/>] |

::: details 为什么有 ignoreValueObjects 这个属性？

答：在正常的设计中，要尽可能用有**业务意义**的命名去定义一个值。

如：应该是`userName`，而非`name`。

但也有例外：在`UserCreatedEvent`中有个`time`属性是正常的，因为这个 time 的业务属性很弱，我们只是需要一个时间而已，那么像这样模糊的属性名在代码生成的时候就不应该被视为值对象

:::
