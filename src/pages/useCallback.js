import React, { useState, useCallback } from 'react';

// یک کامپوننت فرزند که ممکن است سنگین باشد
const ChildComponent = React.memo(function ({ onIncrement }) {
  console.log('Child Component re-rendered');

  return (
    <div>
      <h2>Child Component</h2>
      
      {/* استفاده از تابع memoized */}
      <button onClick={onIncrement}>Increase from Child</button>
    </div>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // استفاده از useCallback برای جلوگیری از رندر مجدد غیرضروری
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); // وابستگی به count

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increase Count</button>

      {/* ارسال تابع memoized به ChildComponent */}
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
};

export default ParentComponent;
