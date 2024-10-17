import { create, StoreApi } from 'zustand';
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
import { IndexedDBStorage } from '@cmtlyt/storage';
import { FLOWS_STORAGE_KEY } from '@/constant';
import { EditorFlow, Flow } from '@/types/flow';
import { useSelector } from '@/hooks';
import { Many } from '@/types';

interface FlowsStore {
  flows: Flow[];
}

interface FlowsStoreActions {
  addFlow: (flow: EditorFlow) => void;
  deleteFlow: (id: string) => void;
  updateFlow: (id: string, flow: EditorFlow) => void;
}

const storage = new IndexedDBStorage({ dbName: FLOWS_STORAGE_KEY, autoSaveDelay: 0 });

const stateStorage: StateStorage = {
  async getItem(name) {
    return await storage.getItem(name);
  },
  async setItem(name, value) {
    await storage.setItem(name, value);
    storage.forceSave();
  },
  async removeItem(name) {
    await storage.removeItem(name);
    storage.forceSave();
  },
};

type Store = FlowsStore & FlowsStoreActions;

type SetFunc = StoreApi<Store>['setState'];
type GetFunc = StoreApi<Store>['getState'];

const getActions: (set: SetFunc, get: GetFunc) => FlowsStoreActions = (set) => {
  return {
    addFlow: (flow) => {
      set((state) =>
        produce(state, (draft) => {
          const saveFlowFlow: Flow = {
            ...flow,
            id: String(draft.flows?.length || 0),
            creator: 'test',
            account: flow.amountDistributions[0].account,
            amount: String(flow.amountDistributions.reduce((acc, cur) => acc + +cur.amount, 0)),
            createTime: new Date().toLocaleString(),
            updateTime: new Date().toLocaleString(),
          };
          draft.flows.unshift(saveFlowFlow);
        }),
      );
    },
    updateFlow: (id, flow) => {
      set((state) =>
        produce(state, (draft) => {
          const index = draft.flows.findIndex((flow) => flow.id === id);
          if (index < 0) return;
          draft.flows.splice(index, 1, {
            ...draft.flows[index],
            ...flow,
            amount: String(flow.amountDistributions.reduce((acc, cur) => acc + +cur.amount, 0)),
            updateTime: new Date().toLocaleString(),
          });
        }),
      );
    },
    deleteFlow: (id) => {
      set((state) =>
        produce(state, (draft) => {
          draft.flows.splice(
            draft.flows.findIndex((flow) => flow.id === id),
            1,
          );
        }),
      );
    },
  };
};

export const useFlowsStore = create(
  persist<Store>(
    (set, get) => ({
      flows: [] as Flow[],
      ...getActions(set, get),
    }),
    { name: FLOWS_STORAGE_KEY, storage: createJSONStorage(() => stateStorage) },
  ),
);

type StoreKeys = Many<keyof Store>;

export const useFlowsStoreSlice = (keys: StoreKeys) => {
  return useFlowsStore(useSelector(keys));
};

export const getFlowsStore = () => {
  return useFlowsStore.getState();
};
