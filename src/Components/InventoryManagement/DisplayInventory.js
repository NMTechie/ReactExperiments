import React from "react";
import DisplayGrid from "./commonComponent/DisplayGrid";

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
        <DisplayGrid listItems={props.inventoryItems} refreshCallBack={props.refershCallback}/>
      </div>
    </div>
  );
}

export default DisplayInventory;
