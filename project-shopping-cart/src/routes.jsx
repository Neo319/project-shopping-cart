import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    //error element goes here
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];

export default routes;
