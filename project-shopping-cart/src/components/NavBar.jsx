import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

import dropDown from "./dropDown";

const NavBar = ({ cart }) => {
  const cartIconSrc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO2ZPWtUQRSGn9WAEsS0foUQNRo/QCTY5A8YCaKVnaCSqBERCQh2VoKNjQgWFhqMJhJEghEri5hSrGwUAgG/BRcNgkXErBx4L1wk7JJ1ztw7kAem2b3znvMus3PPmYEVykc/8AGo1RnfgRfACaBCSfnYwMS/Y7SsZt7nkny3xPeW9CZgEPip545TQg7JjJnoa/DsaRl5ReKsAb7JzC4SZ1RGhkicQRkZJ3F2yMjXsu5ezWzZ3STOAxk5S+KckZExEqdbRj6v/E9KxPgyazSPMRPCyFAJjMyGMLI79z+JzV3FvhJCzF6GXyS4k3isUxW+CGwNJTohI1YVx+KUYj4PKXpeoveJx4xHT7RXop+IQ5eW1DzQGlK4ouKxpiDeXFWs2x7ijyQ+gC+r1MVarF6PABckfg9fDirOW6+yaJ8CWN8fo5K47BWgkuvjtznFaAN+AX+Adhx5LCO2x3twTvrPcOaiAo046b+U/jGc2V/ngO9/2SPtKrCWCFtjVQE7A2tfl+5NIjGpgHbQHYoWVdem20MkhhXwTkDNI9J8TUR6FHTOYTccJiKrdY8Sugv8DWwgMk8Cm1gEblAAl5TALRLngIy8IXFa1PTUdMuVNJMycpLEGZCRaRJnfa5cuQZ0aGtOkqPAQsBteLpIM4cDGlkANhZlZERJ2Etys8ZUg3uVsTpz7BK2ELKq1ZLJaM/1FktRrTPnBwWRvU+2LCOp+SbmuJOdd00pMRtP9dlEwDlRrrGz05X8sOWzPeAcYmBr/aGWjA37VRsl1Mwc/gIXmFSH9pqNAQAAAABJRU5ErkJggg==";
  const navLinks = () => {
    return (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">My Cart</Link>
        </li>
        <li>
          <Link to="/rand">View random product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
        <li>
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li>
          <Link to="/cart">My Cart</Link>
        </li>
        <li>
          <Link to="/test">Testing Ground</Link>
        </li>
      </>
    );
  };

  //adds up all property descriptors of cart
  const calculateCartItems = () => {
    if (!cart) {
      return 0;
    }

    let sum = 0;
    const descriptors = Object.getOwnPropertyDescriptors(cart);

    for (const key in descriptors) {
      const descriptor = descriptors[key];
      if (typeof descriptor.value === "number") {
        sum += descriptor.value;
      }
    }
    return sum;
  };

  // functionality for drop-down menu
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav aria-label="navigation" className="navBar">
      <ul>
        {
          // alter screen based on device width
          window.screen.width < 800 ? (
            <>
              <button className="hamburgerBtn" onClick={toggleMenuOpen}>
                <div className="hamburgerContainer">
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
                </div>
              </button>

              {menuOpen ? (
                <div onClick={toggleMenuOpen}>{dropDown(navLinks)}</div>
              ) : (
                <></>
              )}
            </>
          ) : (
            navLinks()
          )
        }

        {/* button / cart icon */}
        <li>
          <Link to="/checkout">
            <button className="checkoutBtn">
              <img className="cart" src={cartIconSrc} />
              <div data-testid="cart-count" className="cartCount">
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
  cart: PropTypes.object,
};

export default NavBar;
