import React from "react";
import { Accordion } from "react-bootstrap";

// create a Skills component for the skills accordion
const Skills = () => {
  return (
    <Accordion bg="dark" className="m-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ padding: "0", margin: "0" }}>
          Skills
        </Accordion.Header>
        <Accordion.Body className="bg-dark text-light">
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Skills;
