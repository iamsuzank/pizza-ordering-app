import React from "react";
import Products from "../../components/Products";
import { Link } from "react-router-dom";
import "./slider.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { FaRegHandPointDown } from "react-icons/fa";
const Home = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      // showCursor: false,
      startDelay: 500,
      showCursor: true,
      backDelay: 1000,
      backSpeed: 80,
      strings: [
        " Havana  Pizza",
        "Chicken mushroom Pizza",
        "Caramel pineapple pizza",
        "and many Delicious Foods!!",
      ],
    });
  }, []);
  return (
    <>
      <div className="hero py-16">
        <div className="container mx-auto flex items-center justift-between">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
            <Link to="/Products">
              <button
                className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 
          hover:bg-yellow-600 mb-5 flex"
              >
                Order Now
                <FaRegHandPointDown className="ml-2" size={28} />
              </button>
            </Link>

            <div className="w-1/3">
              <em className="text-yellow-500 font-bold " ref={textRef}></em>
            </div>
          </div>

          <div className="w-1/2">
            <ImageSlider className="w-4/5 " slides={SliderData} />
            {
              // <img className="w-4/5 " src="/images/pizza.png" alt="pizza-pic" />
            }
          </div>
        </div>
      </div>

      <div className="pb-24">
        <Products />
      </div>
    </>
  );
};

export default Home;
