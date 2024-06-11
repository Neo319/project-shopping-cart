import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Shop.module.css";

export default function Shop({
  cart,
  products,
  handleCartIncrease,
  handleCartDecrease,
}) {
  // eslint-disable-next-line react/prop-types
  const Card = ({ item, index }) => {
    return (
      <div className={styles.card}>
        <h1>{item.title}</h1>
        <article>{item.description}</article>
        <button onClick={() => handleCartIncrease(item.id)}>Add to Cart</button>

        <span>
          item.id: {item.id}; cart state: {JSON.stringify(cart)}
        </span>

        {Object.prototype.hasOwnProperty.call(cart, item.id) ? (
          <div>
            <div>
              <button
                data-testid={index + "up-btn"}
                onClick={() => handleCartIncrease(item.id)}
              >
                ↑
              </button>
              <button
                data-testid={index + "down-btn"}
                onClick={() => handleCartDecrease(item.id)}
              >
                ↓
              </button>
            </div>
          </div>
        ) : (
          <>object {item.id} not in cart</>
        )}
      </div>
    );
  };
  Card.propTypes = {
    item: PropTypes.object.isRequired,
  };

  return (
    <>
      <h1>Hello from Shop page!</h1>
      <div>
        <Link to="/">Back to Main</Link>
      </div>

      <h1>Shop here</h1>
      <div className={styles.shopContainer}>
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
  handleCartIncrease: PropTypes.func.isRequired,
  handleCartDecrease: PropTypes.func.isRequired,
};
//
