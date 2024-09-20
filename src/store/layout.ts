import { MessageArgsProps } from 'antd';
import { create } from 'zustand';

interface LayoutStore {
  messageInfo: MessageArgsProps | null;
}

interface LayoutStoreActions {
  showMessage: (messageInfo: MessageArgsProps) => void;
}

export const useLayoutStore = create<LayoutStore & LayoutStoreActions>((set) => ({
  messageInfo: null,

  showMessage: (messageInfo) => set({ messageInfo }),
}));
