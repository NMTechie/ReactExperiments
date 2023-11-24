import React from "react";

const MyCustomContext = new React.createContext("Default Value is - Nilesh");

const MyCustomContextProvider = MyCustomContext.Provider;
const MyCustomContextConsumer = MyCustomContext.Consumer;

export {MyCustomContext,MyCustomContextProvider,MyCustomContextConsumer}
