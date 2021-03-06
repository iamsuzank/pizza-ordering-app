import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import CartImg from "../images/cart.png";
import LogoImg from "../images/logo.png";

const Navigation = () => {
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className=" z-40   container mx-auto flex items-center justify-between ">
        <Link to="/">
          <img style={{ height: 45 }} src={LogoImg} alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span className="text-white ">
                  {cart.totalItems ? cart.totalItems : 0}
                </span>
                <img className="ml-2" src={CartImg} alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
