import { useCallback, useRef, useState } from 'react';
import { debounce } from '@cmtlyt/base';
import { useKeyGuard, useNavigate } from '@/hooks';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { Show } from '@/components/show';
import { ImageUpload } from '@/components/image-upload';
import { ImageFilterSelect, Wrapper, PreviewImg, ComposeOptionInput, ComposeOptionInputRef } from '../component';
import { CanvasRef, ComposeCanvas } from './components';
import { PRIVATE_TOOLS_KEY } from '../../constant';

export function Component() {
  const navigate = useNavigate();
  const canvasRef = useRef<CanvasRef>(null);
  const urlsRef = useRef<string[]>([]);
  const filterListRef = useRef<string[]>([]);
  const optionRef = useRef<ComposeOptionInputRef>(null);
  const [previewUrl, setPreviewUrl] = useState<string>();

  const pass = useKeyGuard(PRIVATE_TOOLS_KEY, () => {
    navigate(-1);
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeHandler = useCallback(
    debounce((urls?: string[]) => {
      if (!urls?.length) {
        if (!urlsRef.current.length) return;
        urls = urlsRef.current;
      }
      urlsRef.current = urls;
      if (!canvasRef.current) return;
      canvasRef.current
        .compose(urls, { filterList: filterListRef.current, ...optionRef.current?.getValue() })
        .then(() => canvasRef.current!.getImageUrl())
        .then((url) => {
          URL.revokeObjectURL(previewUrl || '');
          setPreviewUrl(url);
        });
    }, 500),
    [filterListRef, previewUrl],
  );

  const filterChangeHandler = useCallback(
    (list: string[]) => {
      filterListRef.current = list;
      changeHandler();
    },
    [changeHandler],
  );

  const optionChangehandler = useCallback(() => {
    changeHandler();
  }, [changeHandler]);

  if (!pass) {
    return null;
  }

  return (
    <AppearBox onFirstAppear={() => logger.appear('tool-pht-fullback')}>
      <Wrapper $flex="1" $direction="column">
        <ComposeOptionInput ref={optionRef} onChange={optionChangehandler} />
        <ImageFilterSelect onChange={filterChangeHandler} />
        <ImageUpload onChange={changeHandler} />
        <ComposeCanvas ref={canvasRef} />
        <Show when={previewUrl}>{() => <PreviewImg src={previewUrl} />}</Show>
      </Wrapper>
    </AppearBox>
  );
}
