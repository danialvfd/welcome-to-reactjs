import React, { useState, useEffect } from 'react';
import Layout from '../layout/MainLayout';
import AmountDivider from '../components/AmountDivider';
import DiscountCalculator from '../components/DiscountCalculator';
import ShareCalculator from '../components/ShareCalculator';
import CalculationHistory from '../components/CalculationHistory';

function DongChi() {
  const [history, setHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("calculationHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const updateHistory = (updatedHistory) => {
    setHistory(updatedHistory);
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
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
          <ShareCalculator 
            updateHistory={updateHistory}
            selectedItem={selectedItem}
          />
          <CalculationHistory 
            history={history} 
            updateHistory={updateHistory}
            handleEdit={handleEdit}
          />
        </>
      } 
    />
  );
}

export default DongChi;
