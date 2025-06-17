import burgerVideo from '../assets/making-burger.mp4';
import nuggetsVideo from '../assets/making-nuggets.mp4';
import Video from '../Components/Hero/Video/Video.jsx';
import nuggetsImage from '../assets/ForCarousel/nuggets.png';
import burgerImage from '../assets/ForCarousel/burger-white-bg.jpg';
import friends from '../assets/friends.jpg';
import twoBurgers from '../assets/2burgers.jpg';
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
import pouring from '../assets/pouring.jpg';
import exterior from '../assets/exterior.jpg';
import redNeon from '../assets/red-neon.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import chicken from '../Assets/ForMenu/chicken.jpg';
import menuBoard from '../Assets/ForMenu/menuBoard.jpg';
import pickUp from '../Assets/ForMenu/pickUp.jpg';
import burgerCat from '../Assets/ForMenu/burgerCat.jpg';
import bigBurgerCard from '../Assets/ForMenu/bigBurgerCard.jpg';
 import cheeseBurgerCard from '../Assets/ForMenu/cheeseBurgerCard.jpg';
 import friedBurgerCard from '../Assets/ForMenu/friedBurgerCard.jpg';
 import veggieBurgerCard from '../Assets/ForMenu/veggieBurgerCard.jpg';

export const navBarContent = {
  item1: <Link style={{ textDecoration: "none", color: "inherit" }} to="/Menu">MENU</Link>,
  item2: "LOCATIONS",
  item3: "STORY",
  item4: "CONTACT",
  social1: <Nav.Link href="#insta" className="icon-link">
                <i style={{ marginLeft: "16px"}} className="bi bi-instagram "></i>
              </Nav.Link>,
  social2:  <Nav.Link href="#tiktok" className="icon-link">
                <i style={{ marginLeft: "0px"}} className="bi bi-tiktok "></i>
              </Nav.Link>
}

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

export const threePics1 = [
  burgerImage,
  friends,
  twoBurgers
]

export const threePics2 = [
  exterior,
  pouring,
  redNeon
]

export const newsletterContent = {
  title: "DEALS AND NEWS IN YOUR INBOX",
  text: "Get the latest news and offers from Best Burgers straight in your emails"
}

export const menuPics = {
 pic1: chicken,
 pic2: menuBoard,
pic3: pickUp,
menuText: "MENU",
socialMedia1: <Nav.Link href="#insta" className="icon-link">
              <i  className="bi bi-instagram "></i>
            </Nav.Link>,
socialMedia2: <Nav.Link href="#tiktok" className="icon-link">
              <i  className="bi bi-tiktok "></i>
            </Nav.Link>
}

export const menuBar = [
 {href: "#burgers", item: "BURGERS"},
  {href: "#chicken", item: "CHICKEN"},
  {href: "#hotDogs", item: "HOT DOGS"},
  {href: "#sides", item: "SIDES"},
  {href: "#drinks", item: "DRINKS"}
]

export const burgerCategory = {
  category : "SIGNATURE BURGERS",
  img: burgerCat
}

export const menuItemsBurger = [
  {
    img: bigBurgerCard,
    name: 'CLASSIC BURGER',
    description: 'Juicy beef patty with lettuce, tomato, and cheese.',
    price:  8.99
  },
  {
    img: cheeseBurgerCard,
    name: 'BACON BBQ BURGER',
    description: 'Loaded with bacon and smoky BBQ sauce.',
    price: 9.99
  },
  {
    img: friedBurgerCard,
    name: 'BURGER WITH FRIES',
    description: 'Loaded with our signature fries.',
    price: 9.99
  },
  {
    img: veggieBurgerCard,
    name: 'VEGGIE BURGER',
    description: 'A slice of veggie delight and fresh tomato.',
    price: 9.99
  }
  
];