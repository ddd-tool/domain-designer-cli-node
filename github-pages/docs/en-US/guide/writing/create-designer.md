# Creating a Designer

## Basic Usage

```ts
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
```

## Optional Initialization Parameters

```ts
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner({
  moduleName: 'order',
  ignoreValueObjects: ['time', 'name'],
})
```

| Parameter         |   Type   |                              Description                              | Default                                                                                                                                                                                                                  |
| ----------------- | :------: | :---------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| moduleName        |  string  | Module name, used as the basis for code packaging during code generation | _ts filename_                                                                                                                                                                                                            |
| ignoreValueObjects | string[] | Ignored value object names. If names match during code generation, value objects won't be generated | [<br/>'time',<br/>'id',<br/>'pid',<br/>'name',<br/>'state',<br/>'status',<br/>'version',<br/>'code',<br/>'message',<br/>'type',<br/>'result',<br/>'data',<br/>'payload',<br/>'meta',<br/>'context',<br/>'sorting'<br/>] |

::: details Why is there an ignoreValueObjects property?

Answer: In normal design, we should use names with **business meaning** to define values.

For example: it should be `userName`, not just `name`.

But there are exceptions: in `UserCreatedEvent`, having a `time` attribute is normal because this time has weak business attributes - we just need a time value. Such vague attribute names shouldn't be treated as value objects during code generation.

:::
