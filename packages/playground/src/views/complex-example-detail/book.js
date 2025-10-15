import { i, d } from './common';
import { 管理员, 会员, userValues, 定时器, 用户聚合, 会员账号读模型, } from './user';
export const bookValues = {
    二维码: i.id('qrCode', '二维码，一书一码，业务id'),
    书名: i.valueObj('bookName'),
    ISBN: i.valueObj('isbn', '国际标准书号'),
    图片: i.valueObj('picture'),
    简介: i.valueObj('bookIntroduction'),
};
const 新书已入库 = d.event('BookPutInStorage', [
    bookValues.二维码,
    bookValues.ISBN,
    bookValues.书名,
    bookValues.图片,
    bookValues.简介,
], '新书已入库');
const 书已上架 = d.event('BookPutOnShelf', [bookValues.二维码], '书已上架');
const 书已下架 = d.event('BookPutOnShelf', [bookValues.二维码], '书已下架');
const 书已被预定 = d.event('BookReserved', [i.id('预定id'), bookValues.二维码, '预定人: userId', '预定时间'], '书已被预定');
const 预定已超时 = d.event('BookReserveTimeOut', [i.id('预定id'), bookValues.二维码, '预定人: userId'], '预定已超时');
const 预定已取消 = d.event('BookReserveCanceled', ['预定id', bookValues.二维码, '预定人: userId'], '预定已取消');
const 书已被借出 = d.event('BookBorrowedOut', ['借书id', bookValues.二维码, '借出人: userId', '借出时间', '应还书时间'], '书已被借出');
const 书已被还 = d.event('BookReturned', ['借书id', bookValues.二维码, '借出人: userId', '归还前已遗失'], '书已被还');
const 书已被遗失 = d.event('BookLost', ['借书id', bookValues.二维码, '借书人: userId'], '书已被遗失');
export const 用户还书已逾期 = d.event('UserReturnBookTimeOut', [userValues.用户id], '用户还书已逾期');
const 还书已逾期 = d.event('BookReturnTimeOut', ['借书id', '借书人: userId', bookValues.二维码], '还书已逾期');
const 入库新书 = d.command('PutBookInStorage', [
    bookValues.二维码,
    bookValues.ISBN,
    bookValues.书名,
    bookValues.图片,
    bookValues.简介,
], d.note `入库新书
    1. 二维码不能重复`);
const 上架书 = d.command('PutBookOnShelf', [bookValues.二维码], d.note `上架书
    1. 书存在且已下架才能上架`);
const 下架书 = d.command('RemoveBookFromShelf', [bookValues.二维码], d.note `下架书
    1. 书存在且已上架才能下架`);
const 预定书 = d.command('ReserveBook', [bookValues.ISBN, '预定人: userId'], d.note `预定书
    1.有可预定的书
    2.会员账户没有被暂停
    3.会员已预定或者借出的书小于3本
    4.从可预订的指定ISBN的书里随机选取`);
const 超时预定 = d.command('ReserveTimeOut', ['预定id'], d.note `超时预定
    1.当前时间离预定时间超过24小时`);
const 取消预定 = d.command('ReserveCanceled', ['预定id'], d.note `取消预定
    1.有预定，且在24小时内`);
const 借出书装饰命令 = d.facadeCmd('BorrowOut', ['借书人：userId'], d.note `借出书装饰命令
    1.会员账号没有被暂停
    2.书已上架，没有被借出，没有被预定
    3.会员已预定或者借出的书小于3本
    4.书的二维码存在`);
const 还书 = d.command('ReturnBook', [bookValues.二维码], d.note `还书
    1.书的二维码存在
    2.书已被借出或者遗失
    3.归还已遗失的书，如果时间过了1个月，也算逾期`);
const 上报遗失 = d.command('ReportLost', ['借书id'], d.note `上报遗失
    1.书存在，被借出
    2.遗失的书自动下架`);
const 逾期 = d.command('TimeOutBorrowing', ['借书id'], d.note `逾期
    1.书被借出，且1个月未还
    2.增加借书会员的逾期次数`);
