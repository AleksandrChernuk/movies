import { NavLink } from "react-router-dom";
import { Nav, StyledNavLink } from "./AppBar.Styled";

const AppBar = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </Nav>
  );
};

export default AppBar;
