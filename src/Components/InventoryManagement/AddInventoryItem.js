import { useState } from "react";

function AddInventory(props) {
  const [category, setCategory] = useState("Please enter category to search");
  const [brand, setBrand] = useState("Please enter brand to search");
  const [price, setPrice] = useState(0);
  const [clothStyle, setClothStyle] = useState(
    "Please enter the style to search"
  );

  const inputFieldDataChangeHandler = (e) => {
    let val = e.target.value;
    let targetSource = e.target.id;
    switch (targetSource) {
      case "txtCategory":
        if (!val) {
          val = "Please enter category to search";
        }
        setCategory(val);
        break;
      case "txtBrand":
        val = val ? val : "Please enter Brand to search";
        setBrand(val);
        break;
      case "numPrice":
        setPrice(val);
        break;
      case "txtClothStyle":
        val = val ? val : "Please enter cloth style to search";
        setClothStyle(val);
        break;
    }
  };
  const handleAddInventoryButtonPress = () => {
    props.addInventory({
      category: category,
      brand: brand,
      price: price,
      clothStyle: clothStyle,
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="txtCategory">Category:</label>
        <input
          type="text"
          id="txtCategory"
          value={category}
          onChange={inputFieldDataChangeHandler}
        ></input>
        <label htmlFor="txtBrand">Brand:</label>
        <input
          type="text"
          id="txtBrand"
          value={brand}
          onChange={inputFieldDataChangeHandler}
        ></input>
        <label htmlFor="numPrice">Price:</label>
        <input
          type="number"
          id="numPrice"
          value={price}
          onChange={inputFieldDataChangeHandler}
        ></input>
        <label htmlFor="txtClothStyle">Name of the Style:</label>
        <input
          type="text"
          id="txtClothStyle"
          value={clothStyle}
          onChange={inputFieldDataChangeHandler}
        ></input>
        <input
          type="button"
          id="btnSearch"
          value="Add Inventory"
          onClick={handleAddInventoryButtonPress}
        ></input>
      </form>
    </div>
  );
}
export default AddInventory;
