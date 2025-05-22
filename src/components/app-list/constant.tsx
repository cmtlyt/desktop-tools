import { TbBrandStackoverflow } from 'react-icons/tb';
import { MdOutlineManageHistory } from 'react-icons/md';
import { GiGamepadCross } from 'react-icons/gi';
import { BiNotepad } from 'react-icons/bi';
// import { FaLaptopCode } from 'react-icons/fa';
import { BiVideoRecording } from 'react-icons/bi';
import { ToolIcon } from '@/pages/tools/icon';

export interface AppInfo {
  name: string;
  path: string;
  private?: boolean;
  icon: React.ReactNode;
  hide?: boolean;
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
    name: '游戏',
    path: '/game-center',
    deepMatch: true,
    icon: <GiGamepadCross />,
  },
  {
    name: '笔记',
    path: '/notepad',
    deepMatch: true,
    icon: <BiNotepad />,
  },
  {
    name: '工具',
    path: '/tools',
    deepMatch: true,
    icon: <ToolIcon width={24} height={24} />,
  },
  // {
  //   name: 'Code',
  //   path: '/inline-vscode',
  //   icon: <FaLaptopCode />,
  // },
  {
    name: '录制',
    path: '/recorder',
    deepMatch: true,
    icon: <BiVideoRecording />,
  },
  {
    name: '日志',
    path: '/log-history',
    icon: <MdOutlineManageHistory />,
  },
];
