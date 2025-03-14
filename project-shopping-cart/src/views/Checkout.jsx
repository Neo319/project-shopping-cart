import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Checkout({ cart, products, deleteCartItem }) {
  function CartList({ item }) {
    const title = products[item - 1].title;
    const imgSrc = products[item - 1].image;
    const price = products[item - 1].price;
    return (
      <li className="cartItem">
        <div className="info">
          <h2>{title}</h2>
          <div>
            <span>Quantity: {cart[item]}</span>
            <span className="price">${price}</span>
          </div>
          <button onClick={() => deleteCartItem(item)}>Remove Item</button>
        </div>
        <img src={imgSrc} width="200px" />
      </li>
    );
  }

  CartList.propTypes = {
    item: PropTypes.string.isRequired,
  };

  const subtotalPrice = () => {
    if (Object.keys(cart).length) {
      const cartItems = Object.entries(cart);
      let total = 0;

      cartItems.map((item) => {
        const itemId = item[0] - 1;

        const itemPrice = products[itemId].price;
        const itemQuant = item[1];
        total = total + itemPrice * itemQuant;
      });
      return total;
    } else return null;
  };
  console.log("func result: " + subtotalPrice());

  return (
    <div className="checkoutPage">
      <h1>Hello from Checkout page!!</h1>
      <h1>Your Cart: </h1>

      {/* if there are any items in cart */}
      {Object.keys(cart).length ? (
        <div>
          <ul>
            {Object.keys(cart).map((key) => {
              return (
                <div key={key}>
                  <CartList item={key} />
                </div>
              );
            })}
          </ul>
          <div className="subtotal">
            <span>
              ........ Subtotal <br />
            </span>
            <span className="subtotalNumber">
              <b>{subtotalPrice()}</b>
            </span>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/external-lylac-kerismaker/64/external-Empty-delivery-lylac-kerismaker.png"
            alt="external-Empty-delivery-lylac-kerismaker"
          />
          <span>Your cart is currently empty... </span>
          <p>
            Go to <Link to="/shop">the shop page</Link> to browse items!
          </p>
        </div>
      )}
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
};
