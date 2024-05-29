/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import "./App.css";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [cart, setCart] = useState({});

  return (
    <>
      <NavBar cart={cart} />
      <h1>Hello from Main page!</h1>

      <div>
        <Link to="shop">Shop</Link>
      </div>

      <h1>About</h1>
      <p>
        This project was made during the Odin Project (TOP)'s React Course, with
        focus on practicing client-side routing using react-router-dom.
      </p>

      <a
        href="https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart"
        target="_blank"
      >
        Link to TOP Project Page
      </a>

      <div>
        Icons by
        <a href="https://icons8.com">Icons8</a>
      </div>
    </>
  );
}

export default App;
