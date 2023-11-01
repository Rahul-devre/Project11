import React from "react";
import "./MainImageStyles.css";
import Intoimg from "../images/pexels-christina-morillo-1181279.jpg";
import { Link } from "react-router-dom";
const MainImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Intoimg} alt="into img"></img>
      </div>
      <div className="content">
        <p>Hi,My Name is Rahul</p>
        <h1>And I'M A REACT DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
