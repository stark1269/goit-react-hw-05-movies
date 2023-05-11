import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const HeaderStyled = styled.header`
height: 120px;
padding: 32px;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;

export const Nav = styled.nav`
display: flex;
gap: 18px;
`;

export const Link = styled(NavLink)`
font-size: 22px;
color: white;
font-weight: 700;

&.active {
    color: red;
  };
`;