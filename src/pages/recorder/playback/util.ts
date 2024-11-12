import { stringToBinary } from '@cmtlyt/base';
import { unGzip } from '@cmtlyt/string-zip';
import { RecordInfo } from '@/types/records';

export async function getPlayUrl(recordInfo?: RecordInfo) {
  if (!recordInfo) return '';
  const { url, content } = recordInfo;
  if (url) return url;
  if (!content) return '';
  const source = await unGzip(content);
  const blob = new Blob([stringToBinary(source)]);
  return URL.createObjectURL(blob);
}
