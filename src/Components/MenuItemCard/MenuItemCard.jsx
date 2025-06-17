import { Card} from 'react-bootstrap';
import './MenuItemCard.css';

function MenuItemCard({ props }) {
  return (
    <Card className='card-container'>
      <Card.Img variant="top" src={props.img} className='card-image'/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className='card-description'>{props.description}</Card.Text>
        <Card.Text className='card-price'>
          <strong>€ {props.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MenuItemCard;