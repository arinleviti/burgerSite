import './MenuCardsContainer.css';
import MenuItemCard from '../MenuItemCard/MenuItemCard';

export function MenuCardsContainer({props}) {
    return (
        <div className="cards-container">
            {props.map((card, index) => 
            <MenuItemCard key={index} props={card}/> 
            )}
        </div>
       
    )
}
export default MenuCardsContainer;