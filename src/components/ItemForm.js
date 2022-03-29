import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit} ) {

  const [itemName, setItemName] = useState("");

  function handleNewItem(event) {
    setItemName(event.target.value)
  }

  const [itemCategory, setCategoryName] = useState("Produce");

  function handleNewCategory(event) {
    setCategoryName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem);
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItem} />
      </label>

      <label>
        Category:
        <select name="name" onChange={handleNewCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
