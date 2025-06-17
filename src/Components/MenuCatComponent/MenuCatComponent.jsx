import { Container } from 'react-bootstrap';
import './MenuCatComponent.css';
import MenuCatHeader from '../MenuCatHeader/MenuCatHeader';
import MenuCardsContainer from '../MenuCardsContainer/MenuCardsContainer';
import {menuItemsBurger} from '../../Services/ContentService.jsx'

export function MenuCatComponent({props}) {
 return (
    <Container>
        <div className="cat-header-container2">
            <MenuCatHeader props={props}/>
             <MenuCardsContainer props={menuItemsBurger}/>
        </div>
       
    </Container>
 )
}

export default MenuCatComponent;