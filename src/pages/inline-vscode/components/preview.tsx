import { memo } from 'react';
import styled from 'styled-components';
import { FlexBox, FlexDirection } from '@/components/base';
import { useWorkspaceStoreSlice } from '../store/workspace';

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

  return (
    <PreviewWrapper $direction={FlexDirection.COLUMN}>
      <PreviewFrame src={previewUrl} />
    </PreviewWrapper>
  );
});
