import { useEffect, useRef } from 'react';

interface AppearBoxProps {
  children: React.ReactNode;
  onFirstAppear?: () => void;
}

export function AppearBox(props: AppearBoxProps) {
  const { onFirstAppear } = props;
  const firstAppear = useRef(true);

  useEffect(() => {
    if (!firstAppear.current) return;
    firstAppear.current = false;
    onFirstAppear?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{props.children}</>;
}
