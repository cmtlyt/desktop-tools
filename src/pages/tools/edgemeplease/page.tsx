import { useNavigate, useKeyGuard } from '@/hooks';
import { PageInfo } from '@/types/page-info';
import { Show } from '@/components/show';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { PRIVATE_TOOLS_KEY } from '../constant';
import { useEdgeStoreSlice } from './store';
import { useGameEngine } from './hooks';
import { PageWrapper, GameSetup, GameScreen } from './component';

function Page() {
  const navigate = useNavigate();
  const pass = useKeyGuard(PRIVATE_TOOLS_KEY, () => {
    navigate(-1);
  });
  const { status } = useEdgeStoreSlice('status');
  const engine = useGameEngine();

  if (!pass) return null;

  return (
    <AppearBox onFirstAppear={() => logger.appear('tool-edgemeplease')}>
      <PageWrapper>
        <Show when={status === 'setup'}>
          {() => (
            <GameSetup onStart={engine.startGame} />
          )}
        </Show>
        <Show when={status === 'playing' || status === 'finished'}>
          {() => (
            <GameScreen
              message={engine.message}
              flashOn={engine.flashOn}
              showFlash={engine.showFlash}
              showCumZone={engine.showCumZone}
              edgeWidth={engine.edgeWidth}
              cumWidth={engine.cumWidth}
              barText={engine.barText}
              speedText={engine.speedText}
              finishType={engine.finishType}
              onCum={engine.doCum}
              onReset={engine.resetGame}
            />
          )}
        </Show>
      </PageWrapper>
    </AppearBox>
  );
}

export function Component() {
  return <Page />;
}

export const handle: PageInfo = {
  title: '边缘控制',
  needBackIcon: true,
};
