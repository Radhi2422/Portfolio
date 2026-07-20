import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import axios from "axios";
import "./ContactPage.css";

export const ContactPage = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    Subject: "",
    Message: ""
  });

    const handleSubmit = async (e) => {
      try{
        e.preventDefault();
        const REACT_APP_BASE_URL=process.env.REACT_APP_BASE_URL;
        const token = localStorage.getItem("token");
        console.log(formData)
      
    const response=await axios.post(
        `${REACT_APP_BASE_URL}/projects/contact`,
        formData,
        {
        headers: {
            Authorization: `Bearer ${token}`
        }}
      );

    const data = await response.json();

    if (data.success) {
        alert("Message Sent");
    }
    setFormData({
        name: "",
        email: "",
        Address: "",
        ContactNumber: ""
      });}catch(err){
        toast.error("Something went wrong.");
      }
};

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <span className="contact-tag">Get In Touch</span>

          <h1>
            Let's Build Something
            <span> Amazing Together.</span>
          </h1>

          <p>
            Whether you have an exciting project, freelance opportunity,
            internship, or just want to say hello, my inbox is always open.
            Feel free to reach out anytime.
          </p>

          <div className="contact-details">
            <div className="detail">
              <FaEnvelope />
              <span>radhikamitt@gmail.com</span>
            </div>


            <div className="detail">
              <FaMapMarkerAlt />
              <span>India</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Radhi2422"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/radhika-mittal-18b30a240/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:radhikamitt@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Side */}
        {/* <div className="contact-form-card">
          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Your Name"
              value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value  })
            }/>
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Address"
              value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value  })
            }/>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Subject" 
              value={formData.Subject}
            onChange={(e) =>
              setFormData({
                ...formData,
                Subject: e.target.value  })
            }/>
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Write your message..."
                value={formData.Message}
            onChange={(e) =>
              setFormData({
                ...formData,
                Message: e.target.value  })
            }
              ></textarea>
            </div>

            <button type="submit">
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};