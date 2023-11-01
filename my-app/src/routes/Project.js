import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectImg from "../components/ProjectImg";
import PriceCard from "../components/PriceCard";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectImg heading="Projects" text="Some of My recent Works" />
      <Work />
      <PriceCard />
      <Footer />
    </div>
  );
};

export default Projects;
