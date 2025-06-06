import { Jimp, ResizeStrategy } from 'jimp';
import { WorkerMessageEvent } from '@/hooks';

export interface OptionMap {
  resize: {
    url: string;
    width?: number;
    height?: number;

    result: string | undefined;
  };
}

async function resizeHandler(option: OptionMap['resize']) {
  const { url, width, height } = option;
  if (!width && !height) return;
  return Jimp.read(url).then((image) => {
    return (
      image
        .resize({ w: width!, h: height, mode: ResizeStrategy.HERMITE }) // resize
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .getBuffer(image.mime as any)
        .then((data) => {
          const blob = new Blob([new Uint8Array(data)], { type: image.mime });
          return URL.createObjectURL(blob);
        })
    );
  }, console.debug);
}

self.addEventListener('message', async ({ data }: WorkerMessageEvent<OptionMap>) => {
  const { action, option } = data;

  let result: unknown;

  switch (action) {
    case 'resize': {
      result = await resizeHandler(option as OptionMap['resize']);
      break;
    }
    default: {
      action satisfies never;
    }
  }

  self.postMessage({ action, result });
});
