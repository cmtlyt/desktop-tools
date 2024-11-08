import { FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import type { DirectoryNode } from '@webcontainer/api';
import { isFileNode } from '../../utils/file-system';
import styled from 'styled-components';
import { Show } from '@/components/show';
import { getWorkspaceStore } from '../../store/workspace';

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
  $isRoot: boolean;
}

const FileList = styled(FlexBox)<FileListProps>`
  ${({ $isRoot }) => ($isRoot ? {} : { paddingLeft: '1em', borderLeft: '1px solid var(--color-gray-4)' })}
`;

interface DirectoryProps {
  name: string;
  path: string;
  directoryNode?: DirectoryNode;
}

function Directory(props: DirectoryProps) {
  const { name, directoryNode, path } = props;
  const { directory } = directoryNode || { directory: {} };
  const keys = Object.keys(directory);
  return (
    <DirectoryWrapper $direction={FlexDirection.COLUMN}>
      <NodeItem type="directory" name={name} path={path} />
      <Show if={keys.length > 0}>
        {() => (
          <FileList $justifyContent={FlexJustify.START} $direction={FlexDirection.COLUMN} $isRoot={!name}>
            {Object.keys(directory).map((name) => {
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
}

interface NodeItemProps {
  type: 'file' | 'directory';
  name: string;
  path: string;
}

function NodeItem(props: NodeItemProps) {
  const { type, name, path } = props;
  if (!name) return null;
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        if (type === 'directory') return;
        console.debug(`set`, `${path}/${name}`);
        getWorkspaceStore().setCurrentFilePath(`${path}/${name}`);
      }}
    >
      {name}
    </span>
  );
}

export function DirectoryList(props: DirectoryListProps) {
  const { type, name, directory } = props;
  return type === 'file' ? (
    <NodeItem type={type} name={name} path={name} />
  ) : (
    <Directory name={name} directoryNode={directory as DirectoryNode} path=""></Directory>
  );
}
