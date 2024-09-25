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

export interface Flow {
  id: string;
  title: string;
  desctription?: string;
  status: FlowStatus;
  account: string;
  amount: string;
  creator: string;
  createTime: string;
  updateTime: string;
}
