import { Outlet } from 'react-router-dom';

export function Component() {
  return (
    <section>
      <header>header</header>
      <section>
        <aside>aside</aside>
        <Outlet />
      </section>
      <footer>footer</footer>
    </section>
  );
}
