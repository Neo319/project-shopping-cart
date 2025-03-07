// grid displaying numerous cards.
import PropTypes from "prop-types";

import "../styles/App.css";
import "../styles/ProductGrid.css";

import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  console.log("products:", products);
  if (!products || !products.length) return <>Loading...</>;

  return (
    <div className="ProductGrid">
      {products.map((product) => {
        return <ProductCard key={"card" + product.id} product={product} />;
      })}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array,
};

export default ProductGrid;
