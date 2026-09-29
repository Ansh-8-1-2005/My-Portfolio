import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaCode
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb
} from "react-icons/si";

import "./Skills.css";

function Skills(){
  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        {/* Heading */}
        <div className="section-heading">

          <h2 className="section-title">
            My Skills
          </h2>

          <p className="section-subtitle">
            Technologies I Work With
          </p>

        </div>


        {/* Skills Categories */}
        <div className="skills-grid">


          {/* Frontend */}
          <div className="skill-category text-center">

            <h3>Frontend</h3>

            <div className="skill-list">

              <div className="skill-item">
                <FaHtml5 className="html-icon" />
                <span>HTML5</span>
              </div>

              <div className="skill-item">
                <FaCss3Alt className="css-icon" />
                <span>CSS3</span>
              </div>

              <div className="skill-item">
                <FaJs className="js-icon" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FaReact className="react-icon" />
                <span>React</span>
              </div>

              <div className="skill-item">
                <FaBootstrap className="bootstrap-icon" />
                <span>Bootstrap</span>
              </div>

            </div>

          </div>


          {/* Backend */}
          <div className="skill-category text-center">

            <h3>Backend</h3>

            <div className="skill-list">

              <div className="skill-item">
                <FaNodeJs className="node-icon" />
                <span>Node.js</span>
              </div>

              <div className="skill-item">
                <SiExpress className="express-icon" />
                <span>Express.js</span>
              </div>

              <div className="skill-item">
                <SiMongodb className="mongo-icon" />
                <span>MongoDB</span>
              </div>

              <div className="skill-item">
                <FaJs className="js-icon" />
                <span>REST API</span>
              </div>

            </div>

          </div>


          {/* Tools */}
          <div className="skill-category text-center">

            <h3>Tools</h3>

            <div className="skill-list">

              <div className="skill-item">
                <FaGitAlt className="git-icon" />
                <span>Git</span>
              </div>

              <div className="skill-item">
                <FaGithub className="github-icon" />
                <span>GitHub</span>
              </div>

            </div>

          </div>


          {/* Learning */}
          <div className="skill-category text-center">

            <h3>Currently Learning</h3>

            <div className="skill-list">

              <div className="skill-item">
                <FaJava className="java-icon" />
                <span>Java</span>
              </div>

              <div className="skill-item">
                <FaCode className="dsa-icon" />
                <span>DSA</span>
              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default Skills;