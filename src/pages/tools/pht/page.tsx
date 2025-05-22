import { useCallback, useRef, useState } from 'react';
import { debounce } from '@cmtlyt/base';
import { useKeyGuard } from '@/hooks/use-key-guard';
import { useNavigate } from '@/hooks';
import { AppearBox } from '@/components/appear-box';
import { isPhone, logger } from '@/utils';
import { PageInfo } from '@/types/page-info';
import { ButtonList } from '@/components/button-list';
import { Show } from '@/components/show';
import { CanvasRef, ImageFilterSelect, ComposeCanvas, UploadInput, Wrapper, PreviewImg } from './component';
import { PRIVATE_TOOLS_KEY } from '../constant';
import { ActionType, emitPHTAction, useSubscribePHTAction } from './subject';

export function Component() {
  const navigate = useNavigate();
  const canvasRef = useRef<CanvasRef>(null);
  const urlsRef = useRef<string[]>([]);
  const filterListRef = useRef<string[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string>();

  const pass = useKeyGuard(PRIVATE_TOOLS_KEY, () => {
    navigate(-1);
  });

  useSubscribePHTAction(() => {
    canvasRef.current?.getImageUrl().then((url) => {
      window.open(url);
    });
  }, [ActionType.PREVIEW_IMAGE]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeHandler = useCallback(
    debounce((urls: string[]) => {
      urlsRef.current = urls;
      if (!canvasRef.current) return;
      canvasRef.current
        .compose(urls, { jitterRange: 30, filterList: filterListRef.current })
        .then(() => canvasRef.current!.getImageUrl())
        .then((url) => {
          URL.revokeObjectURL(previewUrl || '');
          setPreviewUrl(url);
        });
    }, 250),
    [filterListRef, previewUrl],
  );

  const filterChangeHandler = useCallback(
    (list: string[]) => {
      filterListRef.current = list;
      changeHandler(urlsRef.current);
    },
    [changeHandler],
  );

  if (!pass) {
    return null;
  }

  return (
    <AppearBox onFirstAppear={() => logger.appear('tool-pht')}>
      <Wrapper $flex="1" $direction="column">
        <ImageFilterSelect onChange={filterChangeHandler} />
        <UploadInput onChange={changeHandler} />
        <ComposeCanvas ref={canvasRef} />
        <Show when={previewUrl}>{() => <PreviewImg src={previewUrl} />}</Show>
      </Wrapper>
    </AppearBox>
  );
}

function RightArea() {
  return (
    <ButtonList
      buttons={[
        {
          text: '预览',
          hidden: isPhone(),
          onClick() {
            emitPHTAction({ id: 'preview-image', type: ActionType.PREVIEW_IMAGE });
          },
        },
      ]}
    />
  );
}

export const handle: PageInfo = {
  title: '拼好图',
  needBackIcon: true,
  rightArea: <RightArea />,
};
