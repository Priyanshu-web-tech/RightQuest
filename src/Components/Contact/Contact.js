import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">Feel free to get in touch with us for any inquiries or feedback.</p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" className="form-control" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" rows="5"></textarea>
          </div>
          <button className="contact-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
