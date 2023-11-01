import React from "react";

function DisplayInventory(props) {
  return (
    <div>
      <h1> Displaying Inventoty Items </h1>
      <h1> Displaying Inventoty Items {props.inventoryItems.length} </h1>
      {props.inventoryItems.map((inventoryitem) => {
        return (
          <div>
            <p>Category:{inventoryitem.category}</p>
            <p>Brand:{inventoryitem.brand}</p>
            <p>Price:{inventoryitem.price}</p>
            <p>Cloth:{inventoryitem.clothStyle}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayInventory;
