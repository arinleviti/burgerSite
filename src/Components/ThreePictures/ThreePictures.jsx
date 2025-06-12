import './ThreePictures.css';
import pic1 from "../../assets/burger1.jpg";
import pic2 from "../../assets/friends.jpg";
import pic3 from "../../assets/2burgers.jpg";
import Marquee from '../Marquee/Marquee.jsx';


export function ThreePictures() {

const pics = [pic1, pic2, pic3];

  return (
    <div className="pictures-row">
      {pics.map((img, i) => (
        <img key={i} src={img} alt={`Image ${i + 1}`} className="picture" />
      ))}
    </div>
  );
}


export default ThreePictures;