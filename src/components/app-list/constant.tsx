import { TbBrandStackoverflow } from 'react-icons/tb';
import { MdOutlineManageHistory } from 'react-icons/md';
import { GiGamepadCross } from 'react-icons/gi';
import { BiNotepad } from 'react-icons/bi';
// import { FaLaptopCode } from 'react-icons/fa';
import { BiVideoRecording } from 'react-icons/bi';

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
