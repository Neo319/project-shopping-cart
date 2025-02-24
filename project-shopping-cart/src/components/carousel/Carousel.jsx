import PropTypes from "prop-types";
import "../../styles/Carousel.css";

function Carousel({ products }) {
  console.log("products:", products);

  return (
    <>
      <div className="carousel">
        {products.map((product) => {
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
        })}
      </div>
    </>
  );
}

Carousel.propTypes = {
  products: PropTypes.array,
};

export default Carousel;