const 书聚合 = d.agg('BookAgg', [bookValues.二维码], '书聚合');
const 用户占用书聚合 = d.agg('UserOcuppyBookAgg', [userValues.用户id, '占用数量'], '用户占用书聚合');
const 增加账户逾期次数规则 = d.policy('SuspendAccountWhenTimeOut', d.note `增加账户逾期次数`);
const 增加逾期次数 = d.command('IncreaseAccountTimeOutCount', [userValues.用户id], d.note `增加逾期次数
    1.会员累计逾期达到3次暂停账户
    2.会员账户当前是启用才能被暂停`);
const 下架已遗失书规则 = d.policy('RemoveBookWhenLost', d.note `下架已遗失书`);
const 上架被找回的遗失的书规则 = d.policy('PutShelfLostBook', d.note `上架被找回的遗失的书规则
    1.书被借出后遗失`);
const 下架书时取消预定规则 = d.policy('CancelReserveWhenRemoveFromShelf', '下架书时取消预定规则');
const 用户占用书规则 = d.policy('modifyUserOcuppyBookPolicy', d.note `用户占用书规则
    借出、预定占用书增加
    归还、取消预定、预定超时、遗失时占用书减少`);
const 用户占用书变化了 = d.event('UserOcuppyBookChanged', [userValues.用户id, '新占用量', '旧占用量'], '用户占用书变化了');
const 调整用户占书量 = d.command('ModifyUserOcuppyBook', [userValues.用户id, '调整值'], '调整用户占书量');
const 预定聚合 = d.agg('ReserveAgg', [i.id('预定id'), '预定时间', '预定人', bookValues.二维码, '是否有效'], '预定聚合');
const 借出聚合 = d.agg('', ['借书ID', bookValues.二维码, '上报过遗失', '是否待还书', '借出时间'], '借出聚合');
const 可预订书聚合 = d.agg('AvailableBooksAgg', [
    bookValues.ISBN,
    i.valueObj('二维码集合', d.note `${bookValues.二维码}`),
    i.func('是否包含书'),
], '可预订书聚合');
const 添加可预订书 = d.command('AddToAvailableBooksCmd', [bookValues.ISBN, bookValues.二维码], '添加可预订书');
const 移除可预订书 = d.command('RemoveFromAvailableBooksCmd', [bookValues.ISBN, bookValues.二维码], '移除可预订书');
const 书已可预订 = d.event('BookAddedToAvailableEvt', [bookValues.ISBN, bookValues.二维码], '书已可预订');
const 书已不可预订 = d.event('BookRemovedFromAvailableEvt', [bookValues.ISBN, bookValues.二维码], '书已不可预订');
const 添加可预订策略 = d.policy('AddAvailablePolicy', '添加可预订策略');
const 移除可预订策略 = d.policy('RemoveAvailablePolicy', '移除可预订策略');
const 借书服务 = d.service('BorrowBookService', d.note `借书服务
    书可预定则可借出
    书已预定时借书人是预定则可借`);
const 借出书 = d.command('BorrowOutCmd', ['借书人id', bookValues.二维码], '借出书');
const ISBN读模型 = d.readModel('ISBNStatsRM', [
    bookValues.ISBN,
    '累计借出次数',
    '当前在馆数',
    '当前借出数',
    '书名',
    '图片',
    '简介',
], 'ISBN读模型');
const ISBN每日借出数读模型 = d.readModel('ISBNDailyBorrowCountRM', [bookValues.ISBN, i.id('date'), '借出次数'], 'ISBN每日借出数');
const 借出读模型 = d.readModel('', [
    '借书id',
    bookValues.二维码,
    bookValues.ISBN,
    '书名',
    '借书人id',
    '借书人名',
    '借出时间',
    '应还书时间',
    '还书时间',
    '是否逾期',
    '是否遗失',
], '借出读模型');
// =========================== 流程定义 ===========================
const 新书入库流程 = d.startWorkflow('新书入库流程');
管理员.command(入库新书).agg(书聚合).event(新书已入库).readModel(ISBN读模型);
const 上架流程 = d.startWorkflow('上架流程');
管理员
    .command(上架书)
    .agg(书聚合)
    .event(书已上架)
    .policy(添加可预订策略)
    .command(添加可预订书)
    .agg(可预订书聚合)
    .event(书已可预订);
