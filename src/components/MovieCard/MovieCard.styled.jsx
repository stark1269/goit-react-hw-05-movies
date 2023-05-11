import styled from "styled-components";
import { Link as LinkDom, NavLink as NavLinkDom } from "react-router-dom";

export const NavLink = styled(NavLinkDom)`
color: black;

:hover {
  color: red;
}
&.active {
    color: red;
  };
`;

export const Main = styled.main`
position: relative;
`;

export const Link = styled(LinkDom)`
color: black;
position: absolute;
left: 12px;
top: 12px;

:hover {
  color: red;
}
`;

export const Container = styled.div`
padding: 48px;
display: flex;
gap: 18px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 32px;
gap: 18px;
`;

export const Span = styled.span`
font-weight: 700;
font-size: 22px;
`;

export const Title = styled.h2`
font-size: 32px;
`;

export const Text = styled.p`
display: flex;
flex-direction: column;
gap: 8px;
`;