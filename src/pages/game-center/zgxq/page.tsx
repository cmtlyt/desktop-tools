import { PageInfo } from '@/types/page-info';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { BoardBg, BoardContainer, BoardWrapper, RenderContent } from './components';
import { RightArea } from './right-area';
import { ActionType, useSubscribeZGXQAction } from './subject';
import { getLayoutStore } from '@/store';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

export function Component() {
  useSubscribeZGXQAction((action) => {
    const { ext } = action;
    const winColor = ext?.winColor;
    if (!winColor) return;
    const { showMessage } = getLayoutStore();
    showMessage({ content: `${winColor === 'red' ? '红' : '黑'}方胜利`, type: 'success' });
  }, ActionType.GAME_OVER);

  return (
    <AppearBox onFirstAppear={() => logger.appear('game-zgxq')}>
      <FlexBox
        $flex="1"
        $direction={FlexDirection.COLUMN}
        $alignItems={FlexAlign.CENTER}
        $justifyContent={FlexJustify.CENTER}
      >
        <BoardContainer>
          <BoardWrapper $direction={FlexDirection.COLUMN}>
            <BoardBg />
            <RenderContent />
          </BoardWrapper>
        </BoardContainer>
      </FlexBox>
    </AppearBox>
  );
}

export const handle: PageInfo = {
  title: '中国象棋-单人推演模式',
  needBackIcon: true,
  rightArea: <RightArea />,
};
