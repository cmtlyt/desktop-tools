export enum FlowStatus {
  /** 已支付 */
  PAID = 'PAID',
  /** 待支付 */
  UNPAID = 'UNPAID',
  /** 已退款 */
  REFUNDED = 'REFUNDED',
  /** 已取消 */
  CANCELED = 'CANCELED',
  /** 收入 */
  INCOME = 'INCOME',
}

export enum AccountType {
  /** 支付宝 */
  ALIPAY = 'ALIPAY',
  /** 微信 */
  WECHAT = 'WECHAT',
  /** 银行卡 */
  BANK_CARD = 'BANK_CARD',
  /** 现金 */
  CASH = 'CASH',
  /** 花呗 */
  HUABEI = 'HUABEI',
  /** 先用后付 */
  XIAN_YONG_HOU_FU = 'XIAN_YONG_HOU_FU',
}

export enum FlowCategory {
  /** 支出 */
  PAY = 'PAY',
  /** 收入 */
  INCOME = 'INCOME',
  /** 网购 */
  NET_SHOPPING = 'NET_SHOPPING',
  /** 餐饮 */
  CATERING = 'CATERING',
  /** 购物 */
  SHOPPING = 'SHOPPING',
  /** 娱乐 */
  ENTERTAINMENT = 'ENTERTAINMENT',
  /** 生活 */
  LIFE = 'LIFE',
  /** 医疗 */
  MEDICAL = 'MEDICAL',
  /** 教育 */
  EDUCATION = 'EDUCATION',
  /** 转账 */
  TRANSFER = 'TRANSFER',
  /** 退款 */
  REFUND = 'REFUND',
  /** 借记 */
  DEBIT = 'DEBIT',
  /** 工资 */
  SALARY = 'SALARY',
  /** 差旅 */
  TRAVEL = 'TRAVEL',
}

export interface AmountDistribution {
  /** 分发金额 */
  amount: string;
  /** 分发账户 */
  account: AccountType;
  /** 备注 */
  remark?: string;
}

export interface Flow {
  /** id */
  id: string;
  /** 标题 */
  title: string;
  /** 描述 (备注) */
  desctription?: string;
  /** 类别 */
  category: FlowCategory;
  /** 状态 */
  status: FlowStatus;
  /** 列表展示的账户 */
  account: AccountType;
  /** 总金额 */
  amount: string;
  /** 创建人 */
  creator: string;
  /** 创建时间 */
  createTime: number;
  /** 更新时间 */
  updateTime: number;
  /** 资金分发详情 */
  amountDistributions: AmountDistribution[];
}

export interface EditorFlow {
  title: string;
  desctription?: string;
  category: FlowCategory;
  status: FlowStatus;
  amountDistributions: AmountDistribution[];
}
