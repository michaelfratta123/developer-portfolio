import React from "react";
import Card from "react-bootstrap/Card";
import Layout from "../components/Layout";
import Link from "next/link";

// create a linkstyle for the Next links
const linkStyle = {
  color: "white",
  textDecoration: "none",
};

// create a Projects component for the projects links to github
const Projects = () => {
  return (
    <Layout>
      <Card bg="dark" className="col-md-4 mx-auto m-5">
        <Card.Header className="d-flex justify-content-center about-header text-light">
          <span style={{ fontSize: "x-large" }}>Projects</span>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center mx-2 text-light">
          <span
            style={{
              fontSize: "x-large",
              textAlign: "left",
            }}
          >
            <ul>
              <li>
                <Link
                  style={linkStyle}
                  href="https://github.com/michaelfratta123/hangman"
                  target="_blank"
                >
                  Hangman game - GitHub
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyle}
                  href="https://github.com/michaelfratta123/itunes-search"
                  target="_blank"
                >
                  iTunes Search app - GitHub
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyle}
                  href="https://github.com/michaelfratta123/CapstoneProject1"
                  target="_blank"
                >
                  Capstone Project 1 - GitHub
                </Link>
              </li>
            </ul>
          </span>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Projects;
