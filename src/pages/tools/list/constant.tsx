import { AppInfo } from '@/components/app-list/constant';
import { PuzzleIcon } from '../pht/icon';

export const toolList: AppInfo[] = [
  {
    name: '拼好图',
    path: './pht',
    icon: <PuzzleIcon width="80%" height="80%" />,
    private: true,
  },
];
