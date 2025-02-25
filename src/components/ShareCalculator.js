import { useState, useEffect } from "react";
import { useSelectedItem } from "../context/SelectedItemContext";

const ShareCalculator = ({ updateHistory, selectedItem }) => {
  const { setSelectedItem } = useSelectedItem();
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("percent");
  const [delivery, setDelivery] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalAmount, setFinalAmount] = useState(null);
  const [resultContent, setResultContent] = useState();

  useEffect(() => {
    if (selectedItem) {
      setTotalAmount(selectedItem.totalAmount);
      setDiscount(selectedItem.discount);
      setDiscountType(selectedItem.discountType);
      setDelivery(selectedItem.delivery);
      setTax(selectedItem.tax);
      setFinalAmount(selectedItem.finalAmount);
    }
  }, [selectedItem]);

  const handleCalculate = () => {
    let amount = parseFloat(totalAmount) || 0;
    let deliveryCost = parseFloat(delivery) || 0;
    let taxValue = parseFloat(tax) || 0;
    let calculatedDiscount = 0;

    if (discountType === "percent") {
      calculatedDiscount = amount * (parseFloat(discount) / 100);
    } else if (discountType === "amount") {
      calculatedDiscount = parseFloat(discount) || 0;
    }

    // todo if percent : input value < 0 or > 100 then show error message tand cancel proggress 
    // todo if amnt: input value < 0 then show error message and cancel proggress 

    let finalPrice = (amount - calculatedDiscount) + deliveryCost + (amount * (taxValue / 100));
    const finalAmountValue = finalPrice.toFixed(2);
    const newResultContent = `${amount} - ${calculatedDiscount.toFixed(2)} + ${deliveryCost} + (${amount} * ${taxValue} / 100) = ${finalAmountValue}`;

    setResultContent(newResultContent);

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
    let updatedHistory;

    if (selectedItem) {
      updatedHistory = savedHistory.filter(item => item.id !== selectedItem.id);
      updatedHistory = [newHistoryItem, ...updatedHistory];
    } else {
      updatedHistory = [newHistoryItem, ...savedHistory];
    }

    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));

    updateHistory(updatedHistory);

    setSelectedItem(null);
    setTotalAmount(0);
    setDiscount(0);
    setDiscountType("percent");
    setDelivery(0);
    setTax(0);
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
            onChange={(e) => setTotalAmount(e.target.value)} />
        </div>
        <div>
          <label>تخفیف</label>
          <input
            type="number"
            placeholder="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)} />
        </div>
        <div>
          <label>نوع تخفیف</label>
          <select
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}>
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
            onChange={(e) => setDelivery(e.target.value)} />
        </div>
        <div>
          <label>مالیات</label>
          <input
            type="number"
            placeholder="tax"
            value={tax}
            min="1"
            max="100"
            onChange={(e) => setTax(Math.min(100, Math.max(1, e.target.value)))} // مقدار tax باید بین 1 و 100 باشد
          />
        </div>
      </div>

      <button onClick={handleCalculate}>محاسبه</button>

      {finalAmount !== null && (
        <p className="final-amount">
          Result: {resultContent}
        </p>
      )}
    </div>
  );
};

export default ShareCalculator;
