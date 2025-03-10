import { useState, useEffect } from "react";

import "./styles/NavBar.css";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./views/Home";
import Shop from "./views/Shop";
import Checkout from "./views/Checkout";
import ProductDetail from "./views/ProductDetail";

import ProductGrid from "./components/ProductGrid";

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  // fetches API and sets product state
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // //DEVELOPMENT: sets products to mock
  // useEffect(() => {
  //   setProducts(mockProducts);
  // }, []);

  // State Handlers invoked when user adds & decreases cart item.
  const handleCartIncrease = (itemId) => {
    if (cart[itemId] >= 1) {
      const newCart = { ...cart, [itemId]: cart[itemId] + 1 };
      setCart(newCart);
    } else {
      const newCart = { ...cart, [itemId]: 1 };
      setCart(newCart);
    }
  };
  const handleCartDecrease = (itemId) => {
    if (cart[itemId] > 1) {
      const newCart = { ...cart, [itemId]: cart[itemId] - 1 };
      setCart(newCart);
    } else {
      deleteCartItem(itemId);
    }
  };
  // function ensuring cart items with <1 quantity are removed.
  const deleteCartItem = (itemId) => {
    const newCart = { ...cart };
    delete newCart[itemId];
    setCart(newCart);
  };

  // App component functions as a Router, allows state management within other components.
  return (
    <Router>
      <NavBar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              products={products}
              handleCartIncrease={handleCartIncrease}
              handleCartDecrease={handleCartDecrease}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              cart={cart}
              products={products}
              handleCartIncrease={handleCartIncrease}
              handleCartDecrease={handleCartDecrease}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              handleCartIncrease={handleCartIncrease}
              handleCartDecrease={handleCartDecrease}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              products={products}
              deleteCartItem={deleteCartItem}
            />
          }
        />
        <Route
          path="/test"
          element={
            <>
              {/* testing ground for new functions, components, etc. Current: carousel. */}
              <NavBar cart={cart} />
              <h1>testing ground for Product Cards.</h1>

              {/* test: pass mock product images into component */}
              <ProductGrid products={products} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
