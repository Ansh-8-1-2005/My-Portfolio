import React from 'react';
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import {useNavigate} from "react-router-dom";
import './Home.css';

function Hero() {
    const navigate = useNavigate();
    return ( 
        <div className='container hero'>
            <div className='row'>
                <div className='hero-left col-lg-6 col-12'>
                    <h3 className='hero-second'>Hi, I'm</h3>
                    <h1 className='hero-title'>Ansh Pandey</h1>
                    <p>I build a scalibal fullstac applications using React, Node.js, Express and Mongodb. i love clean code and fast Uis.</p>
                    <div>
                        <button className='btn-primary' onClick={()=>navigate("/Projects")}>View Project</button>
                        <button className='btn-secondary' onClick={()=>navigate("/Contact")}>Let's Collaborate </button>
                    </div>
                </div>
                <div className='hero-right col-lg-6 col-12 text-center'>
                    <div className="profile-wrapper">
                        {/* profile-image */}
                        <img className = "profile-image" src="/Photos/ansh.jpg" alt="profil-image" />
                         {/* React */}
                        <div className="tech-icon react-icon">
                          <FaReact />
                        </div>

                        {/* Node */}
                        <div className="tech-icon node-icon">
                          <FaNodeJs />
                        </div>

                        {/* JavaScript */}
                        <div className="tech-icon js-icon">
                          <FaJs />
                        </div>

                        {/* MongoDB */}
                        <div className="tech-icon mongo-icon">
                          <SiMongodb />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
     );
}

export default Hero;