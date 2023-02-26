import React, { useState, useEffect } from "react";
import "./header.styles.scss";

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
      </div>
    </div>
  );
};

export default Header;
