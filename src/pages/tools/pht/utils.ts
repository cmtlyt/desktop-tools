import { onceFunc } from '@cmtlyt/base';

export const filterOptions: Record<'label' | 'value', string>[] = [
  { label: '反色', value: 'invert' },
  { label: '大高斯模糊', value: 'bigGaussian' },
  { label: '蓝色', value: 'blue' },
  { label: '亮度', value: 'brightness' },
  { label: 'Canny边缘检测', value: 'canny' },
  { label: '对比度', value: 'contrast' },
  { label: '伽玛校正', value: 'gamma' },
  { label: '高斯模糊', value: 'gaussian' },
  { label: '灰度化', value: 'grayscale' },
  { label: '绿色', value: 'green' },
  { label: '高通滤波', value: 'highpass' },
  { label: '拉普拉斯算子', value: 'laplacian' },
  { label: '低通滤波3x3', value: 'lowpass3' },
  { label: '低通滤波5x5', value: 'lowpass5' },
  { label: '镜像', value: 'mirror' },
  { label: '添加噪声', value: 'noise' },
  { label: 'Prewitt横向边缘检测', value: 'prewittHorizontal' },
  { label: 'Prewitt纵向边缘检测', value: 'prewittVertical' },
  { label: '红色', value: 'red' },
  { label: 'Roberts交叉边缘检测', value: 'roberts' },
  { label: '饱和度', value: 'saturation' },
  { label: '棕褐色', value: 'sepia' },
  { label: '锐化', value: 'sharpen' },
  { label: 'Sobel横向边缘检测', value: 'sobelHorizontal' },
  { label: 'Sobel纵向边缘检测', value: 'sobelVertical' },
  { label: '阈值化', value: 'thresholding' },
];

const getLenaJS = onceFunc(async () => import('lena.js'));

export async function filterImage(imageData: ImageData, filterList: string[]) {
  const LenaJS = await getLenaJS();
  return filterList.reduce((preData, filter) => LenaJS[filter]?.(preData) || preData, imageData);
}
