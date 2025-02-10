import React, { useContext, useState } from 'react';
import { StateContext } from './StateContext';

const PageB = () => {
  const { dispatch } = useContext(StateContext);
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_B', payload: Number(value) });
  };

  return (
    <div>
      <h1>Page B</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Set B</button>
      </form>
    </div>
  );
};

export default PageB;