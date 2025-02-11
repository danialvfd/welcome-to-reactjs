import React, { useRef } from 'react';
// 
const UseRefTest = () => {
  const numberRef = useRef(0);

  const increaseNumber = () => {
    numberRef.current += 1;
    console.log('current number', numberRef.current);
  };

  return (
    <div>
      <h1>useRef</h1>
      <p>number: {numberRef.current}</p>
      <button onClick={increaseNumber}>increase number</button>
    </div>
  );
};

export default UseRefTest;