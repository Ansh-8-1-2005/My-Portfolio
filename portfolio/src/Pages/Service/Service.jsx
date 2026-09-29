import React from 'react';
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaCode,
  FaTools
} from "react-icons/fa";
import './Service.css';
function Service() {
    return ( 
        <section className="services" id="services">

            <div className="services-container">

                {/* Heading */}
                <div className="section-heading">
                  <h2 className="section-title">Services</h2>

                  <p className="section-subtitle">
                    What I Can Do For You
                  </p>
                </div>


                {/* Service Cards */}
                <div className="services-grid">

                    {/* Card 1 */}
                    <div className="service-card">
                      <div className="service-icon">
                         <FaLaptopCode />
                      </div>

                      <h3>Web Development</h3>

                      <p>
                        I build responsive and user-friendly websites
                        that work smoothly across desktop, tablet and
                        mobile devices.
                      </p>
                    </div>


                    {/* Card 2 */}
                    <div className="service-card">
                      <div className="service-icon">
                        <FaReact/>
                      </div>

                      <h3>Frontend Development</h3>

                      <p>
                        I create modern and interactive user interfaces
                        using React, JavaScript, HTML and CSS.
                      </p>
                    </div>


                    {/* Card 3 */}
                    <div className="service-card">
                      <div className="service-icon">
                         <FaServer />
                      </div>

                      <h3>Backend Development</h3>

                      <p>
                        I develop REST APIs and backend systems using
                        Node.js, Express.js and MongoDB.
                      </p>
                    </div>


                    {/* Card 4 */}
                    <div className="service-card">
                      <div className="service-icon">
                        <FaCode />
                      </div>

                      <h3>MERN Stack Development</h3>

                      <p>
                        I build full-stack web applications using
                        MongoDB, Express.js, React and Node.js.
                      </p>
                    </div>


                    {/* Card 5 */}
                    <div className="service-card">
                      <div className="service-icon">
                        <FaTools />
                      </div>

                      <h3>Website Maintenance</h3>

                      <p>
                        I can help fix bugs, improve existing websites
                        and add new features when required.
                      </p>
                    </div>

                </div>

            </div>

        </section>

    );
}

export default Service;