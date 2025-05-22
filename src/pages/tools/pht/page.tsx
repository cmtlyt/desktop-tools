import { useRef } from 'react';
import { debounce } from '@cmtlyt/base';
import { useKeyGuard } from '@/hooks/use-key-guard';
import { useNavigate } from '@/hooks';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { CanvasRef, ResultCanvas, UploadInput, Wrapper } from './component';
import { PRIVATE_TOOLS_KEY } from '../constant';

export function Component() {
  const canvasRef = useRef<CanvasRef>(null);
  const navigate = useNavigate();

  const pass = useKeyGuard(PRIVATE_TOOLS_KEY, () => {
    navigate(-1);
  });

  if (!pass) {
    return null;
  }

  const changeHandler = debounce((urls: string[]) => {
    canvasRef.current?.compose(urls, { jitterRange: 30 });
  }, 250);

  return (
    <AppearBox onFirstAppear={() => logger.appear('tool-pht')}>
      <Wrapper $flex="1" $direction="column">
        <UploadInput onChange={changeHandler} />
        <ResultCanvas ref={canvasRef} />
      </Wrapper>
    </AppearBox>
  );
}

export const handle = {
  title: '拼好图',
  needBackIcon: true,
};
