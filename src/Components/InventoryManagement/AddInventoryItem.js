import { useState } from "react";

function AddInventory(props) {
  const [category, setCategory] = useState("Please enter category to search");
  const [brand, setBrand] = useState("Please enter brand to search");
  const [price, setPrice] = useState(0);
  const [clothStyle, setClothStyle] = useState(
    "Please enter the style to search"
  );

  const inputFieldFocusOutHandler = (e) => {
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
        if (!val) {
          val = "Please enter category to search";
        }
        setBrand(val);
        break;
      case "numPrice":
        if (!val) {
          val = 0;
        }
        setPrice(val);
        break;
      case "txtClothStyle":
        val = val ? val : "Please enter cloth style to search";
        setClothStyle(val);
        break;
    }
  };

  const inputFieldDataChangeHandler = (e) => {
    let val = e.target.value;
    let targetSource = e.target.id;
    switch (targetSource) {
      case "txtCategory":
        setCategory(val);
        break;
      case "txtBrand":
        setBrand(val);
        break;
      case "numPrice":
        setPrice(val);
        break;
      case "txtClothStyle":
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
    <div className="container">
      <div className="row">
        <h3>Add your Inventory Items here</h3>
      </div>
      {/* <form> form tag has been deleted as no use and need special handling with bootstrap class*/}
      <div className="row">
        <div className="col">
          <label htmlFor="txtCategory">Category:</label>
          <input
            type="text"
            id="txtCategory"
            value={category}
            onChange={inputFieldDataChangeHandler}
            onBlur={inputFieldFocusOutHandler}
            className="form-control"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="txtBrand">Brand:</label>
          <input
            type="text"
            id="txtBrand"
            value={brand}
            onChange={inputFieldDataChangeHandler}
            onBlur={inputFieldFocusOutHandler}
            className="form-control"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="numPrice">Price:</label>
          <input
            type="number"
            id="numPrice"
            value={price}
            onChange={inputFieldDataChangeHandler}
            onBlur={inputFieldFocusOutHandler}
            className="form-control"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="txtClothStyle">Name of the Style:</label>
          <input
            type="text"
            id="txtClothStyle"
            value={clothStyle}
            onChange={inputFieldDataChangeHandler}
            onBlur={inputFieldFocusOutHandler}
            className="form-control"
          ></input>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-4"/>
        <input
          type="button"
          id="btnSearch"
          value="Add Inventory"
          onClick={handleAddInventoryButtonPress}
          className="btn btn-primary col-4"
        ></input>
      </div>
      {/* </form> */}
    </div>
  );
}
export default AddInventory;
