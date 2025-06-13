import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// ✅ Helper component to force map to recalculate size
function FixMapResize() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100); // wait a bit so the container is ready
  }, [map]);

  return null;
}


const position = [45.0703, 7.6869]; // Example: Turin, Italy

function StoreLocator() {
  return (
    <div className="map-wrapper">
        <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%", borderRadius: '10px' }} >
          <FixMapResize /> {/* ✅ Add this line */}
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Our Restaurant<br />Via Example 123
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    
  );
}

export default StoreLocator;

