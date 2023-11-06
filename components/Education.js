import React from "react";
import { Accordion } from "react-bootstrap";

// create an Education component for the education accordion
const Education = () => {
  return (
    <Accordion bg="dark" className="m-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ padding: "0", margin: "0" }}>
          Education
        </Accordion.Header>
        <Accordion.Body className="bg-dark text-light">
          <ul>
            <li>ICL Full Stack Web Development Bootcamp</li>
            <li>BSc Hons in Computer Science and IT</li>
            <li>High School Diploma</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Education;
