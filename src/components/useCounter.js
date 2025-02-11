import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(num => num + 1);
  };

  const decrement = () => {
    setCount(num => num - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
}

export default useCounter;