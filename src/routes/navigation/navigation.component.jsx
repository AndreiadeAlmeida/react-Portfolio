import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

import "./navigation.styles.scss";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      {" "}
      <a className="logo-container" href="">
        {"<AA/>"}
      </a>
      <div className={`nav-links-container ${isMenuOpen ? "is-open" : ""}`}>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          About
        </ScrollLink>
        <ScrollLink to="work" smooth={true} duration={500} className="nav-link">
          Work
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Contact
        </ScrollLink>
      </div>
      <div onClick={handleMenuClick} className="nav-links-burger">
        <div className="nav-burger burger-1"></div>
        <div className="nav-burger burger-2"></div>
        <div className="nav-burger burger-3"></div>
      </div>
    </nav>
  );
};

export default Navigation;
