import { Link } from 'react-router-dom';
import { StyledHeader } from './header.style';

export default function Header() {
  return (
    <StyledHeader className="inner">
      <Link to={'/'}>
        <img src="/icons/logo.svg" alt="" />
      </Link>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/art">영상자료</Link>
        <Link to="/novel">문장웹진</Link>
      </nav>
    </StyledHeader>
  );
}
