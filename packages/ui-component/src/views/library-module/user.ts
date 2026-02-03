import { i, d } from './util'

export const userValues = {
  用户id: i.id('userId'),
  逾期次数: i.valueObj('overdueTimes', '正整数，每当用户有逾期行为，自增1'),
  是否暂停: i.valueObj('isSuspended'),
}

export const 管理员 = d.actor('管理员')
export const 会员 = d.actor('会员')
export const 定时器 = d.actor('定时器')

const 会员账户已暂停 = d.event('UserAccountSuspended', ['userId'], '会员账户已暂停')

const 会员账户已启用 = d.event('UserAccountResumed', ['userId'], '会员账户已启用')

const 启用会员账户 = d.command(
  'ResumeAccount',
  ['userId'],
  d.note`启用会员账户
    1.会员账户当前被暂停才能启用`,
)

export const 用户聚合 = d.agg('userAgg', [
  userValues.用户id,
  userValues.是否暂停,
  userValues.逾期次数,
])

const 会员外部系统 = d.system('UserSystem', '会员外部系统')

const 会员账号已创建 = d.event(
  'UserAccountCreatedEvt',
  ['会员id : userId', '会员名'],
  '会员账号已创建',
)

export const 会员账号读模型 = d.readModel(
  'UserAccountStatsRM',
  ['会员id : userId', '会员名', '是否暂停', '累计逾期次数'],
  '会员账号读模型',
)

const 增加逾期次数 = d.command(
  'IncreaseAccountTimeOutCount',
  [userValues.用户id],
  d.note`增加逾期次数
    1.会员累计逾期达到3次暂停账户
    2.会员账户当前是启用才能被暂停`,
)

// ============================= 流程定义 =============================

const 创建会员流程 = d.startWorkflow('创建会员流程')
会员外部系统.event(会员账号已创建).readModel(会员账号读模型)

const 暂停会员流程 = d.startWorkflow('暂停会员流程')
用户聚合.event(会员账户已暂停).readModel(会员账号读模型)

const 启动会员流程 = d.startWorkflow('启动会员流程')
管理员.command(启用会员账户).agg(用户聚合).event(会员账户已启用).readModel(会员账号读模型)

const 增加逾期次数流程 = d.startWorkflow('增加逾期次数流程')
管理员.command(增加逾期次数).agg(用户聚合)

d.defineUserStory('会员管理', [创建会员流程, 暂停会员流程, 启动会员流程, 增加逾期次数流程])
