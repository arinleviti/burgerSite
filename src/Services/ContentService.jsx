import burgerVideo from '../assets/making-burger.mp4';
import nuggetsVideo from '../assets/making-nuggets.mp4';
import Video from '../Components/Hero/Video/Video.jsx';
import nuggetsImage from '../assets/ForCarousel/nuggets.png';
import burgerImage from '../assets/ForCarousel/burger-white-bg.jpg';
import girlSelfie from '../assets/ForSocial/girl-selfie.jpg';
import guyEatingBurger from '../assets/ForSocial/guy-eating-burger.jpg';
import paperPlane from '../assets/ForSocial/Paper-Plane.png';
import cokeImage from '../assets/ForCarousel/coke-white-bg.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '../Components/Button/Button.jsx';
import { Nav } from "react-bootstrap";
import uberIcon from '../assets/uber-eats.png';
import justEatIcon from '../assets/just-eat.png';
import deliverooIcon from '../assets/deliveroo.png';

export const heroContent = {
    title: "WELCOME TO OUR BURGER SHOP",
    description: "Delicious burgers made with the freshest ingredients. Experience the taste of quality and passion in every bite."
}

export const heroMedia = <Video video={{ video: burgerVideo }} />;
export const heroMedia2 = <Video video={{ video: nuggetsVideo }} className="hero-video" />;

export const heroButton = <Button variant="primary" size="lg" className="hero-button">SEE FULL MENU</Button>;
export const heroButton2 = <Button variant="primary" size="lg" className="hero-button">SEE FULL MENU <FaLongArrowAltRight /></Button>;

export const heroMenu = {
    title: "BURGERS, SIDES, DRINKS & MORE",
    description: "Explore our delicious menu featuring a variety of burgers, sides, and beverages. There's something for everyone!"
}

export const products = [
  { id: 1, name: "BURGER", image: burgerImage , price: "€9.99" },
  { id: 2, name: "COKE", image: cokeImage , price: "€1.99" },
  { id: 3, name: "NUGGETS", image: nuggetsImage , price: "€6.99" },
];

export const mapContent = {
  title: "FIND US ON THE MAP",
  description: "Locate our burger shop easily. All roads lead to deliciousness!",
};

export const socialContent = {
  icon1: <img src={paperPlane} alt="Paper Plane" style={{ width: "80px", height: "100px" }} />,
  icon2: <Nav.Link href="#insta" className="icon-link">
              <i style={{ marginLeft: "16px", marginRight: "0px" }} className="bi bi-instagram "></i>
            </Nav.Link>,
  icon3: <Nav.Link href="#tiktok" className="icon-link">
              <i style={{ marginLeft: "0px", marginRight: "0px" }} className="bi bi-tiktok "></i>
            </Nav.Link>,
  title: "FOLLOW US ON SOCIAL MEDIA",
  description: "Stay updated with our latest offers and news. Follow us on social media!",
};

export const socialPics = [
  { id: 1,  image: guyEatingBurger, alt: "Social Media 1" },
  { id: 2,  image: girlSelfie, alt: "Social Media 2" },

];

export const deliveryContent = {
  title: "DELIVERY TO YOUR DOORSTEP",
  description: "Enjoy our delicious burgers delivered right to your doorstep. Fast, fresh, and convenient!",
  icon1: <button style={{ paddingRight: "20px", border: 'none', background: 'none' }}>
  <img src={uberIcon} alt="Uber Eats" style={{ height: '45px' }} />
</button>,
  icon2: <button style={{ paddingRight: "20px",paddingLeft: "20px", border: 'none', background: 'none' }}>
  <img src={justEatIcon} alt="Uber Eats" style={{ height: '45px' }} />
</button>,
  icon3: <button style={{ paddingLeft: "20px", border: 'none', background: 'none' }}>
  <img src={deliverooIcon} alt="Uber Eats" style={{ height: '45px' }} />
</button>
};
