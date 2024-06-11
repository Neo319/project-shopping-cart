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
    const shortenedTitle = item.title.slice(0, 20) + " ... ";
    const shortenedDesc = item.description.slice(0, 100) + " ... ";

    return (
      <div className={styles.card}>
        <img className={styles.cardImg} src={item.image} alt={item.title} />
        <div>
          <h1>{shortenedTitle}</h1>
          <article>{shortenedDesc}</article>

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
                <p>Added to Cart!</p>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={() => handleCartIncrease(item.id)}>
                Add to Cart
              </button>
              <p> -- Item not in cart --</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  Card.propTypes = {
    item: PropTypes.object.isRequired,
  };

  return (
    <div className={styles.shop}>
      <h1>Hello from Shop page!</h1>
      <div>
        <Link to="/">Back to Main</Link>
      </div>

      <h1> ↓Shop here↓ </h1>
      <div className={styles.shopContainer}>
        {products.map((item, index) => {
          return <Card key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

Shop.propTypes = {
  cart: PropTypes.object,
  products: PropTypes.array,
  handleCartIncrease: PropTypes.func.isRequired,
  handleCartDecrease: PropTypes.func.isRequired,
};
//
