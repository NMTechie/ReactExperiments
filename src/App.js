import logo from "./logo.svg";
import "./App.css";
import FragMemo from "./AdvancedTopics/FragMemo";
import { useState } from "react";
import ChildComponent from "./AdvancedTopics/ChildComponent";
import ErrorHandlingComp from "./AdvancedTopics/ErrorHandlingComp";
import ClickButtonComp from "./AdvancedTopics/HigherOrderComp/ClickButtonComp";
import MouseHoverCounter from "./AdvancedTopics/HigherOrderComp/MouseHoverCounter";
import ClickButtonCompTwo from "./AdvancedTopics/RenderProp/ClickButtonCompTwo";
import MouseHoverCounterTwo from "./AdvancedTopics/RenderProp/MouseHoverCounterTwo";
import WithRenderProps from "./AdvancedTopics/RenderProp/WithRenderProps";
import Level1Component from "./AdvancedTopics/ContextExample/Level1Component";
import { MyCustomContextProvider } from "./AdvancedTopics/ContextExample/ContextExample";
import { NileshContextProvider } from "./AdvancedTopics/ContextExample/ContextEample2";
import Level11Component from "./AdvancedTopics/ContextExample/Level11Component";

function App() {
  const [counter, setCounter] = useState(1);
  const buttonClickHandler = (event) => {
    console.log("Button has clicked");
    let currCounter = counter;
    currCounter = currCounter + 1;
    setCounter(currCounter);
  };
  return (
    <div className="App">
      <div style={{ background: "grey" }}>
        <p>Counter value is :{counter}</p>
        <FragMemo fromParent="Sending Always Same Value" />
        <ErrorHandlingComp>
          <ChildComponent valueFromParent="Nilesh Ranjan Mitra" />
        </ErrorHandlingComp>
        <ErrorHandlingComp>
          <ChildComponent valueFromParent="Nilesh" />
        </ErrorHandlingComp>
        <ErrorHandlingComp>
          <ChildComponent valueFromParent="Ranjan" />
        </ErrorHandlingComp>
        <ErrorHandlingComp>
          <ChildComponent valueFromParent="Mitra" />
        </ErrorHandlingComp>
        <div style={{ background: "lightPink" }}>
          <p>Higher order Example</p>
          <ClickButtonComp passingValueToHoc="Nilesh" />
          <MouseHoverCounter />
        </div>
        <div style={{ background: "lightGreen" }}>
          <p>Render Prop Example</p>
          <MouseHoverCounterTwo />
          <WithRenderProps
            MyCustomFuncAsProp={(counter, incrementCounterLogic) => 
              <ClickButtonCompTwo
                CounterValue={counter} //pay attention to the syntax here. In case of Render Props the method does not have the body {} brackets
                ClickHandler={incrementCounterLogic}
              />
            }
          /> 
        </div>
        <div style={{ background: "lightPink" }}>
          <p>Context Example</p>          
          <Level1Component/>  {/*The showcase of deafult value example of context*/}
          <MyCustomContextProvider value="New Value for MyCustom Context">
            <NileshContextProvider value="New-Value-For-Nilesh-Context">
              <Level11Component/>
            </NileshContextProvider>
          </MyCustomContextProvider>
        </div>
      </div>
      <div>
        <button type="button" onClick={buttonClickHandler}>
          Click
        </button>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
