import styles from "./NavBar.module.css";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const NavBar = ({ cart }) => {
  const cartIconSrc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO2ZPWtUQRSGn9WAEsS0foUQNRo/QCTY5A8YCaKVnaCSqBERCQh2VoKNjQgWFhqMJhJEghEri5hSrGwUAgG/BRcNgkXErBx4L1wk7JJ1ztw7kAem2b3znvMus3PPmYEVykc/8AGo1RnfgRfACaBCSfnYwMS/Y7SsZt7nkny3xPeW9CZgEPip545TQg7JjJnoa/DsaRl5ReKsAb7JzC4SZ1RGhkicQRkZJ3F2yMjXsu5ezWzZ3STOAxk5S+KckZExEqdbRj6v/E9KxPgyazSPMRPCyFAJjMyGMLI79z+JzV3FvhJCzF6GXyS4k3isUxW+CGwNJTohI1YVx+KUYj4PKXpeoveJx4xHT7RXop+IQ5eW1DzQGlK4ouKxpiDeXFWs2x7ijyQ+gC+r1MVarF6PABckfg9fDirOW6+yaJ8CWN8fo5K47BWgkuvjtznFaAN+AX+Adhx5LCO2x3twTvrPcOaiAo046b+U/jGc2V/ngO9/2SPtKrCWCFtjVQE7A2tfl+5NIjGpgHbQHYoWVdem20MkhhXwTkDNI9J8TUR6FHTOYTccJiKrdY8Sugv8DWwgMk8Cm1gEblAAl5TALRLngIy8IXFa1PTUdMuVNJMycpLEGZCRaRJnfa5cuQZ0aGtOkqPAQsBteLpIM4cDGlkANhZlZERJ2Etys8ZUg3uVsTpz7BK2ELKq1ZLJaM/1FktRrTPnBwWRvU+2LCOp+SbmuJOdd00pMRtP9dlEwDlRrrGz05X8sOWzPeAcYmBr/aGWjA37VRsl1Mwc/gIXmFSH9pqNAQAAAABJRU5ErkJggg==";

  //adds up all property descriptors of cart

  //-------------------------------------------------
  //TODO : refactor this stuff
  const calculateCartItems = () => {
    if (!cart) {
      return 0;
    }

    let sum = 0;
    const descriptors = Object.getOwnPropertyDescriptors(cart);

    console.log(descriptors);

    for (const key in descriptors) {
      const descriptor = descriptors[key];
      if (typeof descriptor.value === "number") {
        sum += descriptor.value;
      }
    }
    return sum;
  };

  return (
    <nav aria-label="navigation" className={styles.navBar}>
      <h1>
        <Link to="/">Project Shop</Link>
      </h1>
      <ul>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="Checkout" data-testid="checkout-link">
            <button className={styles.checkoutBtn}>
              <img className={styles.cart} src={cartIconSrc} alt="Checkout" />
              <div data-testid="cart-count" className={styles.cartCount}>
                {calculateCartItems()}
              </div>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  cart: PropTypes.object, // cart prop is expected to be an object
};

export default NavBar;
