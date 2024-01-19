import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/models">Models</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
