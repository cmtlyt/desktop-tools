import { useCallback, useRef } from 'react';
import { debounce } from '@cmtlyt/base';
import { useNavigate, useKeyGuard } from '@/hooks';
import { AppearBox } from '@/components/appear-box';
import { isPhone, logger } from '@/utils';
import { PageInfo } from '@/types/page-info';
import { Show } from '@/components/show';
import { ImageUpload } from '@/components/image-upload';
import { RightHandleButtonList } from '@/components/base/list';
import {
  ImageFilterSelect,
  Wrapper,
  PreviewImg,
  ComposeOptionInput,
  ComposeOptionInputRef,
  StyledSpin,
} from './component';
import { PRIVATE_TOOLS_KEY } from '../constant';
import { ActionType, emitPHTAction, useSubscribePHTAction } from './subject';
import { useComposeHandler } from './hooks';
import { Component as FullbackComponent } from './fullback/page';
import { getPHTStore, usePHTStoreSlice } from './store';

function Page() {
  const navigate = useNavigate();
  const urlsRef = useRef<string[]>([]);
  const filterListRef = useRef<string[]>([]);
  const optionRef = useRef<ComposeOptionInputRef>(null);
  const { loading, imageUrl, error, compose } = useComposeHandler();

  const pass = useKeyGuard(PRIVATE_TOOLS_KEY, () => {
    navigate(-1);
  });

  useSubscribePHTAction(() => {
    window.open(imageUrl);
  }, [ActionType.PREVIEW_IMAGE]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeHandler = useCallback(
    debounce((urls?: string[]) => {
      urlsRef.current = urls ||= urlsRef.current;
      compose(urls, { filterList: filterListRef.current, ...optionRef.current?.getValue() });
    }, 500),
    [compose],
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
    <AppearBox onFirstAppear={() => logger.appear('tool-pht')}>
      <Wrapper $flex="1" $direction="column">
        <ComposeOptionInput ref={optionRef} onChange={optionChangehandler} />
        <ImageFilterSelect onChange={filterChangeHandler} />
        <ImageUpload onChange={changeHandler} />
        <StyledSpin spinning={loading} delay={100} size="large" tip="处理中...">
          <Show when={imageUrl && !error}>{() => <PreviewImg src={imageUrl} />}</Show>
          <Show when={error}>{() => <span style={{ color: 'red' }}>{error}</span>}</Show>
        </StyledSpin>
      </Wrapper>
    </AppearBox>
  );
}

export function Component() {
  const { fullback } = usePHTStoreSlice('fullback');
  if (fullback) {
    return <FullbackComponent />;
  }
  return <Page />;
}

function RightArea() {
  const { fullback } = usePHTStoreSlice('fullback');

  return (
    <RightHandleButtonList
      buttons={[
        ...(fullback
          ? []
          : [
              {
                text: '降级',
                onClick: () => getPHTStore().setFullback(true),
              },
            ]),
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
