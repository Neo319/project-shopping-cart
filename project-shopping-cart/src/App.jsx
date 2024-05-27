import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello from Main page!</h1>
      <div>
        <Link to="home">Home</Link>
      </div>
      <div>
        <Link to="shop">Shop</Link>
      </div>
    </>
  );
}

export default App;
