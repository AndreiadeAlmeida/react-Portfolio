import React, { useEffect, useState } from "react";

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
        <div className="nav-link">About</div>
        <div className="nav-link">Work</div>
        <div className="nav-link">Contact</div>
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
