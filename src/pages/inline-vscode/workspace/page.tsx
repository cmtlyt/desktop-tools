import { useCallback, useEffect, useRef } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Monaco } from '../components/monaco';
import { Preview } from '../components/preview';
import { Aside } from '../components/aside';
import { Terminal, TerminalRef } from '../components/terminal';
import { getContainerStore } from '../store/container';
import styled from 'styled-components';
import { Tabbar } from '../components/tabbar';

const PanelGroupStyle = styled(PanelGroup)`
  height: 100%;
`;

interface PanelHandle {
  direction: 'horizontal' | 'vertical';
}

const PanelHandle = styled(PanelResizeHandle)<PanelHandle>`
  background-color: var(--color-gray-2);

  ${({ direction }) => {
    if (direction === 'horizontal') {
      return { width: '0.2rem', height: '100%' };
    }
    return { width: '100%', height: '0.2rem' };
  }}

  &:hover {
    background-color: var(--color-hover);
  }
`;

export function Component() {
  const termRef = useRef<TerminalRef>(null);

  useEffect(() => {
    const { initContainer } = getContainerStore();
    initContainer();
  }, []);

  const updateTerminalSize = useCallback(() => {
    termRef.current?.terminalResize();
  }, []);

  return (
    <PanelGroupStyle direction="horizontal">
      <Panel minSize={1} defaultSize={15}>
        <Aside />
      </Panel>
      <PanelHandle direction="horizontal" />
      <Panel defaultSize={60}>
        <PanelGroupStyle direction="vertical" onLayout={updateTerminalSize}>
          <Panel minSize={4} maxSize={4} defaultSize={4}>
            <Tabbar />
          </Panel>
          <PanelHandle direction="vertical" />
          <Panel>
            <Monaco />
          </Panel>
          <PanelHandle direction="vertical" />
          <Panel defaultSize={30}>
            <Terminal ref={termRef} />
          </Panel>
        </PanelGroupStyle>
      </Panel>
      <PanelHandle direction="horizontal" />
      <Panel minSize={30}>
        <Preview />
      </Panel>
    </PanelGroupStyle>
  );
}

export const handle = {
  title: '工作区',
};
