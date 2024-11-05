interface SwitchProps {
  if: boolean;
  children: () => React.ReactNode;
  fullback: React.ReactNode;
}

export function Switch(props: SwitchProps) {
  const { if: flag, children, fullback } = props;

  return flag ? children() : fullback;
}
