import React from "react";
import Card from "react-bootstrap/Card";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Layout from "../components/Layout";

// create an about component for the about link
const About = () => {
  return (
    <Layout>
      <Card bg="dark" className="m-5">
        <Card.Header className="d-flex justify-content-center about-header text-light">
          <span style={{ fontSize: "x-large" }}>About Me</span>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center mx-2 text-light">
          <span style={{ fontSize: "large", textAlign: "justify" }}>
            I am currently completing the ICL Full Stack Web Development coding
            bootcamp provided by HyperionDev, while working full time at an
            international tech company with headquarters in the US, that
            provides SaaS products for all kinds of academic/scientific
            research. In my spare time, I like to go to the gym, play
            videogames, travel, and I enjoy cultural activities in general.
          </span>
        </Card.Body>
      </Card>
      {/* add the other components here too */}
      <Experience />
      <Skills />
      <Education />
    </Layout>
  );
};

export default About;
