import React from 'react';

const initialState = {
  valueA: 0,
  valueB: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_A':
      return { ...state, valueA: action.payload };
    case 'SET_B':
      return { ...state, valueB: action.payload };
    default:
      return state;
  }
};

const StateContext = React.createContext();

export { StateContext, initialState, reducer };