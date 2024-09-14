import { TbBrandStackoverflow } from 'react-icons/tb';

export interface AppInfo {
  name: string;
  path: string;
  icon: React.ReactNode;
  wrapperStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

export const appList: AppInfo[] = [
  {
    name: '流水',
    path: '/flow-list',
    icon: <TbBrandStackoverflow />,
  },
];
