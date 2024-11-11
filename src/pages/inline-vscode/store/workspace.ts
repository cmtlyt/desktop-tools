import { createStoreAndHelper } from '@/utils';

interface WorkspaceStoreState {
  currentFilePath: string | null;
  serviceUrls: string[];
  previewUrl: string;
  openPaths: Record<string, string>;
}

interface WorkspaceStoreHandlers {
  setCurrentFilePath: (path?: string) => void;
  addServiceUrl: (url: string) => void;
  removeServiceUrl: (url: string) => void;
  setPreviewUrl: (url: string) => void;
  addOpenPath: (paths: string) => void;
  closeOpenPath: (path: string) => void;
}

function getFileName(path?: string) {
  return path?.split('/').pop();
}

export const {
  useStore: useWorkspaceStore,
  useStoreSlice: useWorkspaceStoreSlice,
  getStore: getWorkspaceStore,
} = createStoreAndHelper<WorkspaceStoreState & WorkspaceStoreHandlers>((set, get) => ({
  currentFilePath: null,
  serviceUrls: [],
  previewUrl: '',
  openPaths: {},

  addServiceUrl: (url) => set({ serviceUrls: [...get().serviceUrls, url] }),
  setPreviewUrl: (url) => set({ previewUrl: url }),
  removeServiceUrl: (url) => set({ serviceUrls: get().serviceUrls.filter((item) => item !== url) }),
  setCurrentFilePath: (path) => {
    const openPaths = { ...get().openPaths };
    const name = getFileName(path);
    if (name && !(name in openPaths)) openPaths[name] = path!;
    set({ currentFilePath: path, openPaths });
  },
  addOpenPath: (path) => set({ openPaths: { ...get().openPaths, [getFileName(path)!]: path } }),
  closeOpenPath: (path) => {
    const currentPath = get().currentFilePath;
    const openPaths = { ...get().openPaths };
    delete openPaths[getFileName(path)!];
    set({ openPaths, currentFilePath: currentPath === path ? Object.values(openPaths).at(-1) : currentPath });
  },
}));
