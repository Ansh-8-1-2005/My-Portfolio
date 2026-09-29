import React from 'react';
import './About.css'
import { FaDownload } from "react-icons/fa";

function AboutMe() {
    return ( 
        <div className='About container-fluid'>
            <div className='about-me row'>
                <div className='col-lg-6 col-12'>
                    <img src="/Photos/ansh.jpg" alt="image" className='image'/>
                </div>

                <div className='col-lg-6 col-12'>
                    <h2 className='section-title sec'>About Me</h2>
                    <h3>
                        Hi, I'm <span className="about-name">Ansh Pandey</span> 👋
                    </h3>
                    <p className='about-description'>I'm a BSc graduate and a passionate MERN Stack Developer focused on building responsive and user-friendly web applications. I work with technologies like React, Node.js, Express.js and MongoDB.</p>

                    <p  className='about-description'>I enjoy learning new technologies, solving programming problems and turning ideas into real-world projects. My goal is to grow as a software developer and build scalable products that solve real problems.</p>

                    <a
                      href="/Ansh-Pandey-Resume.pdf"
                      download
                      className="resume-btn"
                    >
                     <FaDownload /> Download Resume
                    </a>
                </div>
            </div>

             {/* Stats */}
             
            <div className="about-stats">

              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Projects</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">4+</span>
                <span className="stat-label">Technologies</span>
              </div>

              <div className="stat-card">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Stack</span>
              </div>

            </div>

        </div>
     );
}

export default AboutMe;