import styled from "styled-components";
import { Link as LinkDom } from 'react-router-dom';

export const Link = styled(LinkDom)`
color: black;
font-size: 18px;
font-weight: 500;

:hover {
  color: red;
}
`;