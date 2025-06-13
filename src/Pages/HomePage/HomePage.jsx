import NavigationBar from "../../Components/NavigationBar/NavigationBar.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import ThreePictures from "../../Components/ThreePictures/ThreePictures.jsx";
import Marquee from "../../Components/Marquee/Marquee.jsx";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel.jsx";
import MapParent from "../../Components/MapParent/MapParent.jsx";
import SocialMedia from "../../Components/SocialMediaPics/SocialMediaPicsCont.jsx";
import Delivery from "../../Components/Delivery/Delivery.jsx";
import NewsLetter from "../../Components/Newsletter/Newsletter.jsx";
import {
  heroButton2,
  heroContent,
  heroMedia,
  heroMenu,
  socialContent,
  threePics1,
  threePics2,
  newsletterContent,
  navBarContent,
} from "../../Services/ContentService.jsx";
import './HomePage.css';

function HomePage() {
  return (
<div className="header">
        <NavigationBar prop={navBarContent}/>
        <div className="first-hero" >
          <Hero
            content={heroContent}
            media={heroMedia}
            style={{ paddingRight: "0px" }}
          />
        </div>

        <div style={{ paddingTop: "50px" }}>
          <ThreePictures prop={threePics1} marquee={<Marquee />} />
        </div>

        <Hero
          content={heroMenu}
          media={<ProductCarousel />}
          button={heroButton2}
          style={{ padding: "50px 0px" }}
        />
        <MapParent />
        <Hero content={socialContent} media={<SocialMedia />} />
        <div className="deliveryContainer" style={{ paddingBottom: "50px" }}>
          <Delivery />
        </div>
        <div className="picsContainer" style={{ paddingBottom: "50px" }}>
          <ThreePictures prop={threePics2} />
        </div>
        <div className="newsletterContainer">
          <NewsLetter prop={newsletterContent}/>
        </div>
      </div>

        );
}

export default HomePage;