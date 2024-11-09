import type { WebContainer } from '@webcontainer/api';
import { createStoreAndHelper } from '@/utils';
import { DEFAULT_DIRECTORY } from '../constant';
import { getWorkspaceStore } from './workspace';

interface ContainerStoreState {
  container: WebContainer | null;
  isInitialized: boolean;
}

interface ContainerStoreHandlers {
  initContainer: () => Promise<void>;
  setInitialized: (isInitialized: boolean) => void;
}

export const {
  useStore: useContainerStore,
  useStoreSlice: useContainerStoreSlice,
  getStore: getContainerStore,
} = createStoreAndHelper<ContainerStoreState & ContainerStoreHandlers>((set, get) => ({
  container: null,
  isInitialized: false,

  setInitialized(isInitialized) {
    set({ isInitialized });
  },
  async initContainer() {
    const { isInitialized } = get();
    if (isInitialized) return;
    set({ isInitialized: true });
    const { WebContainer } = await import('@webcontainer/api');
    const container = await WebContainer.boot();
    await container.mount({ [DEFAULT_DIRECTORY]: { directory: {} } });
    container.on('server-ready', (_port, url) => {
      const { addServiceUrl, setPreviewUrl } = getWorkspaceStore();
      addServiceUrl(url);
      setPreviewUrl(url);
    });
    set({ container });
  },
}));
