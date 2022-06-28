import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)
  const cart = inCart ? "" : "in-cart"
  const [addCart, setAddcart] = useState(false)
  const cartState = addCart ? "Remove From Cart" : "Add to Cart"
  function clickInCart() {
    setInCart(() => !inCart)
    setAddcart(() => !addCart)
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickInCart}>{cartState}</button>
    </li>
  );
}

export default Item;


