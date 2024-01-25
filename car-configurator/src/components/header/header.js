import Nav from "../nav/nav";
import Logo from "../logo/logo";

import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <nav>
      <Link to="/" className="title">
        Logo
      </Link>
      <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/models">Models</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>

    // <header style={{}}>
    //   <Logo />
    //   <Nav />
    // </header>
  );
};

export default Header;
