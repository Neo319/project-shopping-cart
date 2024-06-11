import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Shop.module.css";

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
    const shortenedTitle = item.title.slice(0, 20) + " ... ";
    const shortenedDesc = item.description.slice(0, 100) + " ... ";
    const cartQuantity = cart[item.id];

    return (
      <div className={styles.card}>
        <div>
          <img className={styles.cardImg} src={item.image} alt={item.title} />
          <span className={styles.price}>${item.price}</span>
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
