import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Shop({ cart, products }) {
  // eslint-disable-next-line react/prop-types
  const Card = ({ title, index }) => {
    return (
      <div className="Card">
        <h1>item {index}</h1>
        <h1>{title}</h1>
      </div>
    );
  };
  console.log("products-", products);
  return (
    <>
      <h1>Hello from Shop page!</h1>
      <div>
        <Link to="/">Back to Main</Link>
      </div>

      <h1>Shop here</h1>
      <div className="shopContainer">
        {products.map((item, index) => {
          //--------------------------------------------
          //CURRENT QUESTION: why is this title rendering as an empty string?
          return <Card key={index} title={item.title} index={index} />;
        })}
      </div>
    </>
  );
}

Shop.propTypes = {
  cart: PropTypes.object,
  products: PropTypes.array,
};
