import React from "react";
import { Element } from "react-scroll";
import "./about.styles.scss";

const About = () => {
  return (
    <Element name="about">
      <div className="about">
        <h1>About</h1>
        <p>
          I am an enthusiastic, highly creative, multitalented, and motivated
          web-developer, with an enquiring mind. My years of combined experience
          as a data analyst, freelancer and as a junior front end developer have
          taught me how to work under pressure and to tight deadlines, handling
          data with precision and adaptability. I have learned how to
          effectively communicate within a diverse environment and collaborate
          with colleagues on various tasks that were often challenging,
          developing my problem-solving skills tremendously.
        </p>
      </div>
    </Element>
  );
};

export default About;
