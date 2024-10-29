import { AppInfo } from '@/components/app-list/constant';
import { SBWDIcon } from '../sbwd/icon';
import { ELSFKIcon } from '../elsfk/icon';

export const gameList: AppInfo[] = [
  {
    name: '十步万度',
    path: './sbwd',
    icon: <SBWDIcon />,
  },
  {
    name: '俄罗斯方块',
    path: './elsfk',
    icon: <ELSFKIcon />,
  },
];
