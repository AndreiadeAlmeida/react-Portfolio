import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ExpandFullScreen = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(containerRef.current, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 99999,
    });
  }, []);

  const handleClick = () => {
    gsap.to(containerRef.current, {
      duration: 0.5,
      width: "100%",
      height: "100%",
      onComplete: () => {
        gsap.to(containerRef.current, {
          duration: 0.5,
          x: "-50%",
          position: 'fixed';
        });
      },
    });
  };

  return (
    <div ref={containerRef} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ExpandFullScreen;
