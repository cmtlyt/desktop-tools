import { FlexBox, FlexDirection } from '@/components/base';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContainerStoreSlice } from '../../store/container';
import { DEFAULT_DIRECTORY } from '../../constant';
import { getContainerFileSystem } from '../../utils/file-system';
import type { DirectoryNode } from '@webcontainer/api';
import { DirectoryList } from './directory-list';

const AsideWrapper = styled.aside`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  transition: grid-template-columns 300ms;
`;

export const Aside = memo(function Aside() {
  const { container } = useContainerStoreSlice('container');
  const [fileSystem, setFileSystem] = useState<DirectoryNode | null>(null);

  useEffect(() => {
    if (!container) return;
    const watcher = container.fs.watch(DEFAULT_DIRECTORY, { recursive: true, persistent: true }, (event) => {
      if (event !== 'rename') return;

      getContainerFileSystem((fs) => {
        setFileSystem(fs);
      });
    });
    return () => watcher.close();
  }, [container]);

  return (
    <AsideWrapper>
      <FlexBox $direction={FlexDirection.COLUMN}>
        {fileSystem && <DirectoryList name="" type="directory" directory={fileSystem} />}
      </FlexBox>
    </AsideWrapper>
  );
});
