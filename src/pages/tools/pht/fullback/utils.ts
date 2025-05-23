import { onceFunc } from '@cmtlyt/base';

const getLenaJS = onceFunc(async () => import('lena.js'));

export async function filterImage(imageData: ImageData, filterList: string[]) {
  const LenaJS = await getLenaJS();
  return filterList.reduce((preData, filter) => LenaJS[filter]?.(preData) || preData, imageData);
}
