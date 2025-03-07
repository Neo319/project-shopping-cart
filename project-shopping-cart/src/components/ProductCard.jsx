// component to display details of product and provide link
import PropTypes from "prop-types";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  console.log("product=", product);

  if (!product) return <>loading...</>;

  return (
    <>
      <a href={"/product/" + product.id}>
        <div className={"card " + product.id}>
          <div className="container">
            <img
              src={product.image}
              alt="error finding product image"
              width="200px"
            />
          </div>

          <div className="info">
            <h1>{product.title.slice(0, 60) + "..."}</h1>
            <h1 className="price">${product.price}</h1>
          </div>
        </div>
      </a>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
