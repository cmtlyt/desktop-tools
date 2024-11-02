import { cacheByReturn, isAndroid, isIOS, isOpenHarmony } from '@cmtlyt/base';

export const isPhone = cacheByReturn(() => {
  return isIOS() || isAndroid() || isOpenHarmony();
});
