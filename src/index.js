import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyEntryComponents from './Components/MyEntryApp';
import MainApp from './Components/InventoryManagement/MainApp';
import AdvanceConceptApp01 from './AdvanceConceptApp01';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // This is where the root DOM element is bootstraped with React render mechanism
root.render(
  <React.StrictMode>
    {/* <MyEntryComponents /> */}
    {/* <MainApp/> */}
    {/* <App/> */}
    <AdvanceConceptApp01/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
