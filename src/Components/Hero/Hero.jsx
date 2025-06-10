
import "./Hero.css"; // Import your custom CSS for styling
import HeroSection from "./HeroSection/HeroSection";
import React, { useEffect, useState } from "react";


function Hero({content, media, button, style}) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    /* same as className={"hero" + (isMobile ? " allow-wrapping" : "")} */
<div className={`hero ${isMobile ? "allow-wrapping" : ""}`} style={style}>
      {isMobile ? (
        <>
          {media}
          <HeroSection content={content} button={button} />

        </>
      ) : (
        <>
          <HeroSection content={content} button={button} />
          {media}
        </>
      )}
    </div>
  );

  
}
export default Hero;
