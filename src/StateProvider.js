import React, { createContext, useReducer, useContext } from "react";

//prepare data layer
export const StateContext = createContext();

//wrap our app and provide data lAYER
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull information from data layer
export const useStateValue = () => useContext(StateContext);
