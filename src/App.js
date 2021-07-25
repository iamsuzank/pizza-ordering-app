import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Products from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    // console.log(cart);
    setCart(JSON.parse(cart));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/products" exact component={Products} />
            <Route
              path="/products/:_id"
              exact
              component={SingleProduct}
            ></Route>
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
