import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import type { WebContainerProcess } from '@webcontainer/api';
import type { Terminal as XTerminal } from '@xterm/xterm';
import type { FitAddon } from '@xterm/addon-fit';
import type { WebLinksAddon } from '@xterm/addon-web-links';
import type { WebglAddon } from '@xterm/addon-webgl';
import { useContainerStoreSlice } from '../store/container';
import { DEFAULT_DIRECTORY } from '../constant';
import '@xterm/xterm/css/xterm.css';

const XTermWrapper = styled.section`
  position: relative;
  height: 100%;
`;

interface AddonsRef {
  fitAddon: FitAddon;
  webLinksAddon: WebLinksAddon;
  webglAddon: WebglAddon;
}

async function loadAddons(oldAddons: AddonsRef) {
  const addons = { ...oldAddons } as AddonsRef;

  if (!addons.fitAddon) {
    const { FitAddon } = await import('@xterm/addon-fit');
    addons.fitAddon = new FitAddon();
  }
  if (!addons.webLinksAddon) {
    const { WebLinksAddon } = await import('@xterm/addon-web-links');
    addons.webLinksAddon = new WebLinksAddon();
  }
  if (!addons.webglAddon) {
    const { WebglAddon } = await import('@xterm/addon-webgl');
    addons.webglAddon = new WebglAddon();
  }

  return addons;
}

export interface TerminalRef {
  terminalResize: () => void;
}

const terminalTheme = {
  foreground: '#ffffff', // 字体
  background: '#1e1e1e', // 背景色
  cursor: '#ffffff', // 设置光标
  selection: 'rgba(255, 255, 255, 0.3)',
  black: '#000000',
  brightBlack: '#808080',
  red: '#ce2f2b',
  brightRed: '#f44a47',
  green: '#00b976',
  brightGreen: '#05d289',
  yellow: '#e0d500',
  brightYellow: '#f4f628',
  magenta: '#bd37bc',
  brightMagenta: '#d86cd8',
  blue: '#1d6fca',
  brightBlue: '#358bed',
  cyan: '#00a8cf',
  brightCyan: '#19b8dd',
  white: '#e5e5e5',
  brightWhite: '#ffffff',
};

export const Terminal = memo(
  forwardRef<TerminalRef>(function Terminal(_, ref) {
    const { container } = useContainerStoreSlice('container');
    const termWrapperRef = useRef<HTMLDivElement>(null);
    const addonsRef = useRef({} as AddonsRef);
    const shellRef = useRef(null as unknown as WebContainerProcess);
    const termRef = useRef(null as unknown as XTerminal);

    useImperativeHandle(
      ref,
      () => ({
        terminalResize: () => {
          const { fitAddon } = addonsRef.current;
          if (fitAddon && shellRef.current) {
            fitAddon.fit();
            shellRef.current.resize({
              cols: termRef.current.cols,
              rows: termRef.current.rows,
            });
          }
        },
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [container],
    );

    useEffect(() => {
      (async () => {
        if (!container || termRef.current) return;
        const { Terminal } = await import('@xterm/xterm');
        const addons = await loadAddons(addonsRef.current);
        addonsRef.current = addons;

        const term = new Terminal({
          fontFamily: '"Cascadia Code", Menlo, monospace',
          fontSize: 13,
          convertEol: true,
          cursorBlink: true,
          scrollback: 20,
          scrollOnUserInput: true,
          drawBoldTextInBrightColors: true,
          theme: terminalTheme,
        });

        termRef.current = term;

        Object.values(addonsRef.current).forEach((addon) => term.loadAddon(addon));

        term.open(termWrapperRef.current!);
        const fitAddon = addonsRef.current.fitAddon;
        fitAddon.fit();

        shellRef.current = await container.spawn('jsh', {
          terminal: { rows: term.rows, cols: term.cols },
          cwd: DEFAULT_DIRECTORY,
        });

        window.addEventListener('resize', () => {
          if (fitAddon && shellRef.current) {
            fitAddon.fit();
            shellRef.current.resize({ cols: term.cols, rows: term.rows });
          }
        });

        shellRef.current.output.pipeTo(
          new WritableStream({
            write(data) {
              term.write(data);
            },
          }),
        );

        const input = shellRef.current.input.getWriter();

        term.onData((data: string) => input.write(data));
      })();

      return () => {
        container?.fs.rm('/', { recursive: true });
        shellRef.current?.kill();
        termRef.current = null as unknown as XTerminal;
      };
    }, [container]);

    return <XTermWrapper ref={termWrapperRef} />;
  }),
);
