import { Outlet } from 'react-router-dom';
import Header from '../shared/ui/header/header';

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
