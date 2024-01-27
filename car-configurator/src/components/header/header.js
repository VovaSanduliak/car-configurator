import companyLogo from "./bmw_logo.svg";

import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { LOCALS } from "../../i18n/constants";
import "./header.css";

import { useTranslation } from "react-i18next";

const changeLanguage = (lang) => {
  i18next.changeLanguage(lang);
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const { t } = useTranslation();

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
          <NavLink to="/">{t("Home")}</NavLink>
        </li>
        <li>
          <NavLink to="/models">{t("Catalog")}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t("About")}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{t("Contact")}</NavLink>
        </li>
        <li>
          {i18next.language}
          <div>
            <button
              disabled={i18next.language === LOCALS.EN}
              onClick={() => changeLanguage(LOCALS.EN)}
            >
              EN
            </button>
            <button
              disabled={i18next.language === LOCALS.UK}
              onClick={() => changeLanguage(LOCALS.UK)}
            >
              UA
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
