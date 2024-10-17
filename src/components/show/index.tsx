interface ShowProps {
  if?: boolean;
  children: React.ReactNode;
}

export function Show(props: ShowProps) {
  const { if: _if, children } = props;
  return _if ? children : null;
}
