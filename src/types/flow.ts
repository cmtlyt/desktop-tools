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

export interface AmountDistribution {
  /** 分发金额 */
  amount: string;
  /** 分发账户 */
  account: string;
}

export interface Flow {
  /** id */
  id: string;
  /** 标题 */
  title: string;
  /** 描述 (备注) */
  desctription?: string;
  /** 状态 */
  status: FlowStatus;
  /** 列表展示的账户 */
  account: string;
  /** 总金额 */
  amount: string;
  /** 创建人 */
  creator: string;
  /** 创建时间 */
  createTime: string;
  /** 更新时间 */
  updateTime: string;
  /** 资金分发详情 */
  amountDistributions: AmountDistribution[];
}
