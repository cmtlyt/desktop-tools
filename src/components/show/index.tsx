interface ShowProps {
  when?: unknown;
  children: () => React.ReactNode;
}

export function Show(props: ShowProps) {
  const { when: flag, children } = props;
  return flag ? children() : null;
}
