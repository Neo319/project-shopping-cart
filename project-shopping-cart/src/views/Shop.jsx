import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Shop({
  cart,
  products,
  handleCartIncrease,
  handleCartDecrease,
}) {
  const Card = ({ item, index }) => {
    const shortenedTitle = item.title.slice(0, 20) + " ... ";
    const shortenedDesc = item.description.slice(0, 100) + " ... ";
    const cartQuantity = cart[item.id];

    Card.propTypes = {
      item: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    };

    return (
      <div className="card">
        <div>
          <img
            className="cardImg"
            src={item.image}
            alt={item.title}
            height="200px"
          />
          <span className="price">${item.price}</span>
        </div>
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
                <p>{cartQuantity} added to Cart!</p>
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
    <div className="shop">
      <h1>Hello from Shop page!</h1>
      <div>
        <Link to="/">Back to Main</Link>
      </div>

      <h1> ↓Shop here↓ </h1>
      <div className="shopContainer">
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
