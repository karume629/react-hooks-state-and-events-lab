

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
          value={selectedCategory}
          name="filter"
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => ( 
          selectedCategory === "All" || item.category === selectedCategory ? (
          
          <Item key={item.id} name={item.name} category={item.category} />) : null
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
