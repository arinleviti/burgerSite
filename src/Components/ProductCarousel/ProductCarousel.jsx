import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {products} from '../../Services/ContentService.jsx'; // Import your product data
import './ProductCarousel.css'; // Import your custom CSS for styling

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // show 3 items on desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // 2 on tablet
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // 1 on mobile
  },
};

function ProductsCarousel() {
  return (
    <div className='products-carousel' style={{ width: "100%", overflow: "hidden" }}> {/* Wrapper div */}
    <Carousel  responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
      {products.map((product) => (
        <div key={product.id} style={{ padding: "10px" }} className="carousel-item-container">
          <img
            src={product.image}
            alt={product.name}
            className="carousel-image"
          />
          <h4 className="carousel-text">{product.name}</h4>
          <p className="carousel-text price">{product.price}</p>
        </div>
      ))}
    </Carousel>
    </div>
  );
}

export default ProductsCarousel;