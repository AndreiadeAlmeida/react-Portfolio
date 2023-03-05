import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import IMAGES
import workImage from "../../assets/img/work.png";
import img1 from "../../assets/img/img1.jpeg";

import "./work.styles.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Work = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fixedComponent, setFixedComponent] = useState(false);
  const [modalPosition, setModalPosition] = useState({});
  const rightSectionRef = useRef(null);
  const leftSectionRef = useRef(null);
  const workComponent = useRef(null);
  const body = document.body;
  let modalTop;

  const handleScroll = () => {
    const workComponentTop = workComponent.current.getBoundingClientRect().top;
    return workComponentTop <= 0
      ? setFixedComponent(true)
      : setFixedComponent(false);
  };

  const scrollToTop = (id) => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: `#${id}`,
      ease: "power2.inOut",
    });
  };

  const handleButtonClick = (e) => {
    if (!document.querySelector(".left-section").classList.contains("fixed")) {
      window.scrollTo({
        top: workComponent.current.offsetTop,
      });
      setFixedComponent(true);
    } else {
      scrollToTop(e.target.id);
    }

    modalTop = e.target.getBoundingClientRect().top;
    body.classList.add("modal-open");
    setModalOpen(true);
  };

  const handleButtonClose = (e) => {
    e.preventDefault();
    body.classList.remove("modal-open");
    setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const modal = document.querySelector(".modal");
    if (modalOpen) {
      gsap.from(modal, {
        duration: 0.75,
        x: "50%",
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: modalTop,
        left: 0,
      });
    }

    console.log(modalPosition.top);
    console.log(workComponent.current.getBoundingClientRect().top);
  });

  return (
    <Element name="work">
      <div className="work-section" ref={workComponent}>
        <div
          className={`left-section ${fixedComponent ? "fixed" : null}`}
          id="work-left"
          ref={leftSectionRef}
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
        <div className="right-section" id="work" ref={rightSectionRef}>
          <div
            onClick={handleButtonClick}
            id="img1"
            className="content-img"
            style={{
              backgroundImage: `url(${img1})`,
              height: "100vh",
            }}
          ></div>
          <div
            onClick={handleButtonClick}
            id="img2"
            className="content-img"
            style={{
              backgroundImage: `url(${img1})`,
              height: "100vh",
            }}
          ></div>
        </div>
      </div>

      
      {modalOpen && (
        <div className="modal">
          <div className="modal-close" onClick={handleButtonClose}>
            x
          </div>
          <div className="modal-container">
            <p>hello world</p>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Work;
