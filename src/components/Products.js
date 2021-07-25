import React, { useState, useEffect } from "react";
import Food from "./Food";
const Products = () => {
  // const { name } = useContext(CartContext);

  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    if (data) {
      setLoading(false);
    }
    setFoods(data);
    // console.log(data);
    // console.log(data.hits[0].recipe.label);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mx-auto pb-24  ">
      <h1 className="text-lg font-bold my-8 ">Our Foods </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="search-bar"
      >
        <div className="flex items-center ">
          <input
            className=" justify-center shadow appearance-none 
          focus:bg-white focus:border-yellow-500
          max-w-md 
          border rounded w-full py-2 px-3 text-gray-700 
leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Food"
            value={search}
            onChange={updateSearch}
          />
        </div>
      </form>

      <div className="grid grid-cols-5 my-8 gap-24">
        {loading ? (
          <img
            src="/images/loading.gif"
            className=" mx-auto w-1/2 mt-12 min-w-max min-w-max "
            alt="loading..."
          />
        ) : (
          foods
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((product) => <Food key={product._id} {...product} />)
          // foods.map((product, index) => <Food key={product._id} {...product} />)
        )}
      </div>
    </div>
  );
};

export default Products;
