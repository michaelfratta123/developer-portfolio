import React from "react";
import { Accordion } from "react-bootstrap";

// create an Experience component for the experience accordion
const Experience = () => {
  return (
    <Accordion bg="dark" className="m-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ padding: "0", margin: "0" }}>
          Experience
        </Accordion.Header>
        <Accordion.Body className="bg-dark text-light">
          <ul>
            <li>Technical Support Specialist - Cayuse</li>
            <li>Tech Analyst - Octopus Electric Vehicles</li>
            <li>Customer Service Specialist - Booking.com</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Experience;
