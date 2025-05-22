import { useCallback, useEffect } from 'react';

type Command = (command: string, metadata: Record<string, unknown>) => void | boolean;

declare global {
  interface Window {
    execCommand: Command;
  }
}

const commandSet = new Set<Command>();

function initExecCommand() {
  window.execCommand ||= (command, metadata) => {
    Array.from(commandSet).some((cb) => cb(command, metadata));
  };
}

export function useCommand(cb: Command, deps: unknown[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(cb, deps);

  useEffect(() => {
    initExecCommand();

    commandSet.add(callback);

    return () => {
      commandSet.delete(callback);
    };
  }, [callback]);
}
