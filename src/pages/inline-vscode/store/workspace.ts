import { createStoreAndHelper } from '@/utils';

interface WorkspaceStoreState {
  currentFilePath: string | null;
}

interface WorkspaceStoreHandlers {
  setCurrentFilePath: (path?: string) => void;
}

export const {
  useStore: useWorkspaceStore,
  useStoreSlice: useWorkspaceStoreSlice,
  getStore: getWorkspaceStore,
} = createStoreAndHelper<WorkspaceStoreState & WorkspaceStoreHandlers>((set) => ({
  currentFilePath: null,

  setCurrentFilePath: (path) => set({ currentFilePath: path }),
}));
