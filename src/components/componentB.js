import React, { useState } from 'react';

function PageB({ onSendData }) {
  const [dataB, setDataB] = useState(0);

  const handleIncrement = () => {
    setDataB(dataB + 1);
  };

  return (
    <div>
      <p>Page B: {dataB}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => onSendData('b', dataB)}>Send to C</button>
    </div>
  );
}

export default PageB;
