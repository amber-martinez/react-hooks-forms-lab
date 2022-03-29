import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const [searchInput, setSearchInput] = useState("")

  function handleSearchChange(event) {
    console.log(event.target.value)
    setSearchInput(event.target.value)
  }

  const searchMatchItems = itemsToDisplay.filter((item) => {
    if (searchInput === "") {
      return itemsToDisplay
    } else {
      return item.name.includes(searchInput)
    }
  })


  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {searchMatchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
