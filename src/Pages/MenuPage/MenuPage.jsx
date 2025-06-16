import { Container } from "react-bootstrap";
import './MenuPage.css'
import MenuNavBar from "../../Components/MenuNavBar/MenuNavbar";
import {menuBar, burgerCategory } from '../../Services/ContentService.jsx'
import MenuCatComponent from "../../Components/MenuCatComponent/MenuCatComponent.jsx";

export function MenuPage({ props }) {
    return (
        <><Container className="custom-container-menu">
            <div className="image-wrapper-menu">
                <img src={props.pic1} alt="Dish 1" className="menu-single-image rotate-left" />
                <img src={props.pic2} alt="Dish 2" className="menu-single-image rotate-right" />
                <img src={props.pic3} alt="Dish 3" className="menu-single-image rotate-right" />
            </div>
            <div className="menu-title">
                <h1>{props.menuText}</h1>
            </div>
            <div className="social-media-wrap">
                <span className="fs-2 me-3">{props.socialMedia1}</span>
                <span className="fs-2 me-3">{props.socialMedia2}</span>
            </div>
        </Container>
        <div>
            <MenuCatComponent props={burgerCategory}/>
        </div>
        <MenuNavBar props={menuBar} /></>
    )
}
export default MenuPage;