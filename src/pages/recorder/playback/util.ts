import { chunkBase64StringToBlob } from '@cmtlyt/base';
import { RecordInfo } from '@/types/records';

export async function getPlayUrl(recordInfo?: RecordInfo) {
  if (!recordInfo) return '';
  const { url, content } = recordInfo;
  if (url) return url;
  if (!content) return '';
  const blob = chunkBase64StringToBlob(content);
  return URL.createObjectURL(blob);
}
