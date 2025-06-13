import './ThreePictures.css';
import Marquee from '../Marquee/Marquee.jsx';
import React, { useEffect, useState } from "react";


export function ThreePictures({ prop, marquee }) {

  const [isMobile, SetMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      SetMobile(window.innerWidth < 786);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, []);


  // Show only first two images on mobile
  const imagesToShow = isMobile ? prop.slice(0, 2) : prop;

  return (
    <div className="pictures-wrapper">
      <div className="pictures-row">
        {imagesToShow.map((img, i) => (
          <img key={i} src={img} alt={`Image ${i + 1}`} className="picture" />
        ))}
      </div>
      <div className="marquee-wrapper">
        {marquee}
      </div>
    </div>


  );

}



export default ThreePictures;