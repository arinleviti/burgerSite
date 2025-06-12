import { Nav } from 'react-bootstrap'
import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Hero from './Components/Hero/Hero.jsx'
import ThreePictures from './Components/ThreePictures/ThreePictures.jsx';
import Marquee from './Components/Marquee/Marquee.jsx'
import { heroButton2, heroContent, heroMedia,  heroMenu, socialContent, threePics1, threePics2 } from './Services/ContentService.jsx';
import ProductCarousel from './Components/ProductCarousel/ProductCarousel.jsx';
import MapParent from './Components/MapParent/MapParent.jsx';
import SocialMedia from './Components/SocialMediaPics/SocialMediaPicsCont.jsx';
import Delivery from './Components/Delivery/Delivery.jsx';

function App() {

return (
<div className='App'>
  <div className='header'>
    <NavigationBar />
    <Hero content={heroContent} media={heroMedia}  />
    <div style={{ paddingTop: "50px"}}>
      <ThreePictures prop={threePics1} marquee={<Marquee />}/>
      
    </div>
    
    <Hero content={heroMenu} media={<ProductCarousel />} button={heroButton2} style={{ padding: "50px 0px" }} />
    <MapParent />
      <Hero content={socialContent} media={<SocialMedia />} />
      <div className="deliveryContainer" style={{paddingBottom: "50px" }}>
        <Delivery />
      </div>
      <div className="picsContainer" style={{paddingBottom: "50px"}}>
        <ThreePictures prop={threePics2}/>
      </div>
      
    
  </div>
  </div>
)
}

export default App
