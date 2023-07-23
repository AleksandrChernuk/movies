import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

export const BackLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  color: black;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  transition: all 0.3s ease 0s;

  &:hover {
    border: 1px solid red;
    color: red;
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  max-width: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ContentWrapp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  gap: 5px;
`;

export const AdditionalWrapp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const GenresItem = styled.li`
  text-decoration: none;
`;

export const AdditionaLink = styled(NavLink)`
  display: inline-flex;
  text-decoration: none;
  color: black;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  transition: all 0.3s ease 0s;

  &:hover {
    border: 1px solid teal;
    color: teal;
    transform: scale(1.1);
  }
`;
