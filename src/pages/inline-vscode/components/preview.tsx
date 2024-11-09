import { FlexBox, FlexDirection } from '@/components/base';
import styled from 'styled-components';
import { useWorkspaceStoreSlice } from '../store/workspace';
import { memo } from 'react';

const PreviewFrame = styled.iframe`
  margin: 0;
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  outline: 0;
`;

const PreviewWrapper = styled(FlexBox)`
  height: 100%;
`;

export const Preview = memo(function Preview() {
  const { previewUrl } = useWorkspaceStoreSlice('previewUrl');

  console.debug(previewUrl);

  return (
    <PreviewWrapper $direction={FlexDirection.COLUMN}>
      <input type="text" value={previewUrl} onChange={() => {}} />
      <PreviewFrame src={previewUrl} />
    </PreviewWrapper>
  );
});
