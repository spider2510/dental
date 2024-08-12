// // import { Image } from "./image";
// import React from "react";
// import ImageComparisonSlider from 'react-image-comparison-slider';
// import beforeImage from '../assets/002.jpg';
// import afterImage from '../assets/001.jpg';
// const afterImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ77-HkHcniJPT2chQC81ANv140C32CPOfQ&s"

// export const Gallery = (props) => {
//   return (
//     <div style={{ backgroundColor: '#0C0C0C' }} id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2 style={{ color: 'white' }}>Gallery</h2>

//         </div>
//         <div
//           className="gallery-container"
//         >
//           {props.data.map((image, index) => (
//             <div
//               key={index}
//               className="gallery-item"
//             >
//               <div className="before-after-slider">
//                 <ImageComparisonSlider
//                 image1={image.smallImage}
//                 sliderColor="#000" // Slider color
//                 handleColor="#000" // Handle color
//                 sliderWidth={2} // Slider width
//                 // image2={afterImage}
//                  />
//                 <img
//                   src={afterImageURL}
//                   alt={''}/>
//               </div>
//               <p style={{ fontSize: '16px', fontWeight: 'bold',color:"white" }}>{image.title}</p>
//             </div>
//           ))}
//         </div>
  
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import ImageComparisonSlider from 'react-image-comparison-slider';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import beforeImage from '../assets/002.jpg';
import afterImage from '../assets/001.jpg';
// import './Gallery.css'; // Import the CSS file for styling
// import './Gallery.css'
import './Gallery.css';
const afterImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ77-HkHcniJPT2chQC81ANv140C32CPOfQ&s";


export const Gallery = (props) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(100);
      } else if (window.innerWidth < 1024) {
        setCenterSlidePercentage(50);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#0C0C0C'}} id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'white' }}>Gallery</h2>
        </div>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={true}
          autoPlay={true}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={centerSlidePercentage}
          swipeable={true}
          emulateTouch={true}
        >
          {props.data.map((image, index) => (
            <div key={index} className="gallery-container">
              <div className="gallery-item">
              <div className="before-after-slider-about image-comparison-container">
                <ImageComparisonSlider
                  image1={image.smallImage}
                  image2={afterImageURL}
                  sliderColor="#fff"
                  handleColor="#fff"
                  sliderWidth={3}
                  handleSize={20}
                />
              </div>
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: "white",marginBottom:'10%' }}>{image.title}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};