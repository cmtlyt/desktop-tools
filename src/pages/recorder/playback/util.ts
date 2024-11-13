import { chunkBase64StringToBlob } from '@cmtlyt/base';
import { RecordInfo } from '@/types/records';
import { getRecordStore } from '../store';

export async function getPlayUrl(recordInfo?: RecordInfo) {
  if (!recordInfo) return '';
  const { url, content } = recordInfo;
  if (url) return url;
  if (!content) return '';
  const blob = chunkBase64StringToBlob(content);
  return URL.createObjectURL(blob);
}

export async function download() {
  const { currentRecord } = getRecordStore();
  const url = await getPlayUrl(currentRecord);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = `${currentRecord?.name}.webm`;
  a.click();
  setTimeout(() => {
    window.URL.revokeObjectURL(url);
  }, 100);
}
