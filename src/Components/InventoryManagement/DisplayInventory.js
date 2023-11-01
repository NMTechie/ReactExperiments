import React from "react";

function DisplayInventory(props) {
  return (
    <div className="container">
      <div className="row">
        <h5>
          Displaying Inventoty Items : Total Count is{" "}
          {props.inventoryItems.length}
        </h5>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Cloth Style</th>
            </tr>
          </thead>
          <tbody>
            {props.inventoryItems.map((inventoryitem) => {
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
      </div>
    </div>
  );
}

export default DisplayInventory;
