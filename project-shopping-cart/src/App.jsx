/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
  const [cart, setCart] = useState({});

  return (
    <Router>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
