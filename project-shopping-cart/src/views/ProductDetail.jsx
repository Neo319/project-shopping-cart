// view for item detail
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function ProductDetail() {
  const { id } = useParams();

  const URL = "https://fakestoreapi.com/products";
  // api: get product here based on id.
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      fetch(URL + "/" + id)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    })();
  }, [id]);

  return product !== null ? (
    <>
      <body>
        <span>{JSON.stringify(product)}</span>

        <img src={product.image} width="200px" />
        <h1>{product.title}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>
        <p>Category: {product.category}</p>

        <ul>
          <li> Customer rating: {product.rating.rate}</li>
          <li>({product.rating.count} reviews) </li>
        </ul>
      </body>
    </>
  ) : (
    <body>
      <>loading...</>
    </body>
  );
}
ProductDetail.propTypes = {
  id: PropTypes.number,
};

export default ProductDetail;
