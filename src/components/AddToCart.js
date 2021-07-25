import React from "react";

import { useState } from "react";

const [isAdding, setIsAdding] = useState(false);
const [selected, setSelected] = useState(false);
import { useContext } from "react";
import { CartContext } from "../CartContext";
const { cart, setCart } = useContext(CartContext);

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

export default addToCart;
