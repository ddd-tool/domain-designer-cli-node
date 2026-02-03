# Conventions

## Naming

### Assign all designer instances to variable name `d` (lowercase)

```ts
const d = createDomainDesigner()
```

### If you frequently call `d.info`, assign it to variable name `i` (lowercase)

```ts
const i = d.info
```

### Variable names can be in Chinese, if you're willing

```ts
const CreateUserCommand = d.command(
  'CreateUserCommand',
  ['userName'],
  'Create user command'
)
```

:::details Why Chinese?

Main reason: Our task here is design and analysis, and we're already afraid of the same word being called two different ways. If someone later looks at this design and requirements document, and a "Chinese to English to Chinese" translation event happens, creating subtle misunderstandings would be counterproductive. Why not just use Chinese directly?

Secondary reason: TypeScript supports Chinese variable names and works fine.

:::

## Function Signatures

### All function APIs in this tool accept no more than 3 parameters

The first parameter is usually the **name**, the last parameter is an optional **note**. If the element has child elements, the second parameter is the node's **content**

For example:

```ts
// Define a value with unique id meaning,
// its name is `bookId`,
// its note is `Book ID`
d.info.id('bookId', 'Book ID')
// Define a command node,
// its name is `RegisterBookCommand`,
// its content is `isbn`, `bookName`,
// its note is `Register book command`
d.command('RegisterBookCommand', ['isbn', 'bookName'], 'Register book command')
```

## Structure

### Each ts file in the root directory is a module. These ts files **define and only define 1 designer instance**, and **default export 1 designer instance**

::: code-group

```ts [/book.ts]
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
// IMPL Design the book module
export default d
```

```ts [/user.ts]
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
const d = createDomainDesigner()
// IMPL Design the user module
export default d
```

:::

### If business becomes complex and the same module needs to be split into multiple files, use the module name as prefix and create a new folder to store the split code

::: code-group

```ts [/book.ts]
import { d } from './book-detail/common'
import './book-detail/book'
import './book-detail/order'
export default d
```

```ts [book-detail/order.ts]
import { d, i } from './book-detail/common'
// IMPL Design the order aggregate
```

```ts [book-detail/book.ts]
import { d, i } from './book-detail/common'
// IMPL Design the book aggregate
```

```ts [book-detail/common.ts]
import { createDomainDesigner } from '@ddd-tool/domain-designer-core'
export const d = createDomainDesigner()
export const i = d.info
```

:::
