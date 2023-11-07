import { useState } from "react";
import { useEffect } from "react";
import SearchInventory from "./SearchInventory";
import AddInventory from "./AddInventoryItem";
import DisplayInventory from "./DisplayInventory";
import "bootstrap/dist/css/bootstrap.min.css";

function MainApp() {
  const [inventoryData, setInventory] = useState({ data: [] });

  //fetch data from respository for the initial load
  useEffect(() => {
    let requestoption = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:3001/inventoryitems", requestoption)
      .then((response) => response.json())
      .then((resData) => {
        setInventory({ data: resData });
      });
  }, []); //empty dependency variable list means it will only run for fisrt time the component is mounted

  const updateInventory = (inventoryItem) => {
    //inventoryData.data.push(inventoryItem); this is ok
    //inventoryData["data"].push(inventoryItem); this is also ok and more meaningful

    //setInventory({data:inventoryData});
    // This will not work because it is setting data key in the JSON object
    //to an object that has a childern key called "data" that actually consists the list

    //setInventory({data:inventoryData["data"]}); // !!!!!!! Please pay attention here
    //console.log(inventoryData);

    //inventoryItem.id = inventoryData["data"].length; This is not required any more as DB is returning the same
    let currentInventory = inventoryData;
    currentInventory["data"].push(inventoryItem);
    setInventory({ data: currentInventory["data"] });
    //console.log(currentInventory);
  };
  const refreshInventory = (deletedItem) => {
    let currentInventory = inventoryData;
    let idx = currentInventory["data"].indexOf(deletedItem);
    currentInventory["data"].splice(idx,1);
    setInventory({ data: currentInventory["data"] });
  }
  return (
    <div className="container">
      <div
        className="row mt-3"
        style={{
          color: "red",
        }}
      >
        <h1>This is the my React hands on with Inventory Management</h1>
      </div>
      <div
        className="row mt-3"
        style={{
          background: "lightseagreen",
        }}
      >
        <AddInventory addInventory={updateInventory} />
      </div>
      <div
        className="row mt-3"
        style={{
          background: "lightsalmon",
        }}
      >
        <DisplayInventory inventoryItems={inventoryData["data"]} refershCallback={refreshInventory}/>
      </div>
      <div
        className="row mt-3"
        style={{
          background: "lightyellow",
        }}
      >
        <SearchInventory inventoryItems={inventoryData["data"]} refershCallback={refreshInventory}/>
      </div>
    </div>
  );
}
export default MainApp;
