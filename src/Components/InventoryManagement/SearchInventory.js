import { useState } from "react";

function SearchInventory() {
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

  return (
    <div className="container">
      <div className="row">
        <h3> Search for Inventory </h3>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="txtCategory">Category:</label>
          <input
            type="text"
            id="txtCategory"
            value={category}
            onChange={inputFieldDataChangeHandler}
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
            className="form-control"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="numPrice">Price:</label>
          <input
            type="number"
            id="numPrice"
            value={price}
            onChange={inputFieldDataChangeHandler}
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
            className="form-control"
          ></input>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3"></div>
        <input
          type="button"
          id="btnSearch"
          value="Click Here to Search"
          className="col-6 btn btn-primary"
        ></input>
      </div>
      <div className="row">
        <div className="row">
          <h5> The search criterion is </h5>
        </div>
        <div className="row">
          <div className="col">
            <p>Category value is : {category}</p>
          </div>
          <div className="col">
            <p>Brand value is : {brand}</p>
          </div>
          <div className="col">
            <p>Price value is : {price}</p>
          </div>
          <div className="col">
            <p>Cloth Style value is : {clothStyle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchInventory;
