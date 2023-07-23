import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  padding: 20px 10px;
  background-color: teal;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: all 0.3s ease 0s;

  &.active {
    color: tomato;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
