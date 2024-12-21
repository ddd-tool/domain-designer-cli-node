import { createDomainDesigner } from '@ddd-tool/domain-designer-core'

const d = createDomainDesigner()
const i = d.info

// user
const user = d.actor('user', 'order user')

// aggregation
const userAccount = i.valueObj('userAccount')
const orderId = i.id('orderId')
const orderTime = i.valueObj('orderTime')
const productPrice = i.valueObj('productPrice')
const productQuantity = i.valueObj('productQuantity')
const orderAmount = d.info.func('orderAmount', [productPrice, productQuantity])
const orderAggregation = d.agg(
  'orderAggregation',
  [orderId, orderTime, userAccount, productPrice, productQuantity, orderAmount],
  'this is order aggregation'
)

// command
const createOrder = d.command('createOrder', [orderAggregation.inner.orderId, userAccount])
const autoDeduct = d.command('autoDeduct', [orderId])

// event
const orderSuccess = d.event('orderSuccess', [orderId, orderTime])
const orderFailure = d.event('orderFailure', [orderId, orderTime])
const deductSuccess = d.event('deductSuccess', [orderId, orderTime])
const deductFailure = d.event('deductFailure', [orderId, orderTime])
// rule
const paymentRule = d.policy(
  'paymentRule',
  d.desc`
if ${userAccount} has opened the automatic payment service, then automatic payment is initiated
rule 1:
rule 2:
rule 3:
... ...
  `
)
// service
const autoDeductService = d.service('autoDeductService', 'initiate automatic payment based on payment rule')
// external system
const logisticsSystem = d.system('logisticsSystem')
const mailSystem = d.system('mailSystem')

// read model
const orderDetail = d.readModel('orderDetailReadModel', [orderId, orderTime])

const createOrderFailureWorkflow = d.startWorkflow('createOrderFailure')
user.command(createOrder).agg(orderAggregation).event(orderFailure)
orderFailure.system(mailSystem)

const createOrderSuccess_AutoDeductFailureWorkflow = d.startWorkflow('createOrderSuccess_AutoDeductFailure')
user
  .command(createOrder)
  .agg(orderAggregation)
  .event(orderSuccess)
  .policy(paymentRule)
  .service(autoDeductService)
  .command(autoDeduct)
  .agg(orderAggregation)
  .event(deductFailure)
deductFailure.readModel(orderDetail)
deductFailure.system(mailSystem)

const createOrderSuccess_AutoDeductSuccessWorkflow = d.startWorkflow('createOrderSuccess_AutoDeductSuccess')
user
  .command(createOrder)
  .agg(orderAggregation)
  .event(orderSuccess)
  .policy(paymentRule)
  .service(autoDeductService)
  .command(autoDeduct)
  .agg(orderAggregation)
  .event(deductSuccess)
deductSuccess.readModel(orderDetail)
deductSuccess.system(logisticsSystem)

d.startWorkflow('unclassifiedWorkflow')
user.command(createOrder).agg(orderAggregation).event(orderFailure)
orderFailure.system(mailSystem)

d.startWorkflow('readModel')
const userRead = d.actor('user', 'user (read model)')
userRead.readModel(orderDetail)

d.defineUserStory('as a mall user, I want to place an order and implement automatic payment to get the goods', [
  createOrderFailureWorkflow,
  createOrderSuccess_AutoDeductFailureWorkflow,
  createOrderSuccess_AutoDeductSuccessWorkflow,
])

d.defineUserStory('as a mall user, I want to view the order status, so I can know the order status', [
  createOrderSuccess_AutoDeductSuccessWorkflow,
])

export default d
