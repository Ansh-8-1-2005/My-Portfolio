import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaCode
} from "react-icons/fa";

import "./header.css";

function Footer() {

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      {/* CTA Section */}
      <div className="footer-cta">

        <div>
          <p className="footer-small-title">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's build something
            <span> amazing together.</span>
          </h2>
        </div>

        <a href="/Contact" className="footer-contact-btn">
          Let's Talk →
        </a>

      </div>


      {/* Main Footer */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            <FaCode />
            <span>Ansh<span>Dev</span></span>
          </div>

          <p>
            MERN Stack Developer focused on creating
            modern, responsive and scalable web applications.
          </p>

        </div>


        {/* Navigation */}
        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Services">Services</a>
          <a href="/Skills">Skills</a>
          <a href="/Projects">Projects</a>
          <a href="/Contact">Contact</a>

        </div>


        {/* Social */}
        <div className="footer-social-section">

          <h4>Connect</h4>

          <div className="footer-social">

            <a
              href="https://github.com/Ansh-8-1-2005"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ansh-pandey-5a4552278"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

          <p>
            Open to opportunities & collaborations
          </p>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Ansh Pandey. All rights reserved.
        </p>

        <p>
          Built with ❤️ using React
        </p>

        <button
          className="footer-top-btn"
          onClick={handleTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;