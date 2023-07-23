import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 5px;
  gap: 10px;
`;

export const ItemLink = styled(NavLink)`
  display: block;
  padding: 10px;
  background-color: rgba(156, 243, 231, 0.26);
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: black;

  &:hover {
    transform: scale(1.01);
  }
`;
