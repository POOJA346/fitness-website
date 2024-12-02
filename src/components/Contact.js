import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BiSend, BiPhone } from 'react-icons/bi';
import 'boxicons/css/boxicons.min.css';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted: ', formData);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2><span>Contact Me</span></h2>
        <h4>Let's work Together</h4>
        <p>
        We’re here to help you on your fitness journey! Whether you have questions about our programs, need assistance with memberships, Whether you just want to say hi, or want to share your feedback, feel free to reach out. 
          
          You can contact me via email at <a href="mailto:pooja050513@gmail.com">pooja050513@gmail.com</a> 
          or connect with me on <a href="https://www.instagram.com/_p00ja_yadav/">Instagram</a>.
        </p>
        <ul className="contact-list">
          <li><BiSend /> Contact@gmail.com</li>
          <li><BiPhone /> ******5821</li>
        </ul>
        <div className="contact-icons">
          <a href="https://www.facebook.com/profile.php?id=100038397635748" className="icon"><FaFacebook /></a>
          <a href="https://www.instagram.com/_p00ja_yadav/" className="icon"><FaInstagram /></a>
          <a href="https://x.com/?lang=en" className="icon"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/pooja-kumari-bb6993224/" className="icon"><FaLinkedin /></a>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter your subject"
            value={formData.subject}
            onChange={handleChange}
            className="input-field"
          />
          <textarea
            name="query"
            cols="40"
            rows="10"
            placeholder="Enter your query"
            value={formData.query}
            onChange={handleChange}
            className="input-field"
          />
          <input type="submit" className="send-btn" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
