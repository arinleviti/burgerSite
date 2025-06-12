import './Delivery.css';
import Video from '../Hero/Video/Video.jsx';
import HeroSection from '../Hero/HeroSection/HeroSection.jsx';
import nuggetsVideo from '../../assets/making-nuggets.mp4'
import {deliveryContent} from '../../Services/ContentService.jsx';

export function Delivery() {
  return (
    <div className="delivery-container">
      <Video video={{ video: nuggetsVideo  }} />
      <HeroSection content={deliveryContent} className="hero-section-right" />
    </div>
  );
}
export default Delivery;