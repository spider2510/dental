import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const Features = (props) => {
  // Define animation controls
  const controls = useAnimation();

  // Function to handle scroll event
  const handleScroll = () => {
    const featuresSection = document.getElementById("features");
    const sectionTop = featuresSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the section is in view
    if (sectionTop < windowHeight * 0.8) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
          <h3>Discover the benefits of Invisalign – the clear alternative to braces that fits seamlessly into your lifestyle.</h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} // Slide from left or right
                  animate={controls}
                >
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </motion.div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
