import React, { useReducer } from "react";

const initialState = 0;
const reducerFunc = (currState, action) => {
  let newState = currState;
  switch (action) {
    case "Increament":
        newState = currState + 1;
      break;
    case "Decreament":
        newState = currState - 1;
      break;
    case "ReSet":
        newState = initialState;
      break;
    default:
      break;
  }
  return newState;
};

function CounterWithReducer() {
  const [newStateFrmReducer, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div style={{ background: "lightblue" }} className="row">
      <div className="row">
        <p> useReducer Example </p>
      </div>
      <div className="row">
        <div className="col-5"></div>
        <p className="col-5"> {`Initial Count Value is : ${newStateFrmReducer}`}</p>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <input
          type="button"
          value="Increament"
          className="col-2"
          onClick={(e) => {
            dispatch(e.target.value);
          }}
        />
        <input
          type="button"
          value="Decreament"
          className="col-2"
          onClick={(e) => {
            dispatch(e.target.value);
          }}
        />
        <input
          type="button"
          value="ReSet"
          className="col-2"
          onClick={(e) => {
            dispatch(e.target.value);
          }}
        />
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default CounterWithReducer;
