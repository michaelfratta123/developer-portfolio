import React from "react";
import Card from "react-bootstrap/Card";
import Layout from "../components/Layout";

// create a contact component for the contacts
const Contact = () => {
  return (
    <Layout>
      <Card bg="dark" className="col-md-4 mx-auto m-5">
        <Card.Header className="d-flex justify-content-center about-header text-light">
          <span style={{ fontSize: "x-large" }}>Contact</span>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center mx-2 text-light">
          <span
            style={{
              fontSize: "x-large",
              textAlign: "left",
            }}
          >
            <div className="m-3">
              <div className="fs-5 m-2">
                <i className="bi bi-geo-alt-fill mx-2"></i>
                <span style={{ color: "white" }} className="m-1">
                  London, UK
                </span>
              </div>
              <div className="fs-5 m-2">
                <i className="bi bi-telephone-fill mx-2"></i>
                <span style={{ color: "white" }} className="m-1">
                  Ask Me
                </span>
              </div>
              <div className="fs-5 m-2">
                <i className="bi bi-github mx-2"></i>
                <span style={{ color: "white" }} className="m-1">
                  /michaelfratta123
                </span>
              </div>
            </div>
          </span>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Contact;
