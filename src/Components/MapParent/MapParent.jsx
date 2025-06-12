import HeroSection from "../Hero/HeroSection/HeroSection";
import MapComponent from "./MapComponent/MapComponent";
import "./MapParent.css"; // Import your custom CSS for styling
import { mapContent } from "../../Services/ContentService.jsx";
import React, { useState, useEffect } from "react";

function MapParent() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    
    <div className={(isMobile ? "map-parent-mobile" : "map-parent")}>
      <MapComponent />
      <div className={(isMobile ? "hero-section-mobile" : "hero-section")}>
        <HeroSection content={mapContent} button={null} />
      </div>
    </div>
  );
}
export default MapParent;
