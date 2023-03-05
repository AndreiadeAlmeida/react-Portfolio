import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import gsap from "gsap";

import img1 from "../../assets/img/img1.jpeg";
import workImage from "../../assets/img/work.png";
import "./work.styles.scss";
import ExpandFullScreen from "../expandFullScreen/expandFullScreen.component";
import WorkEl from "../../routes/workEl/workEl.component";

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFixed, setIsFixed] = useState(false);
  const [componentHeight, setComponentHeight] = useState(false);
  const [workHeight, setWorkHeight] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("work");
    const rect = element.getBoundingClientRect();

    if (rect.top <= 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const workRightElement = document.querySelector(".right-section");
    const calculateHeight = () => {
      const workCaseElements =
        workRightElement &&
        workRightElement.querySelectorAll(".right-section-content");
      setComponentHeight(
        Array.from(workCaseElements).reduce((acc, el) => {
          setWorkHeight(el.getBoundingClientRect().height);
          return acc + el.getBoundingClientRect().height;
        }, 0)
      );
    };

    calculateHeight();
  }, []);

  // MODAL
  const handleModalOpen = (e) => {
    console.log("click");
    e.stopPropagation();
    setIsModalOpen(true);
  };

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <Element name="work" style={{ height: componentHeight }}>
      <div className="work-section">
        <div
          className={`left-section ${isFixed ? "fixed" : ""}`}
          id="work-left"
        >
          <div className="content">
            <h1>Work</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              massa erat, mollis sed ornare non, rutrum viverra quam. Nullam
              nibh mauris, maximus a pharetra eu, feugiat sed nisl. Donec nisi
              justo, posuere at sem ornare, eleifend facilisis libero. Quisque
              dignissim tortor ac fermentum euismod. Mauris neque ipsum, laoreet
              eget risus nec, faucibus cursus purus. Vestibulum auctor, nulla at
              facilisis tempor, nunc nulla elementum sem, at aliquam elit augue
              sit amet augue.{" "}
            </p>
            <img src={workImage} alt="Work computer" />
          </div>
        </div>
        <div
          className="right-section"
          id="work"
          style={{ height: componentHeight }}
        >
          <div
            onClick={handleModalOpen}
            className="content-img"
            style={{
              backgroundImage: `url(${img1})`,
              height: "100vh",
            }}
          ></div>
        </div>
      </div>
      {isModalOpen && <WorkEl />}
    </Element>
  );
};

export default Work;
