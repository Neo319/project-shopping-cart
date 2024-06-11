import PropTypes from "prop-types";
import styles from "./Checkout.module.css";

export default function Checkout({ cart, products, deleteCartItem }) {
  function CartList({ item }) {
    const title = products[item - 1].title;
    const imgSrc = products[item - 1].image;
    return (
      <li className={styles.cartItem}>
        <div className={styles.info}>
          <h2>{title}</h2>
          <span>Quantity: {cart[item]}</span>
          <button onClick={(e) => deleteCartItem(item)}>Remove Item</button>
        </div>
        <img src={imgSrc} alt="" />
      </li>
    );
  }

  CartList.propTypes = {
    item: PropTypes.string.isRequired,
  };

  return (
    <div className={styles.checkoutPage}>
      <h1>Hello from Checkout page!!</h1>
      <h1>Your Cart: </h1>

      <ul>
        {Object.keys(cart).map((key) => {
          return (
            <div key={key}>
              <CartList item={key} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};
