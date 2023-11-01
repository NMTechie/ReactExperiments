import { useState } from "react";
import SearchInventory from "./SearchInventory";
import AddInventory from "./AddInventoryItem";
import DisplayInventory from "./DisplayInventory";

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

    let currentInventory = inventoryData;
    currentInventory["data"].push(inventoryItem);
    setInventory({data:currentInventory["data"]});
    console.log(currentInventory);
  };
  return (
    <div>
      <h1>This is the my React hands on with Inventory Management</h1>
      <h1>Add your Inventory Item here</h1>
      <AddInventory addInventory={updateInventory} />
      <p></p>
      <DisplayInventory inventoryItems={inventoryData["data"]}/>
      <p></p>
      <SearchInventory />
    </div>
  );
}
export default MainApp;
