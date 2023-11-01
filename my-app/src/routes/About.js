import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectImg from "../components/ProjectImg";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <ProjectImg heading="About" text="I'm a Front end developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
