import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
