import { useState, useEffect } from "react";
import { useSelectedItem } from "../context/SelectedItemContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareCalculator = ({ updateHistory, selectedItem }) => {
  const { setSelectedItem } = useSelectedItem();

  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("percent");
  const [delivery, setDelivery] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalAmount, setFinalAmount] = useState(null);
  const [resultContent, setResultContent] = useState("");

  useEffect(() => {
    if (selectedItem) {
      setTotalAmount(selectedItem.totalAmount);
      setDiscount(selectedItem.discount);
      setDiscountType(selectedItem.discountType);
      setDelivery(selectedItem.delivery);
      setTax(selectedItem.tax);
      setFinalAmount(selectedItem.finalAmount);
      setResultContent(selectedItem.resultContent);
    }
  }, [selectedItem]);

  const validateInputs = () => {
    const amount = parseFloat(totalAmount) || 0;

    if (amount <= 0) {
      toast.error('Total amount must be greater than 0');
      return false;
    }

    if (discountType === 'percent') {
      if (discount < 0 || discount > 100) {
        toast.error('Discount percentage must be between 0 and 100');
        setDiscount(0);
        return false;
      }
    } else if (discountType === 'amount') {
      if (discount < 0) {
        toast.error('Discount amount cannot be negative');
        setDiscount(0);
        return false;
      }
    }

    return true;
  };

  const calculateDiscount = (amount) => {
    if (discountType === 'percent') {
      return amount * (discount / 100);
    } else {
      return parseFloat(discount) || 0;
    }
  };

  const handleCalculate = () => {
    if (!validateInputs()) return; 

    const amount = parseFloat(totalAmount) || 0;
    const deliveryCost = parseFloat(delivery) || 0;
    const taxValue = parseFloat(tax) || 0;

    const calculatedDiscount = calculateDiscount(amount);
    const finalPrice = (amount - calculatedDiscount) + deliveryCost + (amount * (taxValue / 100));
    const finalAmountValue = finalPrice.toFixed(2);

    const newResultContent = `${amount} - ${calculatedDiscount.toFixed(2)} + ${deliveryCost} + (${amount} * ${taxValue} / 100) = ${finalAmountValue}`;

    setResultContent(newResultContent);
    setFinalAmount(finalAmountValue);

    saveToHistory(finalAmountValue, newResultContent);
    handleReset(false);
  };

  const saveToHistory = (finalAmountValue, newResultContent) => {
    const newHistoryItem = {
      id: selectedItem ? selectedItem.id : Date.now(),
      totalAmount,
      discount,
      discountType,
      delivery,
      tax,
      finalAmount: finalAmountValue,
      resultContent: newResultContent
    };

    const savedHistory = JSON.parse(localStorage.getItem("calculationHistory")) || [];
    const updatedHistory = selectedItem
      ? [newHistoryItem, ...savedHistory.filter(item => item.id !== selectedItem.id)]
      : [newHistoryItem, ...savedHistory];

    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
    updateHistory(updatedHistory);
  };

  const clearHistory = () => {
    localStorage.removeItem("calculationHistory");
    updateHistory([]);
    toast.success("History cleared successfully!");
  };

  const handleReset = (clearResult = true) => {
    setSelectedItem(null);
    setTotalAmount(0);
    setDiscount(0);
    setDiscountType("percent");
    setDelivery(0);
    setTax(0);

    if (clearResult) {
      setFinalAmount(null);
      setResultContent('');
    }
  };

  return (
    <div className="main-container">
      <h2>Share Calculator</h2>
      <div className="input-group">
        <div>
          <label>مبلغ کل</label>
          <input
            type="number"
            placeholder="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
          />
        </div>
        <div>
          <label>تخفیف</label>
          <input
            type="number"
            placeholder="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div>
          <label>نوع تخفیف</label>
          <select
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
          >
            <option value="percent">درصدی</option>
            <option value="amount">مبلغ ثابت</option>
          </select>
        </div>
        <div>
          <label>هزینه ارسال</label>
          <input
            type="number"
            placeholder="delivery"
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
          />
        </div>
        <div>
          <label>مالیات</label>
          <input
            type="number"
            placeholder="tax"
            value={tax}
            min="1"
            max="100"
            onChange={(e) => setTax(Math.min(100, Math.max(1, e.target.value)))}
          />
        </div>
      </div>

      <button onClick={handleCalculate}>محاسبه</button>
      <button onClick={() => handleReset()}>ریست</button>
      <button onClick={clearHistory}>پاک کردن تاریخچه</button>

      {finalAmount !== null && resultContent && (
        <p className="final-amount">
          Result: {resultContent}
        </p>
      )}
    </div>
  );
};

export default ShareCalculator;
