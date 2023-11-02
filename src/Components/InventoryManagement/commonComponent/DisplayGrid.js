import React from "react";
import { useState } from "react";

function DisplayGrid(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr
          style={{
            fontStyle: "italic",
          }}
        >
          <th>Id</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Cloth Style</th>
        </tr>
      </thead>
      <tbody>
        {props.listItems.map((inventoryitem) => {
          return (
            <tr>
              <th>{inventoryitem.id}</th>
              <td>{inventoryitem.category}</td>
              <td>{inventoryitem.brand}</td>
              <td>{inventoryitem.price}</td>
              <td>{inventoryitem.clothStyle}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DisplayGrid;
