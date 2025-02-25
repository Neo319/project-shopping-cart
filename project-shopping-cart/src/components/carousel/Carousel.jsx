import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/Carousel.css";

function Carousel({ products }) {
  const [index, setIndex] = useState(0);

  setInterval(() => {
    if (index >= products.length - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  }, 2000);

  return (
    <>
      <div className="carousel">
        {/* render the product from index */}
        <div>
          <img
            src={products[index].image}
            alt="error finding product image"
            width="200px"
          />
          <h2>{products[index].title}</h2>
        </div>
      </div>
    </>
  );
}

Carousel.propTypes = {
  products: PropTypes.array,
};

export default Carousel;

{
  /* {products.map((product) => {
          return (
            <div key={"carouselKey" + product.id}>
              <img
                src={product.image}
                alt="error finding product image"
                width="200px"
              />
              <h2>{product.title}</h2>
            </div>
          );
        })} */
}
