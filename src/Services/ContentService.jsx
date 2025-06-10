import burgerVideo from '../assets/making-burger.mp4';
import Video from '../Components/Hero/Video/Video.jsx';

export const heroContent = {
    title: "WELCOME TO OUR BURGER SHOP",
    description: "Delicious burgers made with the freshest ingredients. Experience the taste of quality and passion in every bite."
}

export const heroMedia = <Video video={{ video: burgerVideo }} />;

export const heroButton = {
    button: null
}