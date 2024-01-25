import companyLogo from "./bmw_logo.svg";

import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <nav>
      <Link to="/" className="logo-link">
        <img
          style={{ width: "2.5rem" }}
          src={companyLogo}
          alt="logo bmw"
          className="logo"
        />
      </Link>
      <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
  );
};

export default Header;
