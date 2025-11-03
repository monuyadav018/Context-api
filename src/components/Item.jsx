import React ,{useContext} from "react";
import { CartContext } from "../context/Cart";


const Item = (props) => {
    const cart = useContext(CartContext);
    console.log("cart",cart);
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <p>Price ${props.price}</p>
      <button onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price }
          ])
        }
>Add to cart</button>
    </div>
  );
};

export default Item;