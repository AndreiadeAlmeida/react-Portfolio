import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const ExpandFullScreen = ({ children, className }) => {
  const componentRef = useRef(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    gsap.set(componentRef.current, {
      height: "100vh",
      zIndex: 999,
    });
  }, []);

  const handleClick = () => {
    gsap.to(componentRef.current, { duration: 1, width: "100%", x: "-50vw" });
  };
  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.to(componentRef.current, {
      duration: 1,
      height: viewportSize.height,
      width: viewportSize.width,
      onComplete: () => {
        console.log("animation complete");
      },
    });
  }, [viewportSize]);

  console.log(viewportSize);

  return (
    <div className={className} ref={componentRef} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ExpandFullScreen;
