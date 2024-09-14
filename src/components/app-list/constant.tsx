export interface AppInfo {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const appList: AppInfo[] = [
  {
    name: '流水',
    path: '/flow-list',
    icon: 'icon-flow',
  },
];
