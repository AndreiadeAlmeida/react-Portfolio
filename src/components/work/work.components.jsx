import React, { useState, useEffect } from "react";
import workImage from "../../assets/img/work.png";
import "./work.styles.scss";

const Work = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [componentHeight, setComponentHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("work-left");
      const rect = element.getBoundingClientRect();
      setIsFixed(rect.top <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const workRightElement = document.querySelector(".work-right");
    const calculateHeight = () => {
      const workCaseElements =
        workRightElement && workRightElement.querySelectorAll(".work-case");
      setComponentHeight(
        Array.from(workCaseElements).reduce((acc, el) => {
          return acc + el.getBoundingClientRect().height;
        }, 0)
      );
    };

    calculateHeight();
  });

  console.log(componentHeight);

  return (
    <div className="work" id="work">
      <div className={`work-left ${isFixed ? "fixed" : ""}`} id="work-left">
        <div className="content">
          <h1>Work</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa
            erat, mollis sed ornare non, rutrum viverra quam. Nullam nibh
            mauris, maximus a pharetra eu, feugiat sed nisl. Donec nisi justo,
            posuere at sem ornare, eleifend facilisis libero. Quisque dignissim
            tortor ac fermentum euismod. Mauris neque ipsum, laoreet eget risus
            nec, faucibus cursus purus. Vestibulum auctor, nulla at facilisis
            tempor, nunc nulla elementum sem, at aliquam elit augue sit amet
            augue.{" "}
          </p>
          <img src={workImage} alt="Work computer" />
        </div>
      </div>
      <div className="work-right" style={{ height: componentHeight }}>
        <div className="work-case"></div>
        <div className="work-case" style={{ backgroundColor: "#ffffff" }}></div>
        <div className="work-case"></div>
        <div className="work-case"></div>
        <div className="work-case"></div>
      </div>
    </div>
  );
};

export default Work;
