interface SwitchProps {
  when?: unknown;
  children: () => React.ReactNode;
  fullback: React.ReactNode;
}

export function Switch(props: SwitchProps) {
  const { when: flag, children, fullback } = props;

  return flag ? children() : fullback;
}
