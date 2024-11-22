import { Link } from 'react-router-dom';
import { StyledHeader } from './header.style';

export default function Header() {
  return (
    <StyledHeader className="inner">
      <Link to={'/'}>
        <img src="/icons/logo.svg" alt="" />
      </Link>
      <nav>
        <Link to="/art">공연/전시</Link>
        <Link to="/event">이벤트</Link>
      </nav>
    </StyledHeader>
  );
}
