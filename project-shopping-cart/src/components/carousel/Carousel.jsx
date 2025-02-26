import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "../../styles/Carousel.css";

function Carousel({ products }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex >= products.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [products.length]);

  function carouselPosition() {
    let output = "";
    for (let i = 0; i <= products.length - 1; i++) {
      if (index === i) {
        output += " * ";
      } else {
        output += " - ";
      }
    }
    return output;
  }

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
        <span>{carouselPosition()}</span>
      </div>
    </>
  );
}

Carousel.propTypes = {
  products: PropTypes.array,
};

export default Carousel;
