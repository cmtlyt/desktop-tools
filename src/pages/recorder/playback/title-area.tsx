import { useRecordStoreSlice } from '../store';

export function TitleArea() {
  const { currentRecord } = useRecordStoreSlice('currentRecord');

  return currentRecord?.name || '回放';
}
