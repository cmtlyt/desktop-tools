import { useEffect } from 'react';

interface AppearBoxProps {
  children: React.ReactNode;
  onFirstAppear?: () => void;
}

export function AppearBox(props: AppearBoxProps) {
  const { onFirstAppear } = props;

  useEffect(() => {
    onFirstAppear?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{props.children}</>;
}
