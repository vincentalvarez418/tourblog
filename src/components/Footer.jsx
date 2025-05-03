import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"; // Importing icons from react-icons
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
            aria-label="GitHub"
          >
            <FaGithub size={24} />
            <span className="footer-link-name">GitHub</span>
          </a>
          <span className="footer-separator">|</span>
          <a
            href="https://www.linkedin.com/in/vincent-anthony-alvarez-5a4b28359/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
            <span className="footer-link-name">LinkedIn</span>
          </a>
          <span className="footer-separator">|</span>
          <a
            href="https://vincentalvarez.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <FaGlobe size={24} />
            <span className="footer-link-name">Portfolio</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
