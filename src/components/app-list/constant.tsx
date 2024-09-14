import { TbHomeFilled } from 'react-icons/tb';

export interface AppInfo {
  name: string;
  path: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
  styleText?: string;
}

export const appList: AppInfo[] = [
  {
    name: '流水',
    path: '/flow-list',
    icon: <TbHomeFilled />,
  },
];