const 下架流程 = d.startWorkflow('下架流程');
管理员.command(下架书).agg(书聚合).event(书已下架);
书已下架
    .policy(移除可预订策略)
    .command(移除可预订书)
    .agg(可预订书聚合)
    .event(书已不可预订);
书已下架
    .policy(下架书时取消预定规则)
    .command(取消预定)
    .agg(预定聚合)
    .event(预定已取消)
    .policy(用户占用书规则)
    .command(调整用户占书量)
    .agg(用户占用书聚合)
    .event(用户占用书变化了);
d.defineUserStory('管理员对书状态进行维护', [新书入库流程, 上架流程, 下架流程]);
const 预定流程 = d.startWorkflow('预定流程');
会员.command(预定书).agg(预定聚合).event(书已被预定);
书已被预定
    .policy(用户占用书规则)
    .command(调整用户占书量)
    .agg(用户占用书聚合)
    .event(用户占用书变化了);
书已被预定
    .policy(移除可预订策略)
    .command(移除可预订书)
    .agg(可预订书聚合)
    .event(书已不可预订);
const 取消预定流程 = d.startWorkflow('取消预定流程');
会员.command(取消预定).agg(预定聚合).event(预定已取消);
预定已取消
    .policy(用户占用书规则)
    .command(调整用户占书量)
    .agg(用户占用书聚合)
    .event(用户占用书变化了);
预定已取消
    .policy(添加可预订策略)
    .command(添加可预订书)
    .agg(可预订书聚合)
    .event(书已可预订);
const 借书流程 = d.startWorkflow('借书流程');
会员.facadeCmd(借出书装饰命令).service(借书服务);
借书服务.agg(可预订书聚合).event(书已不可预订);
借书服务.command(借出书).agg(借出聚合).event(书已被借出);
书已被借出.readModel(ISBN读模型);
书已被借出.readModel(ISBN每日借出数读模型);
书已被借出.readModel(借出读模型);
书已被借出.readModel(借出读模型);
书已被借出
    .policy(用户占用书规则)
    .command(调整用户占书量)
    .agg(用户占用书聚合)
    .event(用户占用书变化了);
const 还书流程 = d.startWorkflow('还书流程');
会员.command(还书)
    .agg(借出聚合)
    .event(书已被还)
    .policy(上架被找回的遗失的书规则);
const 上报遗失流程 = d.startWorkflow('上报遗失流程');
会员.command(上报遗失)
    .agg(借出聚合)
    .event(书已被遗失)
    .policy(下架已遗失书规则)
    .command(下架书)
    .agg(书聚合)
    .event(书已下架)
    .policy(移除可预订策略)
    .command(移除可预订书)
    .agg(可预订书聚合)
    .event(书已不可预订);
d.defineUserStory('会员对书进行预定、借阅', [
    预定流程,
    取消预定流程,
    借书流程,
    还书流程,
    上报遗失流程,
]);
const 自动处理逾期流程 = d.startWorkflow('自动处理逾期流程');
定时器.command(逾期).agg(借出聚合).event(还书已逾期);
还书已逾期.readModel(借出读模型);
还书已逾期
    .policy(增加账户逾期次数规则)
    .command(增加逾期次数)
    .agg(用户聚合)
    .event(用户还书已逾期)
    .readModel(会员账号读模型);
const 自动处理预定超时流程 = d.startWorkflow('自动处理预定超时流程');
定时器.command(超时预定).agg(预定聚合).event(预定已超时);
预定已超时
    .policy(用户占用书规则)
    .command(调整用户占书量)
    .agg(用户占用书聚合)
    .event(用户占用书变化了);
预定已超时
    .policy(添加可预订策略)
    .command(添加可预订书)
    .agg(可预订书聚合)
    .event(书已可预订);
d.defineUserStory('定时任务', [自动处理预定超时流程, 自动处理逾期流程]);
//# sourceMappingURL=book.js.map