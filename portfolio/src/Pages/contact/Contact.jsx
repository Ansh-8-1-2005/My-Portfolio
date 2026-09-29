import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { showSuccess, showError } from "../../utilis/toast";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");

  const handelName = (e)=>{
    setName(e.target.value);
  }  
  
  const handelEmail = (e)=>{
    setEmail(e.target.value);
  }  
  
  const handelMessage = (e)=>{
    setMessage(e.target.value);
  }  

  const handelSubmit = async (e)=>{
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add("was-validated");
        return;
    }

    form.classList.add("was-validated");

    try{
      const res = await axios.post("https://my-portfolio-qt49.onrender.com/Contact" , {
        name,
        email,
        message
      } , {withCredentials: true});
      showSuccess(res.data.message);

      // Form reset
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      showError(error.response.data.message || "Something went wrong");
    }
  }

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* Heading */}
        <div className="section-heading">

          <h2 className="section-title">
            Contact Me
          </h2>

          <p className="section-subtitle">
            Let's Work Together
          </p>

        </div>


        {/* Contact Content */}
        <div className="contact-content">


          {/* Left Side */}
          <div className="contact-info">

            <h3>
              Let's Connect
            </h3>

            <p className="contact-description">
              Have a project idea, collaboration opportunity,
              or just want to say hello? Feel free to reach out.
            </p>


            {/* Email */}
            <div className="contact-item">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:anshpandey08012005@gmail.com">
                  anshpandey08012005@gmail.com
                </a>
              </div>

            </div>


            {/* LinkedIn */}
            <div className="contact-item">

              <div className="contact-icon">
                <FaLinkedin />
              </div>

              <div>
                <span>LinkedIn</span>
                <a
                  href="https://linkedin.com/in/ansh-pandey-5a4552278"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.linkedin.com/in/ansh-pandey-5a4552278
                </a>
              </div>

            </div>


            {/* GitHub */}
            <div className="contact-item">

              <div className="contact-icon">
                <FaGithub />
              </div>

              <div>
                <span>GitHub</span>
                <a
                  href="https://github.com/Ansh-8-1-2005"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Ansh-8-1-2005
                </a>
              </div>

            </div>


            {/* Location */}
            <div className="contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <p>India</p>
              </div>

            </div>

          </div>


          {/* Right Side - Form */}
          <form className="contact-form needs-validation" onSubmit={handelSubmit} noValidate>

            <div className="form-group">

              <label htmlFor="name" className="form-label">
                Name
              </label>

              <input
                type="text"
                id="name"
                className="form-control"
                onChange={handelName} value={name} required
                placeholder="Enter your name"
              />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>


            <div className="form-group">

              <label htmlFor="email" className="form-label">
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-control"
                onChange={handelEmail} value={email} required
              />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>


            <div className="form-group">

              <label htmlFor="message" className="form-label">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
                className="form-control"
                onChange={handelMessage} value={message} required
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;