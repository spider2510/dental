import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundVideo from '../assets/2.mp4';
import './Header.css'; // Make sure to create this CSS file

export const Header = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <header id="header">
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay">
        <div className="container">
          <div className="header-content">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {props.data ? props.data.title : "Loading"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {props.data ? props.data.paragraph : "Loading"}
            </motion.p>
            <motion.button
              className="btn btn-custom btn-lg"
              onClick={handleFormToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a free consultation
            </motion.button>
          </div>
        </div>
      </div>
      {showForm && <ConsultationForm onClose={handleFormToggle} />}
    </header>
  );
};

const ConsultationForm = ({ onClose }) => {
  return (
    <div className="consultation-form-overlay">
      <div className="consultation-form">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Consultation Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Consultation Date/Time</label>
              <input type="datetime-local" id="date" name="date" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea id="comments" name="comments"></textarea>
          </div>
          <button type="submit" className="btn btn-custom">Submit</button>
        </form>
      </div>
    </div>
  );
};