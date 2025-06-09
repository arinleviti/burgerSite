
import "./Hero.css"; // Import your custom CSS for styling
import HeroSection from "./HeroSection/HeroSection";
import Video from "./Video/Video"; // Import the Video component
import React, { useEffect, useState } from "react";
function Hero() {

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
    <div className="hero">

        {isMobile && (
          <>
            <Video />
            <HeroSection  />
            
          </>
        )}
        {!isMobile && (
          <>
            <HeroSection  />
            <Video />
          </>
        )}
    </div>
  );
}
export default Hero;
