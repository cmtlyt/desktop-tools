import { debounce } from '@cmtlyt/base';
import styled from 'styled-components';
import { getNotepadEditorStore } from './store';
import { useNotepadStoreSlice } from '../store';
import { FlexBox } from '@/components/base';
import { Switch } from '@/components/switch';

const TitleInput = styled.input`
  all: inherit;
  border: none;
  outline: none;
`;

const titleChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  getNotepadEditorStore().setTitle(e.target.value);
};

const titleChangeHandlerDebounced = debounce(titleChangeHandler, 300);

interface TitleAreaProps {
  readOnly?: boolean;
}

export function TitleArea(props: TitleAreaProps) {
  const { readOnly } = props;
  const { currentNotepad: notepad } = useNotepadStoreSlice('currentNotepad');

  return (
    <FlexBox>
      <Switch when={!readOnly} fullback={<span>{notepad?.title}</span>}>
        {() => (
          <TitleInput
            defaultValue={notepad?.title}
            placeholder="请输入笔记标题"
            onChange={titleChangeHandlerDebounced}
          />
        )}
      </Switch>
    </FlexBox>
  );
}
