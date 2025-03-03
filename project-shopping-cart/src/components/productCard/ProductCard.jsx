// component to display details of product and provide link
import PropTypes from "prop-types";

function ProductCard(product) {
  console.log("product cartd component mounted.");
  return (
    <>
      <span>{JSON.stringify(product)}</span>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
