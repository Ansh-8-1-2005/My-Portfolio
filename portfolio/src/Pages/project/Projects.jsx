import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        {/* Heading */}
        <div className="section-heading">

          <h2 className="section-title">
            My Projects
          </h2>

          <p className="section-subtitle">
            Some of my recent work
          </p>

        </div>


        {/* Projects Grid */}
        <div className="projects-grid">


          {/* Project 1 */}
          <div className="project-card">

            <div className="project-image">
              <img
                src="/Photos/home.png"
                alt="Zerodha Clone"
              />
            </div>

            <div className="project-content">

              <h3>
                Zerodha Clone
              </h3>

              <p>
                A full-stack trading platform clone with
                authentication, dashboard, portfolio and
                buy-sell functionality.
              </p>


              {/* Technologies */}
              <div className="project-tech">

                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>

              </div>


              {/* Buttons */}
              <div className="project-buttons">

                <a
                  href="https://zerodha-project-iw96.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href="https://github.com/Ansh-8-1-2005/Zerodha-project"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <div className="project-image">
              <img
                src="/Photos/homepage.png"
                alt="Airbnb Clone"
              />
            </div>

            <div className="project-content">

              <h3>
                Airbnb Clone
              </h3>

              <p>
                A full-stack property listing web application
                where users can explore listings, create
                properties and manage their accounts.
              </p>


              <div className="project-tech">

                <span>EJS</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>

              </div>


              <div className="project-buttons">

                <a
                  href="https://major-project-1weu.onrender.com/listings"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href="https://github.com/Ansh-8-1-2005/Major-Project"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default Projects;