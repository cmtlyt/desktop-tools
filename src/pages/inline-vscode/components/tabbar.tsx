import { memo } from 'react';
import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';
import { FlexAlign, FlexBox, FlexJustify } from '@/components/base';
import { getWorkspaceStore, useWorkspaceStoreSlice } from '../store/workspace';

const TabbarWrapper = styled(FlexBox)`
  padding: 0 0.5em;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

interface TabItemProps {
  $isActive?: boolean;
}

const TabItem = styled.section<TabItemProps>`
  position: relative;
  box-sizing: border-box;
  padding: 0 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  transition: background 300ms;

  ${({ $isActive }) => {
    return $isActive
      ? `
          background-color: var(--color-gray-8);

          &::before{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 0.2rem;
            content: '';
            background-color: var(--color-active);
          }
        `
      : '';
  }}
`;

const CloseIcon = styled(RiCloseLine)`
  margin-left: 0.5em;
  cursor: pointer;
  border-radius: 0.2em;
  transform: translateY(0.1rem);
  transition: background 300ms;

  &:hover {
    background-color: var(--color-gray-7);
  }
`;

export const Tabbar = memo(function Tabbar() {
  const { openPaths, currentFilePath } = useWorkspaceStoreSlice(['openPaths', 'currentFilePath']);
  return (
    <TabbarWrapper $alignItems={FlexAlign.CENTER} $justifyContent={FlexJustify.START}>
      {Object.entries(openPaths).map(([name, path]) => {
        const isActive = path === currentFilePath;
        return (
          <TabItem key={path} $isActive={isActive} onClick={() => getWorkspaceStore().setCurrentFilePath(path)}>
            <span>{name}</span>
            <CloseIcon
              onClick={(e) => {
                e.stopPropagation();
                getWorkspaceStore().closeOpenPath(path);
              }}
            />
          </TabItem>
        );
      })}
    </TabbarWrapper>
  );
});
