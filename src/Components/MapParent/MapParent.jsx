import HeroSection from "../Hero/HeroSection/HeroSection";
import MapComponent from "./MapComponent/MapComponent";
import "./MapParent.css"; // Import your custom CSS for styling
import { mapContent } from "../../Services/ContentService.jsx";

function MapParent() {
  return (
    <div className="map-parent">
      <MapComponent />
      <div style={{ textAlign: "right" }}>
        <HeroSection content={mapContent} button={null} />
      </div>
    </div>
  );
}
export default MapParent;
