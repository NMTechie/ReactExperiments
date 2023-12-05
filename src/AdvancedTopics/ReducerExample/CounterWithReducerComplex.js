import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducerFunc = (currState, action) => {
  let newState = currState;
  switch (action.type) {
    case "Increament":
      newState = {...currState, firstCounter: currState.firstCounter + action.byHowMuch };
      // The use of spread operator in case if you have more than one property in state
      // object and want to operate with specific property
      break;
    case "Decreament":
      newState = { firstCounter: currState.firstCounter - action.byHowMuch }; // The object creation is important to work things
      // If you go with newState.firstCounter =  currState.firstCounter - 1  syntax things will not work
      break;
    case "ReSet":
      newState = initialState;
      break;
    default:
      break;
  }
  return newState;
};

function CounterWithReducerComplex() {
  const [newStateFrmReducer, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div style={{ background: "lightGreen" }} className="row">
      <div className="row">
        <p> useReducer Complex Example </p>
      </div>
      <div className="row">
        <div className="col-5"></div>
        <p className="col-5">
          {" "}
          {`Initial Count Value is : ${newStateFrmReducer.firstCounter}`}
        </p>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <input
          type="button"
          value="Increament"
          className="col-2"
          onClick={(e) => {
            dispatch({ type: "Increament",byHowMuch : 5 });
          }}
        />
        <input
          type="button"
          value="Decreament"
          className="col-2"
          onClick={(e) => {
            dispatch({ type: "Decreament",byHowMuch:2 });
          }}
        />
        <input
          type="button"
          value="ReSet"
          className="col-2"
          onClick={(e) => {
            dispatch({ type: "ReSet" });
          }}
        />
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default CounterWithReducerComplex;
