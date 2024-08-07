import React from "react";
import ImageComparisonSlider from 'react-image-comparison-slider';
// import 'react-before-after-slider/dist/index.css'; // Make sure to import the CSS
import beforeImage from '../assets/002.jpg';
import afterImage from '../assets/001.jpg';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {/* Before-After Slider */}
            <div className="before-after-slider">
              <ImageComparisonSlider
                image1={beforeImage}
                image2={afterImage}
                sliderColor="#fff" // Slider color
                handleColor="#fff" // Handle color
                sliderWidth={3} // Slider width
                handleSize={20} // Handle size
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};