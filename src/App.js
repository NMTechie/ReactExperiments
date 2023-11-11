import logo from "./logo.svg";
import "./App.css";
import FragMemo from "./AdvancedTopics/FragMemo";
import { useState } from "react";

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
        <FragMemo fromParent="Sending Always Same Value"/>
      </div>
      <div>
        <button type="button" onClick={buttonClickHandler}>Click</button>
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
