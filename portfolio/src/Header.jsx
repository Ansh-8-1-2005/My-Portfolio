import React, { useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid header">

        {/* Logo / Brand */}
        <div className="MERN">
          <h1>MERN Stack Developer</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className={`navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="nav-links">

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/About"
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/Services"
              onClick={closeMenu}
            >
              Services
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/Skills"
              onClick={closeMenu}
            >
              Skills
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/Projects"
              onClick={closeMenu}
            >
              Projects
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/Contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>

          </div>

          {/* Hire Me button on mobile */}
          <button
            className="hire-btn mobile-hire"
            onClick={() => {
              navigate("/Contact");
              closeMenu();
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Hire Me button on desktop */}
        <button
          className="hire-btn desktop-hire"
          onClick={() => navigate("/Contact")}
        >
          Hire Me
        </button>

      </div>
    </nav>
  );
}

export default Header;