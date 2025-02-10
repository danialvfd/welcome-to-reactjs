import React, { useContext } from 'react';
import { StateContext } from './StateContext';

const PageC = () => {
  const { state } = useContext(StateContext);
  const sum = state.valueA + state.valueB;

  return (
    <div>
      <h1>Page C</h1>
      <p>Value A: {state.valueA}</p>
      <p>Value B: {state.valueB}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default PageC;