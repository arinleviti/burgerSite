import './ThreePictures.css';
import pic1 from "../../assets/burger1.jpg";
import pic2 from "../../assets/friends.jpg";
import pic3 from "../../assets/2burgers.jpg";
import Marquee from '../Marquee/Marquee.jsx';


export function ThreePictures() {
  return (
    <div className="container-fluid custom-container">
  <div className="row g-0">
    <div className="col-12 col-md-4 mb-4">
      <div className="image-wrapper img1">
        <img src={pic1} alt="Image 1" className="img" style={{ borderRight: "white 2.5px solid", borderLeft: "white 5px solid"}} />
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="image-wrapper img2">
        <img src={pic2} alt="Image 2" className="img" style={{ borderRight: "white 2.5px solid", borderLeft: "white 5px solid"}} />
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="image-wrapper img3">
        <img src={pic3} alt="Image 3" className="img" style={{ borderRight: "white 5px solid", borderLeft: "white 5px solid"}}/>
      </div>
    </div>
  </div>

    <Marquee />
  </div>

  );  
}

export default ThreePictures;