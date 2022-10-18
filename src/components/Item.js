import React, {useState} from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(false)
const [isInCart, setIsInCart] = useState(false)
  function handleAddToCartClick() {
    setInCart(!inCart)
    setIsInCart(!isInCart)

  }
  const cartname = inCart ? "Remove from Cart" : "Add to Cart";
  const cartClass = inCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ handleAddToCartClick} className="add">{cartname}</button>
    </li>
  );
}

export default Item;