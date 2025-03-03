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
    }, 7000);

    return () => clearInterval(interval);
  }, [products.length]);

  if (!products || products.length == 0) {
    return <>loading...</>;
  }
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
        <div key={index}>
          <img
            src={products[index].image}
            alt="error finding product image"
            width="200px"
          />
          <section>
            <h2>{products[index].title}</h2>
            <p>
              {products[index].description.slice(0, 200) + "..."}
              <a href="">(see more)</a>
            </p>
          </section>
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
