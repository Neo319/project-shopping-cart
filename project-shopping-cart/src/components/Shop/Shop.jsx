import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./Shop.module.css";
import NavBar from "../NavBar/NavBar";

export default function Shop() {
  const [cart, setCart] = useState({});

  const mockProducts = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
  ];

  const products = mockProducts;

  function handleCartIncrease(item) {
    if (Object.hasOwnProperty.call(cart, item.id)) {
      const itemId = cart[item.id];
      const newCart = { ...cart, [itemId]: cart[itemId]++ };
      setCart(newCart);
    }
  }

  function handleCartDecrease(item) {
    if (Object.hasOwnProperty.call(cart, item.id)) {
      const itemId = cart[item.id];
      const newCart = { ...cart, [itemId]: cart[itemId]-- };
      setCart(newCart);
    }
  }

  // eslint-disable-next-line react/prop-types
  const Card = ({ item, index }) => {
    return (
      <div className="Card">
        <h1>item {index}</h1>
        <h1>{item.title}</h1>
        <article>{item.description}</article>
        <button onClick={() => handleCartIncrease(item.id)}>Add to Cart</button>

        {Object.prototype.hasOwnProperty.call(cart, item.id) ? (
          <div>
            <div>
              {/* how to query / select for these buttons ...?  */}
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
          <></>
        )}
      </div>
    );
  };
  Card.propTypes = {
    item: PropTypes.object.isRequired,
  };

  return (
    <>
      <NavBar cart={cart} />
      <h1 className={styles.title}>Hello from Shop page!</h1>
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
