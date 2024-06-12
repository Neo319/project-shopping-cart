import PropTypes from "prop-types";
import styles from "./Checkout.module.css";
import { Link } from "react-router-dom";

export default function Checkout({ cart, products, deleteCartItem }) {
  function CartList({ item }) {
    const title = products[item - 1].title;
    const imgSrc = products[item - 1].image;
    const price = products[item - 1].price;
    return (
      <li className={styles.cartItem}>
        <div className={styles.info}>
          <h2>{title}</h2>
          <div>
            <span>Quantity: {cart[item]}</span>
            <span className={styles.price}>${price}</span>
          </div>
          <button onClick={() => deleteCartItem(item)}>Remove Item</button>
        </div>
        <img src={imgSrc} alt="" />
      </li>
    );
  }

  CartList.propTypes = {
    item: PropTypes.string.isRequired,
  };

  //-----------------------------------------
  //TODO: add a checkout subtotal that adds up all prices and a mock confirm button!
  //add a 'cart empty' screen
  return (
    <div className={styles.checkoutPage}>
      <h1>Hello from Checkout page!!</h1>
      <h1>Your Cart: </h1>

      {/* if there are any items in cart */}
      {Object.keys(cart).length ? (
        <ul>
          {Object.keys(cart).map((key) => {
            return (
              <div key={key}>
                <CartList item={key} />
              </div>
            );
          })}
        </ul>
      ) : (
        <div className={styles.emptyCart}>
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
