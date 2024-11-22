import { Outlet } from 'react-router-dom';
import Header from './header/header';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
