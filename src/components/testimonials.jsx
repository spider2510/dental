import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import './Testimonials.css'; // Import your custom CSS file
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';

export const Testimonials = (props) => {

  const videoMap = {
    '../assets/1.mp4': video1,
    '../assets/2.mp4': video2
  };

  // const videos 
  return (
    <div id="testimonials" className="w-100">
      <div className="container-fluid">
        <div className="section-title text-center">
          <h2 style={{color:"white"}}>What our clients say</h2>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.name}-${i}`}
                  className="testimonial"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <div className="testimonial-media">
                    {d.video ? (
                      // Handle local videos
                      <video className="testimonial-video" controls>
                        <source src={videoMap[d.video]} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="testimonial-image">
                        <img src={d.img} alt="" />
                      </div>
                    )}
                  </div>
                  <div style={{"color": "white"}} className="testimonial-content">
                    <p>{d.text}</p>
                    <div style={{"color": "white"}} className="testimonial-meta">- {d.name}</div>
                  </div>
                </motion.div>
              ))
            : "loading"}
        </Carousel>
      </div>
    </div>
  );
};
