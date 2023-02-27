import React, { useState, useEffect } from "react";
import "./header.styles.scss";

import arrow from "../../assets/img/arrow.svg";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setIsHeaderVisible(true);
  }, []);

  return (
    <div className="header">
      <div
        className={`header-image ${
          isHeaderVisible ? "header-image--visible" : ""
        }`}
      ></div>
      <div className="header-container">
        <div className="header-logo">
          <h1>{"<Andreia Almeida/>"}</h1>
        </div>
        <div className="header-slogan">
          <h3>Frontend developer</h3>
        </div>
        <div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
