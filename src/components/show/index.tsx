interface ShowProps {
  if?: boolean;
  children: () => React.ReactNode;
}

export function Show(props: ShowProps) {
  const { if: flag, children } = props;
  return flag ? children() : null;
}
