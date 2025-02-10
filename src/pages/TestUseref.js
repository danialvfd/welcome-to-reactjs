import React, { useRef } from 'react';

const SuperSimpleUseRefExample = () => {
  // ایجاد یک ref برای ذخیره یک عدد
  const numberRef = useRef(0);

  // تابعی برای افزایش عدد
  const increaseNumber = () => {
    numberRef.current += 1; // افزایش عدد در ref
    console.log('عدد فعلی:', numberRef.current); // نمایش عدد در کنسول
  };

  return (
    <div>
      <h1>مثال خیلی ساده useRef</h1>
      <p>عدد ذخیره شده در ref: {numberRef.current}</p>
      <button onClick={increaseNumber}>افزایش عدد</button>
    </div>
  );
};

export default SuperSimpleUseRefExample;