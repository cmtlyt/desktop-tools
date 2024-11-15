import { debounce } from '@cmtlyt/base';
import styled from 'styled-components';
import { FlexBox } from '@/components/base';
import { Switch } from '@/components/switch';
import { getRecordingInfoStore, useRecordingInfoStoreSlice } from './store';

const TitleInput = styled.input`
  all: inherit;
  border: none;
  outline: none;
`;

const titleChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  getRecordingInfoStore().setName(e.target.value.trim());
};

const titleChangeHandlerDebounced = debounce(titleChangeHandler, 300);

interface TitleAreaProps {
  readOnly?: boolean;
}

export function TitleArea(props: TitleAreaProps) {
  const { readOnly } = props;
  const { name, recorder } = useRecordingInfoStoreSlice(['name', 'recorder']);

  return (
    <FlexBox>
      <Switch if={!readOnly || !!recorder} fullback={<span>{name}</span>}>
        {() => (
          <TitleInput defaultValue={name || ''} placeholder="请输入笔记标题" onChange={titleChangeHandlerDebounced} />
        )}
      </Switch>
    </FlexBox>
  );
}
