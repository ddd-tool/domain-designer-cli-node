// noinspection NonAsciiCharacters

import { DomainDesigner } from '@ddd-tool/domain-designer-core'

// 1.可以将聚合与流程分开定义，避免代码混乱、同时也方便比较、思考各个聚合的内部信息
// 2.根据规则，只有工作空间根目录中默认导出了一个设计器实例的ts文件
// `export default <DomainDesigner>`
// 才会被识别为一个'数据源'。其他文件的内容可以自行编排
export function createOrderAgg(d: DomainDesigner) {
  const i = d.info
  const productPrice = i.valueObj('productPrice', '商品价格')
  const productQuantity = i.valueObj('productQuantity', '商品数量')
  return d.agg('orderAgg', [
    i.id('orderId'),
    'orderTime',
    ['userAccount', '用户账号'],
    productPrice,
    productQuantity,
    i.func(
      'orderAmount',
      [productPrice, productQuantity],
      d.desc`订单金额 = 商品单价${productPrice} x 商品数量${productQuantity}`
    ),
    i.version('updateTime'),
  ])
}

export function createOtherAgg(d: DomainDesigner) {
  const i = d.info
  return d.agg('otherAgg', ['otherId'])
}
