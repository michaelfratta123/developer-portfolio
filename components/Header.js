import React from "react";
import Link from "next/link";

// create a linkstyle for the next Links
const linkStyle = {
  marginRight: 15,
  color: "white",
  textDecoration: "none",
  fontSize: "x-large",
};

// creater a header component for the header
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          {/* link back to the homepage */}
          <Link href="/" style={linkStyle}>
            <h1 className="text-light">Michael Fratta</h1>
            <h2 className="text-light">Junior Fullstack Developer</h2>
          </Link>
          <div>
            {/* links to about, projects, and contact */}
            <Link href="/about" style={linkStyle}>
              About
            </Link>
            <Link href="/projects" style={linkStyle}>
              Projects
            </Link>
            <Link href="/contact" style={linkStyle}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
