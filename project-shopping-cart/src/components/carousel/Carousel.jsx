import PropTypes from "prop-types";

function Carousel({ products }) {
  console.log("products:", products);

  return (
    <>
      <span>content:</span>
      {products.map((product) => {
        return (
          <div key={"carouselKey" + product.id}>
            <img
              src={product.image}
              alt="error finding product image"
              width="200px"
            />
            <h1>{product.title}</h1>
          </div>
        );
      })}
    </>
  );
}

Carousel.propTypes = {
  products: PropTypes.array,
};

export default Carousel;
