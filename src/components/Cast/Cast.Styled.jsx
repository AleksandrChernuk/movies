import styled from "styled-components";

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CardImage = styled.img`
  max-width: 182px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const CastItemText = styled.li`
  padding: 0;

  span {
    color: teal;
  }
`;
