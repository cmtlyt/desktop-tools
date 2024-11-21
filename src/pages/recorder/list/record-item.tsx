import { memo } from 'react';
import { RecordInfo } from '@/types/records';
import { ItemDate, ItemTitle, ItemWrapper, RightHandleButtonList } from '@/components//base/list';
import { ButtonTheme, FlexAlign, FlexBox } from '@/components/base';
import { HoverExpandBox } from '@/components/hover-expand-box';

interface RecordItemProps {
  recordInfo: RecordInfo;
  onClick?: () => void;
  onDelete?: (id: RecordInfo['id']) => void;
}

interface HandleButtonsProps {
  record: RecordInfo;
  onDelete?: (id: RecordInfo['id']) => void;
}

function HandleButtons(props: HandleButtonsProps) {
  const { record, onDelete } = props;
  const { id } = record;

  return (
    <RightHandleButtonList
      wrapperProps={{ $alignItems: FlexAlign.CENTER }}
      buttons={[
        {
          text: '删除',
          $presetTheme: ButtonTheme.DANGER,
          logInfo: { id },
          onClick(e) {
            e.stopPropagation();
            onDelete?.(id);
          },
        },
      ]}
    />
  );
}

export const RecordItem = memo(function RecordItem(props: RecordItemProps) {
  const { recordInfo, onClick, onDelete } = props;

  return (
    <ItemWrapper onClick={onClick}>
      <HoverExpandBox rightArea={<HandleButtons record={recordInfo} onDelete={onDelete} />}>
        <FlexBox $flex="1" $alignItems={FlexAlign.CENTER}>
          <ItemTitle>{recordInfo.name}</ItemTitle>
        </FlexBox>
        <ItemDate>{recordInfo.createTime}</ItemDate>
      </HoverExpandBox>
    </ItemWrapper>
  );
});
