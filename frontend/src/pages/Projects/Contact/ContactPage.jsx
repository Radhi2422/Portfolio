import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./ContactPage.css";

export const ContactPage = () => {

   

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info">
          <span className="contact-tag">Get In Touch</span>

          <h1>
            Let's Build Something
            <span> Amazing Together.</span>
          </h1>

          <p>
            A builder, not just a monitor: someone who enjoys creating pipelines and integrations, not only watching data quality.
            Someone who can independently deliver straightforward integrations and features, with guidance available on more complex problems.
            A proactive problem-solver who digs into data issues until the root cause is clear.
            Someone who treats data accuracy, reliability and security as non-negotiable.
            A collaborative teammate who takes ownership, communicates well across business and technical teams, and is eager to grow in data-intensive engineering.
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
              href="https://www.linkedin.com/in/radhika-mittal-profile/"
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
