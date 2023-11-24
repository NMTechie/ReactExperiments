import React from "react";

const NileshContext = new React.createContext("Default Value is - Nilesh2");

const NileshContextProvider = NileshContext.Provider;
const NileshContextConsumer = NileshContext.Consumer;

export {NileshContext , NileshContextProvider,NileshContextConsumer}
