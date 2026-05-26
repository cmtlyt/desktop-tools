import { useNavigate } from 'react-router-dom';
import { AppearBox, useKeyGuard, Show } from '@pzui/react';
import { useEdgeStoreSlice, PRIVATE_TOOLS_KEY, logger } from '../..';

import { PageWrapper, GameScreen, GameSetup } from './component';
import { useGameEngine } from './hooks';

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
      <PageWrapper $wc={engine.wrapperClass}>
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
              wrapperClass={engine.wrapperClass}
              onCum={engine.doCum}
              onReset={engine.resetGame}
            />
          )}
        </Show>
      </PageWrapper>
    </AppearBox>
  );
}

export default Page;
