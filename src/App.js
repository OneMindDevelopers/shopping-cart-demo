import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemsList from "./components/ItemsList";
import Cart from "./components/Cart";
import "./styles/itemlist.css";
import "./styles/app.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    if (cart.length === 0) {
      setCart([...cart, item]);
    } else {
      let found = false;
      found = cart.find((value) => {
        return value.id === item.id;
      });

      if (found) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
      } else {
        setCart([...cart, item]);
      }
    }
  };

  return (
    <div className="app">
      <Navbar size={cart.length} setShow={setShow} />
      <Sidebar /> 
      {show ? (
        <ItemsList handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
      {warning && <div className="warning">Item already present in cart</div>}
    </div>
  );
}

export default App;
