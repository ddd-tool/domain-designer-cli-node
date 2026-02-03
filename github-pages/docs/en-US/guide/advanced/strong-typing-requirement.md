# Strongly-Typed Requirements

When business is simple, textual descriptions are sufficient to express requirements. But as business grows and iterates, and code increases, "one place changes but another is missed" becomes more likely. We spend more time checking.

At this point, leverage the `d.note` function more to make strong references to related variables in requirement descriptions, letting the TypeScript compiler share some error-checking burden.

```ts
const bookValues = {
  bookPrice: i.valueObj('price', 'Book price'),
}

const orderValues = {
  orderSequence: i.id('orderSequence', 'Order serial number'),
  quantity: i.valueObj('quantity', 'Order quantity'),
}

const OrderAgg = d.agg(
  'OrderAgg',
  [
    orderValues.orderSequence,
    d.info.valueObj(
      'FinalPrice',
      d.note`Final price = ${bookValues.bookPrice} * ${orderValues.quantity}`
    ),
  ],
  'Order aggregate'
)
```
