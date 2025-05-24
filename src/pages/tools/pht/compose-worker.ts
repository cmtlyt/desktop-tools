import { onceFunc } from '@cmtlyt/base';

export type Action = 'init' | 'compose' | 'drawImage' | 'filter';

interface OptionMap {
  init: {
    offscreen: unknown;
  };
  compose: {
    imgs: string[];
    options: ComposeOptions;
  };
  drawImage: unknown;
  filter: {
    filterList: string[];
  };
}

interface MessageData<T extends Action = Action> {
  action: T;

  option: OptionMap[T];

  [key: string]: unknown;
}

interface ComposeOptions {
  jitterRange?: number;
  replaceColor?: string;
}

interface RunningCtx {
  ctx: OffscreenCanvasRenderingContext2D | null;
  width: number;
  height: number;
  originImageData: ImageData;
  imageData: ImageData;
  filterList: string[];
  replaceColor: [number, number, number];
}

const runningCtx: RunningCtx = {
  ctx: null,
  width: 0,
  height: 0,
  originImageData: new ImageData(1, 1),
  imageData: new ImageData(1, 1),
  filterList: [],
  replaceColor: [0, 0, 0],
};

function parseColor(color: string): [number, number, number] {
  if (color.startsWith('#')) {
    const [r, g, b] = color.match(/\w{2}/g)?.map((item) => parseInt(item, 16)) ?? [0, 0, 0];
    return [r, g, b];
  } else if (color.startsWith('rgb')) {
    color = color.replace(/^rgba?\((.*?)\)$/, '$1');
  }
  const [r = 0, g = 0, b = 0] = color
    .split(',')
    .map((item) => parseInt(item.trim(), 10))
    .filter((item) => !isNaN(item));
  return [r, g, b];
}

function getColorMatch(target: readonly [number, number, number] | [number, number, number], jitterRange: number) {
  return (rgb: readonly [number, number, number] | [number, number, number]) =>
    rgb.every((item, idx) => Math.abs(item - target[idx]) < jitterRange);
}

async function getImageData(url: string) {
  return fetch(url)
    .then((res) => res.blob())
    .then((blob) => createImageBitmap(blob))
    .then((bitmap) => {
      const { ctx } = runningCtx;
      if (!ctx) return new ImageData(1, 1);
      const { width, height } = bitmap;
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(bitmap, 0, 0);
      const imageData = ctx.getImageData(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);
      return imageData;
    });
}

async function composeHandler(option: OptionMap['compose']) {
  const { imgs, options } = option;

  const { jitterRange = 30, replaceColor = '#000000' } = options;

  const targetColor = parseColor(replaceColor);

  const colorMatch = getColorMatch(targetColor, jitterRange);

  const imageData = await getImageData(imgs[0]);
  runningCtx.width = imageData.width;
  runningCtx.height = imageData.height;
  runningCtx.originImageData = imageData;

  const originData = imageData.data;

  for (const url of imgs.slice(1)) {
    const { data } = await getImageData(url);

    for (let i = 0; i < data.length; i += 4) {
      const sourceColor = [data[i], data[i + 1], data[i + 2], data[i + 3]] as const;

      if (!colorMatch(sourceColor.slice(0, 3) as [number, number, number])) {
        sourceColor.forEach((item, idx) => (originData[i + idx] = item));
      }
    }
  }

  runningCtx.imageData = imageData;
}

function drawImageHandler(_option: OptionMap['drawImage']) {
  const { ctx } = runningCtx;
  if (!ctx) return;
  const { width, height } = runningCtx;
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  ctx.putImageData(runningCtx.imageData, 0, 0);
}

const getLenaJS = onceFunc(async () => import('lena.js'));

export async function filterImage(imageData: ImageData, filterList: string[]) {
  const LenaJS = await getLenaJS();
  return filterList.reduce((preData, filter) => LenaJS[filter]?.(preData) || preData, imageData);
}

async function filterHandler(option: OptionMap['filter']) {
  runningCtx.imageData = runningCtx.originImageData;

  if (!option.filterList.length) return;

  const data = structuredClone(runningCtx.imageData);

  runningCtx.imageData = await filterImage(data, option.filterList);
}

function initHandler(option: OptionMap['init']) {
  const { offscreen } = option;
  const canvas = offscreen as OffscreenCanvas;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  runningCtx.ctx = ctx;
}

self.addEventListener('message', async ({ data }: MessageEvent<MessageData>) => {
  const { action, option } = data;

  console.debug(data);

  switch (action) {
    case 'init': {
      initHandler(option as OptionMap['init']);
      break;
    }
    case 'compose': {
      await composeHandler(option as OptionMap['compose']);
      break;
    }
    case 'filter': {
      await filterHandler(option as OptionMap['filter']);
      break;
    }
    case 'drawImage': {
      drawImageHandler(option as OptionMap['drawImage']);
      break;
    }
    default: {
      action satisfies never;
    }
  }

  self.postMessage({ action });
});
