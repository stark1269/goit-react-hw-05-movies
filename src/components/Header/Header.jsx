import { HeaderStyled, Nav, Link } from "./Heades.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/movie'}>Movie</Link>
      </Nav>
    </HeaderStyled>
  )
};