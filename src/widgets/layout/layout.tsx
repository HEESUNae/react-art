import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { Loading } from '../loading/loading';
import Footer from '../footer/footer';
import { StyledLayout } from './layout.style';

export default function Layout() {
  return (
    <StyledLayout>
      <Loading />
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
}
