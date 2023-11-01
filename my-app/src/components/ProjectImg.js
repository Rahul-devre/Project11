import React, { Component } from "react";
import "./ProjImgStyles.css";
import mainImg from "../images/pexels-photo-1181298.jpeg";
class ProjectImg extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ProjectImg;
