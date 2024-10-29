import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGlobalEvent(eventName: string, callback: (event: any) => void) {
  useEffect(() => {
    window.addEventListener(eventName, callback);
    return () => window.removeEventListener(eventName, callback);
  }, [eventName, callback]);
}
