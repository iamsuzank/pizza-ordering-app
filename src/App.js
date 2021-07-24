import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Products from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";
import { getCart, storeCart } from "./helpers";
function App() {
  const [cart, setCart] = useState({});
  useEffect(() => {
    getCart().then((cart) => {
      setCart(JSON.parse(cart));
    });
    // console.log(cart);
  }, []);
  useEffect(() => {
    storeCart(JSON.stringify(cart));
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
