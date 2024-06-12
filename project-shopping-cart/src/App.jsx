/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [cart, setCart] = useState({});

  //mock data from fakeStoreAPI
  //----------------------------------------
  //TODO: replace with real API fetch
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

  //fetching API data

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

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

  const deleteCartItem = (itemId) => {
    const newCart = { ...cart };
    delete newCart[itemId];
    setCart(newCart);
  };

  return (
    <Router>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
        ></Route>
        <Route
          path={"/checkout"}
          element={
            <Checkout
              cart={cart}
              products={products}
              deleteCartItem={deleteCartItem}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
