import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectImg from "../components/ProjectImg";
import Form from "../components/Form.js";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ProjectImg heading="Contact" text="Let's get Connected!" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
