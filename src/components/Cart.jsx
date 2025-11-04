import React from "react";
import { useCart } from "../context/Cart";


const Cart = () => {
    const cart = useCart();
    const total = cart.items.reduce((a,b)=>a+b.price,0);
  return (
    <div className="cart">
        <h1>Cart</h1>
       {cart.items.map((item)=>(
        <li>
            {item.name}-${item.price}
        </li>
       ))}
     
      <h4>Total bill ${total}</h4>
    </div>
  );
};

export default Cart;
