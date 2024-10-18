import { create, StoreApi } from 'zustand';
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware';
import { produce } from 'immer';
import { getRandomString } from '@cmtlyt/base';
import { FLOWS_STORAGE_KEY } from '@/constant';
import { EditorFlow, Flow } from '@/types/flow';
import { useSelector } from '@/hooks';
import { Many } from '@/types';
import { forceSaveStorage, getStorageItem, removeStorageItem, setStorageItem } from '@/utils';

interface FlowsStore {
  flows: Flow[];
}

interface FlowsStoreActions {
  addFlow: (flow: EditorFlow) => void;
  deleteFlow: (id: string) => void;
  updateFlow: (id: string, flow: EditorFlow) => void;
}

const stateStorage: StateStorage = {
  getItem: getStorageItem,
  async setItem(name, value) {
    await setStorageItem(name, value);
    forceSaveStorage();
  },
  async removeItem(name) {
    await removeStorageItem(name);
    forceSaveStorage();
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
            id: `local-${getRandomString(16)}`,
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
            id: draft.flows[index].id,
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
