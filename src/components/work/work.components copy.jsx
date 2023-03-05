import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import gsap from "gsap";

import img1 from "../../assets/img/img1.jpeg";
import workImage from "../../assets/img/work.png";
import "./work.styles.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Work = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [componentHeight, setComponentHeight] = useState(false);
  const [workHeight, setWorkHeight] = useState(false);

  const modalComponent = useRef(null);

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

  const [modalOpen, setModalOpen] = useState(false);
  const body = document.body;
  const workComponent = document.querySelector(".work-section");

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (workComponent.getBoundingClientRect().top > 0) {
      // if myComponent is not at the top of the page
      window.scrollTo({
        top: workComponent.offsetTop,
        behavior: "smooth", // optional, for smooth scrolling
      });

      window.onscroll = () => {
        console.log(workComponent.getBoundingClientRect().top);
        if (workComponent.getBoundingClientRect().top < 0) {
          body.classList.add("modal-open");
          setModalOpen(true);

          window.onScroll = null;
        }
      };
    } else {
      body.classList.add("modal-open");
      setModalOpen(true);
    }
  };

  const handleButtonClose = (e) => {
    e.preventDefault();
    body.classList.remove("modal-open");
    setModalOpen(false);
  };

  useEffect(() => {
    const modal = document.querySelector(".modal");
    if (modalOpen) {
      gsap.from(modal, {
        duration: 0.75,
        x: "50%", // starting position on the right side
        ease: "power2.out",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0",
        left: "0",
      });
    }
  }, [modalOpen]);

  // useEffect(() => {
  //   if (modalOpen) {
  //     const panelsContainer = document.querySelector(".modal-container");
  //     const panels = gsap.utils.toArray(".modal-container .panel");
  //     let tween;

  //     tween = gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".modal-container",
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 1),
  //         end: "+=3500",
  //       },
  //     });
  //   }
  // }, [modalOpen]);

  return (
    <Element name="work" style={{ height: componentHeight }}>
      <div className="work-section">
        <div
          className={`left-section ${isFixed ? "fixed" : ""}`}
          id="work-left"
        >
          <div className="content" ref={modalComponent}>
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
            onClick={handleButtonClick}
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
            <div className="modal-section1 panel">
              <div
                className="work-img"
                style={{
                  backgroundImage: `url(${img1})`,
                  height: "100vh",
                }}
              ></div>
              <div className="work-info">
                <div className="work-info-component">
                  <div className="top-copy">
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Nulla et mi eu mi porttitor</p>
                    <p>Nulla et mi eu mi porttitor</p>
                  </div>
                  <div className="middle-copy">
                    <h1>Title</h1>
                    <p>
                      Aliquam pretium eros sed eleifend vehicula. Ut tincidunt
                      tellus est, vel bibendum justo pharetra eu. Integer
                      bibendum enim lacus, in hendrerit orci ornare a. Aenean
                      egestas eleifend tempor. Mauris molestie diam sed egestas
                      vulputate. Vestibulum quis ligula lacus. Cras vitae
                      fermentum arcu, ac maximus turpis. Curabitur purus est,
                      molestie luctus justo et, congue lacinia nunc. Sed vel
                      egestas neque. Nulla id nulla a eros vehicula maximus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-section2 panel">
              <div
                className="work-img"
                style={{
                  backgroundImage: `url(${img1})`,
                  height: "100vh",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

export default Work;
