import { TbBrandStackoverflow } from 'react-icons/tb';
import { MdOutlineManageHistory } from 'react-icons/md';

export interface AppInfo {
  name: string;
  path: string;
  icon: React.ReactNode;
  deepMatch?: boolean;
  wrapperStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

export const appList: AppInfo[] = [
  {
    name: '流水',
    path: '/flow',
    deepMatch: true,
    icon: <TbBrandStackoverflow />,
  },
  {
    name: '日志',
    path: '/log-history',
    icon: <MdOutlineManageHistory />,
  },
];
