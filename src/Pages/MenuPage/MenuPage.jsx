import { Container } from "react-bootstrap";
import './MenuPage.css'


export function MenuPage({ props }) {
    return (
        <Container className="custom-container-menu">
            <div className="image-wrapper-menu">
                <img src={props.pic1} alt="Dish 1" className="menu-single-image rotate-left" />
                <img src={props.pic2} alt="Dish 2" className="menu-single-image rotate-right" />
                <img src={props.pic3} alt="Dish 3" className="menu-single-image rotate-right" />
            </div>
            <div className="menu-title">
                <h1>{props.menuText}</h1>
            </div>
            <div className="social-media-wrap">
                {props.socialMedia1}
                {props.socialMedia2}
            </div>
        </Container>
    )
}
export default MenuPage;