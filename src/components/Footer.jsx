import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://github.com/vincentalvarez418"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <span className="footer-separator">|</span>
          <a
            href="https://www.linkedin.com/in/vincent-anthony-alvarez-5a4b28359/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <span className="footer-separator">|</span>
          <a
            href="https://vincentalvarez.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PORTFOLIO
          </a>
        </div>
        <p className="footer-note">All Rights Reserved © Vincent Alvarez</p>
      </div>
    </footer>
  );
};

export default Footer;
