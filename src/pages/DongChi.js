// src/pages/DongChi.js

import React from 'react';
import Layout from '../layout/MainLayout';
import AmountDivider from '../components/AmountDivider';
import DiscountCalculator from '../components/DiscountCalculator';
import ShareCalculator from '../components/ShareCalculator';
import CalculationHistory from '../components/CalculationHistory';
import { useSelectedItem } from '../context/SelectedItemContext';
import UseCalculationHistory from '../hooks/useCalculationHistory';
import { ToastContainer } from 'react-toastify';

function DongChi() {
  const { history, updateHistory } = UseCalculationHistory();
  const { selectedItem, setSelectedItem } = useSelectedItem();

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
        <ToastContainer />
          <ShareCalculator 
            history={history} 
            updateHistory={updateHistory}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <CalculationHistory 
            history={history}
            updateHistory={updateHistory}
          />
        </>
      } 
    />
  );
}

export default DongChi;
