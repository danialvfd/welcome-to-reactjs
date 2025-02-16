import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(function ({ onIncrement }) {
  console.log('Child Component re-rendered');

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increase from Child</button>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increase Count</button>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
};

export default ParentComponent;
