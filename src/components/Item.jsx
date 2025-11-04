// import React ,{useContext} from "react";
import React  from "react";
import { useCart } from "../context/Cart";


const Item = (props) => {
    const cart = useCart();
    console.log("cart",cart);
  return (
    <div className="item-card">
      <h2 className="name">{props.name}</h2>
      <p className="price">Price ${props.price}</p>
      <button className="btn"  onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price }
          ])
        }
> Add to cart</button>
    </div>
  );
};

export default Item;