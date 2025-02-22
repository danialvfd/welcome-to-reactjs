import React, { useState, useEffect } from 'react';
import Layout from '../layout/MainLayout';
import AmountDivider from '../components/AmountDivider';
import DiscountCalculator from '../components/DiscountCalculator';
import ShareCalculator from '../components/ShareCalculator';
import CalculationHistory from '../components/CalculationHistory';

function DongChi() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("calculationHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const updateHistory = (updatedHistory) => {
    setHistory(updatedHistory);
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
  };

  return (
    <Layout 
      sidebar={
        <>
          <AmountDivider />
          <DiscountCalculator />
        </>
      } 
      content={
        <>
          <ShareCalculator updateHistory={updateHistory} />
          <CalculationHistory history={history} updateHistory={updateHistory} />
        </>
      } 
    />
  );
}

export default DongChi;
