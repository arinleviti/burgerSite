import { Container } from 'react-bootstrap';
import './MenuCatComponent.css';
import MenuCatHeader from '../MenuCatHeader/MenuCatHeader';
import MenuCardsContainer from '../MenuCardsContainer/MenuCardsContainer';


export function MenuCatComponent({props, menuItems}) {
 return (
    <Container>
        <div className="cat-header-container2">
            <MenuCatHeader props={props}/>
             <MenuCardsContainer props={menuItems}/>
        </div>
       
    </Container>
 )
}

export default MenuCatComponent;