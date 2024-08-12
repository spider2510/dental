import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundVideo from '../assets/2.mp4';

export const Header = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <header id="header">
      <div className="intro">
        <video className="background-video" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <motion.div
                className="col-md-8 col-md-offset-2 intro-text"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 style={{ fontSize: "3em", color: "white" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {props.data ? props.data.paragraph : "Loading"}
                </motion.p>
                <motion.a
                  onClick={handleFormToggle}
                  className="btn btn-custom btn-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  Book a free consultation
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {showForm && <ConsultationForm onClose={handleFormToggle} />}
    </header>
  );
};

const ConsultationForm = ({ onClose }) => {
  return (
    <div className="consultation-form">
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="container">
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
          <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between', gap: '10px' }}>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="date-time">Preferred Consultation Date/Time</label>
              <input type="datetime-local" id="date-time" name="date-time" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea id="comments" name="comments"></textarea>
          </div>
          <button type="submit" className="btn btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
