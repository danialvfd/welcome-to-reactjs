import React, { useState } from 'react';

function PageA({ onSendData }) {
  const [dataA, setDataA] = useState(0);

  const handleIncrement = () => {
    setDataA(dataA + 1);
  };

  return (
    <div>
      <p>Page A: {dataA}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => onSendData('a', dataA)}>Send to C</button>
    </div>
  );
}

export default PageA;
