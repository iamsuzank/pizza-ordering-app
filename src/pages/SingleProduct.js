import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";

const SingleProduct = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const history = useHistory();
  // console.log(params);

  useEffect(() => {
    fetch(`/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        // console.log(item);
        setItem(product);
      });
  }, []);

  return (
    <div className="container mx-auto mt-0 ">
      <button
        onClick={() => {
          history.goBack();
        }}
        className="mb-12 font-bold mt-20"
      >
        <MdArrowBack size={32} className="bg-yellow-500" />
      </button>
      <div className="flex">
        <img src={item.image} alt={item.name} />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{item.name}</h1>
          <div className="text-md">
            <button className="rounded-full bg-pink-200 px-2">
              {item.size}
            </button>
          </div>
          <div className="font-bold mt-2">रु {item.price}</div>
          <button className=" hover:bg-purple-200  flex  bg-yellow-500 py-1 px-4 rounded-full font-bold mt-4">
            <span>Add to Cart</span>
            <MdShoppingCart size={25} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
