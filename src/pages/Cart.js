import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  let total = 0;
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  // console.log(cart);

  const [priceFetched, togglePriceFetched] = useState(false);

  useEffect(() => {
    if (!cart.items) {
      return;
    }

    if (priceFetched) {
      return;
    }
    fetch("/api/products/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: Object.keys(cart.items),
      }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        togglePriceFetched(true);
      });
  }, [cart]);

  const getQuantity = (productId) => {
    return cart.items[productId];
  };

  const increment = (productId) => {
    const existingQty = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = (productId) => {
    const existingQty = cart.items[productId];
    const _cart = { ...cart };
    if (existingQty === 1) {
      return;
    }
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const getSum = (id, price) => {
    const sum = price * getQuantity(id);
    total += sum;
    return sum;
  };

  const handleDelete = (id) => {
    const _cart = { ...cart };
    const qty = _cart.items[id];
    delete _cart.items[id];
    _cart.totalItems -= qty;
    setCart(_cart);
    const updateProductList = products.filter((product) => product._id !== id);
    setProducts(updateProductList);
  };

  const handleOrderNow = () => {
    window.alert("Order Placed Successfully");
    setProducts([]);
    setCart({});
  };

  return products.length ? (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font -bold">Cart Items</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product._id} className="mb-12">
              <div className=" flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-16"
                    src={product.image}
                    alt={product.name}
                  />
                  <span className="font-bold ml-4 w-48">{product.name}</span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      decrement(product._id);
                    }}
                    className=" font-extrabold bg-yellow-500 px-4 py-2 rounded-full leading-none"
                  >
                    -
                  </button>
                  <b className="px-4">{getQuantity(product._id)}</b>
                  <button
                    onClick={() => {
                      increment(product._id);
                    }}
                    className=" font-extrabold bg-yellow-500 px-4 py-2 rounded-full leading-none"
                  >
                    +
                  </button>
                </div>
                <span>रु {getSum(product._id, product.price)}</span>
                <button
                  onClick={() => {
                    handleDelete(product._id);
                  }}
                  className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-3" />
      <div className="text-right">
        <b>Grand Total </b>: रु {total}
      </div>
      <hr className="my-3" />
      <div className="text-right">
        <button
          onClick={handleOrderNow}
          className="bg-yellow-500 px-4 py-2  mt-1 rounded-full leading-none"
        >
          Order Now
        </button>
      </div>
    </div>
  ) : (
    <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" alt="" />
  );
};

export default Cart;
