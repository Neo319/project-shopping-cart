// component to display details of product and provide link
import PropTypes from "prop-types";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  if (!product) return <>loading...</>;

  let categoryClassName;
  // categories
  switch (product.category) {
    case "men's clothing":
      categoryClassName = "mens";
      break;

    default:
      categoryClassName = "other";
      break;
  }

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
            <h1>{product.title.slice(0, 30) + "..."}</h1>
            <h1 className="price">${product.price}</h1>

            <div className={categoryClassName}>
              <span>
                {" • "}
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </span>
            </div>
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
