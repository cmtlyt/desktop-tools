import { useEffect, useRef } from 'react';

interface AppearBoxProps {
  children?: React.ReactNode;
  onFirstAppear?: () => void;
  onAppear?: () => void;
}

export function AppearBox(props: AppearBoxProps) {
  const { children, onFirstAppear, onAppear } = props;
  const firstAppear = useRef(true);

  useEffect(() => {
    if (!firstAppear.current) return;
    firstAppear.current = false;
    onFirstAppear?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  onAppear?.();

  return children;
}
