import { useState } from "react";
import SearchInventory from "./SearchInventory";
import AddInventory from "./AddInventoryItem";

function MainApp (){
    const [inventoryData,setInventory]=useState({data:[]});

const updateInventory=(inventoryItem)=>{
inventoryData.data.push(inventoryItem);
setInventory(inventoryData);
console.log(inventoryData);
}
    return(
        <div>
            <h1>This is the my React hands on with Inventory Management</h1>
            <SearchInventory/>
            <h1>Add your Inventory Item here</h1>
            <AddInventory addInventory={updateInventory}/>
        </div>
    );
}
export default MainApp;