import { AccountType, FlowCategory, FlowStatus } from '@/types/flow';
import { TObject } from '@cmtlyt/base';

export interface OptionItem {
  label: string;
  value: string;
  alias: string;
}

/** 流水类别 */
export const FLOW_CATEGORY = [
  { label: '支出', value: FlowCategory.PAY, alias: 'zhichu' },
  { label: '收入', value: FlowCategory.INCOME, alias: 'shouru' },
  { label: '网购', value: FlowCategory.NET_SHOPPING, alias: 'wanggou' },
  { label: '餐饮', value: FlowCategory.CATERING, alias: 'canyin' },
  { label: '购物', value: FlowCategory.SHOPPING, alias: 'gouwu' },
  { label: '娱乐', value: FlowCategory.ENTERTAINMENT, alias: 'yule' },
  { label: '生活', value: FlowCategory.LIFE, alias: 'shenghuo' },
  { label: '医疗', value: FlowCategory.MEDICAL, alias: 'yiliao' },
  { label: '教育', value: FlowCategory.EDUCATION, alias: 'jiaoyu' },
  { label: '转账', value: FlowCategory.TRANSFER, alias: 'zhuanzhang' },
  { label: '退款', value: FlowCategory.REFUND, alias: 'tuikuan' },
  { label: '借记', value: FlowCategory.DEBIT, alias: 'jieji' },
  { label: '工资', value: FlowCategory.SALARY, alias: 'gongzi' },
  { label: '差旅', value: FlowCategory.TRAVEL, alias: 'chuanyue' },
];

/** 流水状态 */
export const FLOW_STATUS = [
  { label: '已支付', value: FlowStatus.PAID, alias: 'yizhifu' },
  { label: '待支付', value: FlowStatus.UNPAID, alias: 'daizhifu' },
  { label: '已退款', value: FlowStatus.REFUNDED, alias: 'yituikuan' },
  { label: '已取消', value: FlowStatus.CANCELED, alias: 'yiquxiao' },
  { label: '收入', value: FlowStatus.INCOME, alias: 'shouru' },
];

/** 帐户 */
export const ACCOUNT_TYPE = [
  { label: '支付宝', value: AccountType.ALIPAY, alias: 'zhifubao' },
  { label: '微信', value: AccountType.WECHAT, alias: 'weixin' },
  { label: '银行卡', value: AccountType.BANK_CARD, alias: 'yinhangka' },
  { label: '现金', value: AccountType.CASH, alias: 'xianjin' },
  { label: '花呗', value: AccountType.HUABEI, alias: 'huabei' },
  { label: '先用后付', value: AccountType.XIAN_YONG_HOU_FU, alias: 'xianyonghoufu' },
];

function generateLabelMap<T>(list: OptionItem[]) {
  return list.reduce((dist, curr) => {
    dist[curr.value] = curr.label;
    return dist;
  }, {} as TObject<unknown>) as T;
}

export const FLOW_CATEGORY_LABEL_MAP: Record<FlowCategory, string> = generateLabelMap(FLOW_CATEGORY);

export const ACCOUNT_TYPE_LABEL_MAP: Record<AccountType, string> = generateLabelMap(ACCOUNT_TYPE);

export const FLOW_STATUS_LABEL_MAP: Record<FlowStatus, string> = generateLabelMap(FLOW_STATUS);
