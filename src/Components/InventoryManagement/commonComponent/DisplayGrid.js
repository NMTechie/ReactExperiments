import React from "react";
import { useState } from "react";

function DisplayGrid(props) {
  const deleteClickHandler = (e, item) => {
    //first save data into DB
    let requestoption = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    //Look at backtick here to bind the JSX expression
    fetch(
      `http://localhost:3001/inventoryitems/${item.id}`,
      requestoption
    ).then((response) => {
      if (response.status == 200) {
        console.log("Item Deleted");
        props.refreshCallBack(item);
        if (props.refreshFilterItems) {
          props.refreshFilterItems(item);
        }
      }
    });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr
          style={{
            fontStyle: "italic",
          }}
        >
          <th scope="row">Id</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Cloth Style</th>
          <th>Click to Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* https://codedamn.com/news/reactjs/if-else-statements-in-jsx */}
        {props.listItems ? (
          props.listItems.map((inventoryitem) => {
            return (
              <tr>
                <th scope="col">{inventoryitem.id}</th>
                <td>{inventoryitem.category}</td>
                <td>{inventoryitem.brand}</td>
                <td>{inventoryitem.price}</td>
                <td>{inventoryitem.clothStyle}</td>
                <td>
                  <input
                    type="button"
                    className="btn btn-danger"
                    value="Delete"
                    onClick={(e) => {
                      deleteClickHandler(e, inventoryitem); // This is where the item object is bound to the button
                    }}
                    // See the above construct. Any event handler has first argument as defult to
                    // the event agrs. If you need to pass other argument then
                    // the above syntax should be used to pass that
                  />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>no items to dispaly </tr>
        )} 
      </tbody>
    </table>
  );
}

export default DisplayGrid;
