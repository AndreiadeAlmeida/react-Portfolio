import React, { useRef, useEffect } from "react";
import { Player } from "video-react";
import img1 from "../../assets/img/img1.jpeg";
import "./workEl.styles.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const WorkEl = () => {
  // useEffect(() => {
  //   let sections = gsap.utils.toArray(".panel");
  //   const container = document.getElementById("scrollContainer");
  //   gsap.to(sections, {
  //     // xPercent: -100 * (sections.length - 1),
  //     x: () =>
  //       -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".work-component",
  //       scroller: "#scrollContainer",
  //       pin: true,
  //       scrub: 1,
  //       // snap: 1 / (sections.length - 1),
  //       // base vertical scrolling on how wide the container is so it feels more natural.

  //       end: () => "+=" + container.offsetWidth,
  //     },
  //   });
  // });
  const innerWidth = window.innerWidth;

  useEffect(() => {
    const panelsContainer = document.querySelector(".work-component");
    const panels = gsap.utils.toArray(".work-component .panel");
    let tween;

    console.log(panelsContainer.offsetWidth);
    console.log(innerWidth);
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".work-component",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: "+=3500",
      },
    });
  });

  return (
    <div id="scrollContainer">
      <div className="work-component">
        <div className="work-general panel full-screen">
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
                  tellus est, vel bibendum justo pharetra eu. Integer bibendum
                  enim lacus, in hendrerit orci ornare a. Aenean egestas
                  eleifend tempor. Mauris molestie diam sed egestas vulputate.
                  Vestibulum quis ligula lacus. Cras vitae fermentum arcu, ac
                  maximus turpis. Curabitur purus est, molestie luctus justo et,
                  congue lacinia nunc. Sed vel egestas neque. Nulla id nulla a
                  eros vehicula maximus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="work-video panel full-screen">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        <div
          className="work-image panel full-screen"
          style={{
            backgroundImage: `url(${img1})`,
            height: "100vh",
          }}
        ></div>
      </div>
    </div>
  );
};

export default WorkEl;
