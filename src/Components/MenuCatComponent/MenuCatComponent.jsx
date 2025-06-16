import { Container } from 'react-bootstrap';
import './MenuCatComponent.css';
import MenuCatHeader from '../MenuCatHeader/MenuCatHeader';

export function MenuCatComponent({props}) {
 return (
    <Container>
        <div className="cat-header-container2">
            <MenuCatHeader props={props}/>
        </div>

    </Container>
 )
}

export default MenuCatComponent;