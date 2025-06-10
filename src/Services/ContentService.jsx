import burgerVideo from '../assets/making-burger.mp4';
import Video from '../Components/Hero/Video/Video.jsx';
import nuggetsImage from '../assets/ForCarousel/nuggets.png';
import burgerImage from '../assets/ForCarousel/burger-white-bg.jpg';
import cokeImage from '../assets/ForCarousel/coke-white-bg.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '../Components/Button/Button.jsx';

export const heroContent = {
    title: "WELCOME TO OUR BURGER SHOP",
    description: "Delicious burgers made with the freshest ingredients. Experience the taste of quality and passion in every bite."
}

export const heroMedia = <Video video={{ video: burgerVideo }} />;

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
