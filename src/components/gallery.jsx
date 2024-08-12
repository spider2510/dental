// import { Image } from "./image";
import React from "react";
import ImageComparisonSlider from 'react-image-comparison-slider';

const afterImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ77-HkHcniJPT2chQC81ANv140C32CPOfQ&s"

export const Gallery = (props) => {
  return (
    <div style={{ backgroundColor: '#0C0C0C' }} id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'white' }}>Gallery</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div
          // style={{
          //   display: 'grid',
          //   gridTemplateColumns: 'repeat(3, 1fr)',
          //   gap: '1px',
          // }}
          className="gallery-container"
        >
          {props.data.map((image, index) => (
            <div
              key={index}
              // style={{
              //   display: 'flex',
              //   flexDirection: 'column',
              //   alignItems: 'center',
              //   padding: '10px',
              // }}
              className="gallery-item"
            >
              <div className="before-after-slider">
                <ImageComparisonSlider
                
                image1={image.smallImage}
                sliderColor="#000" // Slider color
                handleColor="#000" // Handle color
                sliderWidth={2} // Slider width
                // handleSize={18} // Handle size
                // image2={image.smallImage}
                 />
                <img
                  src={afterImageURL}
                  alt={''}
                // image2={afterImageURL}
                // sliderColor="#fff" // Slider color
                // handleColor="#fff" // Handle color
                // sliderWidth={3} // Slider width
                // handleSize={20} // Handle size
                />
              </div>
              <p style={{ fontSize: '16px', fontWeight: 'bold',color:"white" }}>{image.title}</p>
            </div>
          ))}
        </div>
        {/* <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div> */}
      </div>
    </div>
  );
};
