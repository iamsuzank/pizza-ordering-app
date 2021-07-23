import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Food = ({ title, price, image, type, id }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (e, id, title, image, price) => {
    e.preventDefault();
    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[id]) {
      _cart.items[id] += 1;
    } else {
      _cart.items[id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
  };
  return (
    <Link to={`/products/${id}`}>
      <div>
        <img src={image} alt={title} />

        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{title}</h2>
          <span className="bg-pink-200 py-1 rounded-full text-sm px-4">
            {type}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            रु {price}
          </span>
          <button
            onClick={(e) => addToCart(e, id, title, image, price)}
            className="bg-yellow-500 py-1 px-4 rounded-full font-bold"
          >
            ADD
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Food;
