import React, { useRef, useEffect } from "react";
import { Player } from "video-react";
import img1 from "../../assets/img/img1.jpeg";
import "./workEl.styles.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkEl = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".work-component",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=10000",
      },
    });
  });

  return (
    <div id="scrollContainer">
      <button className="scrollContainer-close" onClick={() => {}}>
        x
      </button>
      <div className="work-component">
        <div
          className="work-img panel"
          style={{
            backgroundImage: `url(${img1})`,
            height: "100vh",
          }}
        ></div>
        <div className="work-info panel">
          <div className="top-copy">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Nulla et mi eu mi porttitor</p>
            <p>Nulla et mi eu mi porttitor</p>
          </div>
          <div className="middle-copy panel">
            <h1>Title</h1>
            <p>
              Aliquam pretium eros sed eleifend vehicula. Ut tincidunt tellus
              est, vel bibendum justo pharetra eu. Integer bibendum enim lacus,
              in hendrerit orci ornare a. Aenean egestas eleifend tempor. Mauris
              molestie diam sed egestas vulputate. Vestibulum quis ligula lacus.
              Cras vitae fermentum arcu, ac maximus turpis. Curabitur purus est,
              molestie luctus justo et, congue lacinia nunc. Sed vel egestas
              neque. Nulla id nulla a eros vehicula maximus.
            </p>
          </div>
        </div>
        
        <div className="work-video panel">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkEl;
