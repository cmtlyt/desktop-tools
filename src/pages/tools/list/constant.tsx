import { AppInfo } from '@/components/app-list/constant';
import { PuzzleIcon } from '../pht/icon';
import { DYYLPTIcon } from '../dyylpt/icon';
import { EdgeMePleaseIcon } from '../edgemeplease/icon';

export const toolList: AppInfo[] = [
  {
    name: '拼好图',
    path: './pht',
    icon: <PuzzleIcon width="80%" height="80%" />,
    private: true,
  },
  {
    name: '电影语录图',
    path: './dyylpt',
    icon: <DYYLPTIcon width="80%" height="80%" />,
  },
  {
    name: '边缘控制',
    path: './edgemeplease',
    icon: <EdgeMePleaseIcon width="80%" height="80%" />,
    private: true,
  },
];
