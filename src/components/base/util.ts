export function propsHandler<T extends Record<string, unknown>>(props: T): T {
  const newProps: Record<string, unknown> = {};
  Object.keys(props).forEach((key) => {
    if (key.startsWith('$')) {
      newProps[key.slice(1)] = props[key];
    } else {
      newProps[key] = props[key];
    }
  });
  return newProps as T;
}
