import { useCallback, useRef } from 'react';
import { debounce } from '@cmtlyt/base';
import { useKeyGuard } from '@/hooks/use-key-guard';
import { useNavigate } from '@/hooks';
import { AppearBox } from '@/components/appear-box';
import { isPhone, logger } from '@/utils';
import { PageInfo } from '@/types/page-info';
import { ButtonList } from '@/components/button-list';
import { Show } from '@/components/show';
import {
  ImageFilterSelect,
  UploadInput,
  Wrapper,
  PreviewImg,
  ComposeOptionInput,
  ComposeOptionInputRef,
  StyledSpin,
} from './component';
import { PRIVATE_TOOLS_KEY } from '../constant';
import { ActionType, emitPHTAction, useSubscribePHTAction } from './subject';
import { useComposeHandler } from './hooks';

export function Component() {
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
      urlsRef.current = urls ||= [];
      compose(urls, { filterList: filterListRef.current, ...optionRef.current?.getValue() });
    }, 500),
    [filterListRef, compose],
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
        <UploadInput onChange={changeHandler} />
        <StyledSpin spinning={loading} delay={100} size="large" tip="处理中...">
          <Show when={imageUrl && !error}>{() => <PreviewImg src={imageUrl} />}</Show>
          <Show when={error}>{() => <span style={{ color: 'red' }}>{error}</span>}</Show>
        </StyledSpin>
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
