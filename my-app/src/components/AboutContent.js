import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React1 from "../images/react1.jpg";
import React2 from "../images/react2.png";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>
          I am a react front-end developer and i build this responsve pages for
          people!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="trueaboyt1"></img>
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="trueaboyt1"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
