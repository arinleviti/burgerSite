import { Container } from "react-bootstrap";
import './MenuPage.css'
import MenuNavBar from "../../Components/MenuNavBar/MenuNavbar";
import {menuBar, burgerCategory, chickenCategory, menuItemsBurger, menuItemsChicken, drinksCategory, menuItemsDrinks } from '../../Services/ContentService.jsx'
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
        <MenuNavBar props={menuBar} />
        <div id="burgers">
            <MenuCatComponent props={burgerCategory} menuItems={menuItemsBurger}/>
        </div>
        <div id="chicken">
            <MenuCatComponent props={chickenCategory} menuItems={menuItemsChicken}/>
        </div>
        <div id="drinks">
            <MenuCatComponent props={drinksCategory} menuItems={menuItemsDrinks}/>
        </div>
        </>
    )
}
export default MenuPage;