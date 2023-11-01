import { useState } from "react";
import SearchInventory from "./SearchInventory";
import AddInventory from "./AddInventoryItem";
import DisplayInventory from "./DisplayInventory";
import "bootstrap/dist/css/bootstrap.min.css";

function MainApp() {
  const [inventoryData, setInventory] = useState({ data: [] });

  const updateInventory = (inventoryItem) => {
    //inventoryData.data.push(inventoryItem); this is ok
    //inventoryData["data"].push(inventoryItem); this is also ok and more meaningful

    //setInventory({data:inventoryData});
    // This will not work because it is setting data key in the JSON object
    //to an object that has a childern key called "data" that actually consists the list

    //setInventory({data:inventoryData["data"]}); // !!!!!!! Please pay attention here
    //console.log(inventoryData);

    inventoryItem.id = inventoryData["data"].length;
    let currentInventory = inventoryData;
    currentInventory["data"].push(inventoryItem);
    setInventory({ data: currentInventory["data"] });
    console.log(currentInventory);
  };
  return (
    <div className="container">
      <div className="row mt-3" style={{
        color: "red"
        }}>
        <h1>This is the my React hands on with Inventory Management</h1>
      </div>
      <div className="row mt-3" style={{
        background: "lightseagreen"
      }}>        
        <AddInventory addInventory={updateInventory} />
      </div>
      <div className="row mt-3" style={{
        background: "lightsalmon"
      }}>
        <DisplayInventory inventoryItems={inventoryData["data"]} />
      </div>
      <div className="row mt-3" style={{
        background: "lightyellow"
      }}>
        <SearchInventory />
      </div>
    </div>
  );
}
export default MainApp;
