import { useState } from 'react';
import { PageInfo } from '@/types/page-info';
import { initCheckerboard } from './util';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { Switch } from '@/components/switch';
import { BoardBg, BoardContent, BoardWrapper, Cell, CellItem, Row } from './components';

export function Component() {
  const [checkerboard, _setCheckerboard] = useState(initCheckerboard());

  return (
    <FlexBox
      $flex="1"
      $direction={FlexDirection.COLUMN}
      $alignItems={FlexAlign.CENTER}
      $justifyContent={FlexJustify.CENTER}
    >
      <BoardWrapper $direction={FlexDirection.COLUMN}>
        <BoardBg />
        <BoardContent $direction={FlexDirection.COLUMN}>
          {checkerboard.map((rowInfo, idx) => (
            <Row key={idx}>
              {rowInfo.map((item, idx) => (
                <Cell key={idx} $fastLine={!idx}>
                  <Switch if={item} fullback={<section />}>
                    {() => <CellItem {...item!} />}
                  </Switch>
                </Cell>
              ))}
            </Row>
          ))}
        </BoardContent>
      </BoardWrapper>
    </FlexBox>
  );
}

export const handle: PageInfo = {
  title: '中国象棋-单人推演模式',
  needBackIcon: true,
};
