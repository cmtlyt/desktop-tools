import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from '@cmtlyt/base';
import { useKeyGuard } from '@/hooks/use-key-guard';
import { useNavigate } from '@/hooks';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { CanvasRef, ImageFilterSelect, ResultCanvas, UploadInput, Wrapper } from './component';
import { PRIVATE_TOOLS_KEY } from '../constant';
import { PageInfo } from '@/types/page-info';
import { ButtonList } from '@/components/button-list';
import { ActionType, emitPHTAction, useSubscribePHTAction } from './subject';

export function Component() {
  const canvasRef = useRef<CanvasRef>(null);
  const urlsRef = useRef<string[]>([]);
  const [filterList, setFilterList] = useState<string[]>([]);
  const navigate = useNavigate();

  const pass = useKeyGuard(PRIVATE_TOOLS_KEY, () => {
    navigate(-1);
  });

  useEffect(() => {
    changeHandler(urlsRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList]);

  useSubscribePHTAction(() => {
    canvasRef.current?.getImageUrl().then((url) => {
      window.open(url);
    });
  }, [ActionType.PREVIEW_IMAGE]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeHandler = useCallback(
    debounce((urls: string[]) => {
      urlsRef.current = urls;
      canvasRef.current?.compose(urls, { jitterRange: 30, filterList });
    }, 250),
    [filterList],
  );

  if (!pass) {
    return null;
  }

  return (
    <AppearBox onFirstAppear={() => logger.appear('tool-pht')}>
      <Wrapper $flex="1" $direction="column">
        <ImageFilterSelect onChange={setFilterList} />
        <UploadInput onChange={changeHandler} />
        <ResultCanvas ref={canvasRef} />
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
