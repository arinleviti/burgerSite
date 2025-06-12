import {socialPics} from '../../Services/ContentService.jsx';
import './SocialMediaPicsCont.css';
export function SocialMediaPicsCont() {
    return (
        <div>
            <div className="container custom-container">
                <div className="row g-0">
                    {socialPics.map((pic) => (
                        <div className="col image-wrapper" key={pic.id}>
                            <img src={pic.image} alt={pic.alt} className="img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SocialMediaPicsCont;