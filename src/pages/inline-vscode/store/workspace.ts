import { createStoreAndHelper } from '@/utils';

interface WorkspaceStoreState {
  currentFilePath: string | null;
  serviceUrls: string[];
  previewUrl: string;
}

interface WorkspaceStoreHandlers {
  setCurrentFilePath: (path?: string) => void;
  addServiceUrl: (url: string) => void;
  removeServiceUrl: (url: string) => void;
  setPreviewUrl: (url: string) => void;
}

export const {
  useStore: useWorkspaceStore,
  useStoreSlice: useWorkspaceStoreSlice,
  getStore: getWorkspaceStore,
} = createStoreAndHelper<WorkspaceStoreState & WorkspaceStoreHandlers>((set, get) => ({
  currentFilePath: null,
  serviceUrls: [],
  previewUrl: '',

  addServiceUrl: (url) => set({ serviceUrls: [...get().serviceUrls, url] }),
  setPreviewUrl: (url) => set({ previewUrl: url }),
  removeServiceUrl: (url) => set({ serviceUrls: get().serviceUrls.filter((item) => item !== url) }),
  setCurrentFilePath: (path) => set({ currentFilePath: path }),
}));
