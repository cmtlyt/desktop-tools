import { MessageArgsProps } from 'antd';
import { createStoreAndHelper } from '@/utils';

interface LayoutStore {
  messageInfo: MessageArgsProps | null;
  expandAside: boolean;
  loading: boolean;
}

interface LayoutStoreActions {
  showMessage: (messageInfo: MessageArgsProps | null) => void;
  setExpandAside: (expandAside: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const {
  useStore: useLayoutStore,
  useStoreSlice: useLayoutStoreSlice,
  getStore: getLayoutStore,
} = createStoreAndHelper<LayoutStore & LayoutStoreActions>((set) => ({
  messageInfo: null,
  expandAside: true,
  loading: false,

  showMessage: (messageInfo) => set({ messageInfo }),
  setExpandAside: (expandAside) => set({ expandAside }),
  setLoading: (loading) => set({ loading }),
}));
