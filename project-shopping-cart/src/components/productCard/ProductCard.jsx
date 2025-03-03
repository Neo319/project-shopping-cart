// component to display details of product and provide link
import PropTypes from "prop-types";

function ProductCard({ product }) {
  console.log("product=", product);

  if (!product) return <>loading...</>;

  return (
    <>
      <div className={"card " + product.id}>
        <a href={"/product/" + product.id}>
          <img
            src={product.image}
            alt="error finding product image"
            width="100px"
          />
          <section>
            <h1>{product.title}</h1>
            <p>{product.description.slice(0, 100) + "..."}</p>
            <span>Category: {product.category}</span>
          </section>
        </a>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
