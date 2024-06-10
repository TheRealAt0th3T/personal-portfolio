import React from "react";
import "./Content.css";

export const About = () => {
  return (
    <div className="intro">
      <h1>About Me</h1>
      <p>
        I am a full stack developer with a passion for JavaScript, React, and
        overall web development. I also have an interest in Machine Learning and
        Natural Language Processing.
      </p>
      <div id="tools">
        {/* TODO: add grid of images for tools/languages/frameworks/etc */}
      </div>
    </div>
  );
};

export default About;
