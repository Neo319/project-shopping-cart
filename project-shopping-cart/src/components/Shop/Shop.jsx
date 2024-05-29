import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import NavBar from "../NavBar/NavBar";

export default function Shop({ cart, products }) {
  // eslint-disable-next-line react/prop-types
  const Card = ({ item, index }) => {
    return (
      <div className="Card">
        <h1>item {index}</h1>
        <h1>{item.title}</h1>
        <article>{item.description}</article>
        <button>Add to Cart</button>
      </div>
    );
  };
  Card.propTypes = {
    item: PropTypes.object.isRequired,
  };

  console.log("products-", products);
  return (
    <>
      <NavBar cart={cart} />
      <h1>Hello from Shop page!</h1>
      <div>
        <Link to="/">Back to Main</Link>
      </div>

      <h1>Shop here</h1>
      <div className="shopContainer">
        {products.map((item, index) => {
          return <Card key={index} item={item} index={index} />;
        })}
      </div>
    </>
  );
}

Shop.propTypes = {
  cart: PropTypes.object,
  products: PropTypes.array,
};
