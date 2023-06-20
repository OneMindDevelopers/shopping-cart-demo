import React, { useEffect, useState } from "react";
import "../styles/cart.css";

function Cart({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id != id);
    setCart(arr);
  };

  const handleChange = (item, count) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const tempArr = cart;
    if (count) {
      tempArr[ind].amount++;
    } else {
      tempArr[ind].amount--;
    }

    setCart([...tempArr]);
  };

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, true)}> + </button>
            <button> {item.amount} </button>
            <button onClick={() => handleChange(item, false)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}> Remove </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total price of the Cart</span>
        <span>Rs: {price}</span>
      </div>
    </article>
  );
}

export default Cart;
