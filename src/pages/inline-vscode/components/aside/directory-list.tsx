import { memo, useMemo, useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { GoFileDirectoryFill } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import type { DirectoryNode } from '@webcontainer/api';
import { FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { isDirectoryNode, isFileNode } from '../../utils/file-system';
import { Show } from '@/components/show';
import { getWorkspaceStore } from '../../store/workspace';
import { Switch } from '@/components/switch';

interface DirectoryListProps {
  type: 'file' | 'directory';
  name: string;
  directory?: DirectoryNode;
}

const DirectoryWrapper = styled(FlexBox)`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
`;

interface FileListProps {
  $isRoot?: boolean;
}

const FileList = styled(FlexBox)<FileListProps>`
  & & {
    position: relative;
    padding-left: 1.5em;

    &::before {
      position: absolute;
      left: 0.3em;
      content: '';
      height: 100%;
      width: 0.1rem;
      background-color: var(--color-gray-4);
    }
  }
`;

interface DirectoryProps {
  name?: string;
  path: string;
  directoryNode?: DirectoryNode;
}

const Directory = memo(function Directory(props: DirectoryProps) {
  const { name, directoryNode, path } = props;
  const { directory } = directoryNode || { directory: {} };
  const [expand, setExpand] = useState(typeof name === 'undefined');

  const tempKeys = useMemo(() => Object.keys(directory), [directory]);
  const keys = useMemo(() => {
    return tempKeys.sort((a, b) => {
      if (isDirectoryNode(directory[a]) && isFileNode(directory[b])) return -1;
      return Number(a) - Number(b);
    });
  }, [tempKeys, directory]);

  return (
    <DirectoryWrapper $direction={FlexDirection.COLUMN}>
      <NodeItem type="directory" name={name} path={path} expand={expand} onClick={() => setExpand(!expand)} />
      <Show if={expand && keys.length > 0}>
        {() => (
          <FileList $justifyContent={FlexJustify.START} $direction={FlexDirection.COLUMN}>
            {keys.map((name) => {
              if (isFileNode(directory[name])) return <NodeItem type="file" name={name} key={name} path={path} />;
              return (
                <Directory
                  key={name}
                  name={name}
                  directoryNode={directory[name] as DirectoryNode}
                  path={`${path}/${name}`}
                />
              );
            })}
          </FileList>
        )}
      </Show>
    </DirectoryWrapper>
  );
});

interface NodeItemProps {
  type: 'file' | 'directory';
  name?: string;
  path: string;
  expand?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const ItemSpan = styled.span`
  padding: 0.1em 0;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

interface ArrowProps {
  $expand?: boolean;
}

const ArrowStyles = styled.span<ArrowProps>`
  width: 1em;
  height: 1em;
  transform: rotate(${({ $expand }) => ($expand ? 90 : 0)}deg);
  transition: transform 300ms;
`;

function NodeItem(props: NodeItemProps) {
  const { type, name, expand, path, onClick } = props;
  if (typeof name === 'undefined') return null;
  return (
    <ItemSpan
      onClick={(e) => {
        e.stopPropagation();
        if (type === 'directory') return onClick?.(e);
        getWorkspaceStore().setCurrentFilePath(`${path}/${name}`);
      }}
    >
      <Show if={type === 'directory'}>
        {() => (
          <ArrowStyles $expand={expand}>
            <IoIosArrowForward />
          </ArrowStyles>
        )}
      </Show>
      <Switch if={type === 'directory'} fullback={<FaFileAlt />}>
        {() => <GoFileDirectoryFill />}
      </Switch>
      <span>{name}</span>
    </ItemSpan>
  );
}

const DirectoryListWrapper = styled.section`
  box-sizing: border-box;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  overflow: auto;
  white-space: nowrap;
`;

export function DirectoryList(props: DirectoryListProps) {
  const { type, name, directory } = props;

  return (
    <DirectoryListWrapper>
      {type === 'file' ? (
        <NodeItem type={type} name={name} path={name} />
      ) : (
        <Directory directoryNode={directory as DirectoryNode} path=""></Directory>
      )}
    </DirectoryListWrapper>
  );
}
