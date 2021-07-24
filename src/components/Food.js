import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useState } from "react";
import { MdDoneAll } from "react-icons/md";

const Food = (props) => {
  // props.selected = false;
  const { name, price, image, size, _id } = props;
  const { cart, setCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);
  const [selected, setSelected] = useState(false);

  const addToCart = (e, id) => {
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
    setIsAdding(true);
    setSelected(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <Link to={`/products/${_id}`}>
      <div>
        <img src={image} alt={name} />

        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{name}</h2>

          <span className="bg-pink-200 py-1 rounded-full text-sm px-4">
            {size}
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
            disabled={isAdding}
            onClick={(e) => addToCart(e, _id)}
            className={`${
              isAdding
                ? "bg-green-500 py-1 px-4 rounded-full font-bold"
                : "bg-yellow-500 py-1 px-4 rounded-full font-bold"
            } `}
          >
            <span className="flex">
              {isAdding ? "ADDED" : "ADD"}
              {selected ? <MdDoneAll /> : ""}
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Food;
