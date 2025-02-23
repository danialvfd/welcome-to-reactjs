import { useState, useEffect } from "react";
import "../assets/CalculatorStyles.css";

const ShareCalculator = ({ updateHistory, selectedItem }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("percent");
  const [delivery, setDelivery] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalAmount, setFinalAmount] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
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
    let calculatedDiscount = parseFloat(discountAmount) || 0;

    if (discountType === "percent") {
      calculatedDiscount = amount * (parseFloat(discount) / 100);
    } else if (discountType === "amount") {
      calculatedDiscount = parseFloat(discount) || 0;
    }
    setDiscountAmount(calculatedDiscount);

    let finalPrice = (amount - calculatedDiscount) + deliveryCost + (amount * (taxValue / 100));
    const finalAmountValue = finalPrice.toFixed(2);
    setFinalAmount(finalAmountValue);

    setResultContent(`${amount} - ${calculatedDiscount.toFixed(2)} + ${deliveryCost} + (${amount} * ${taxValue} / 100) = ${finalAmountValue}`);

    // todo if selectedItem is not null then call hook remove(selectedItem.id) 

    const newHistoryItem = {
      //id: 0, todo
      totalAmount,
      discount,
      discountType,
      delivery,
      tax,
      finalAmount: finalAmountValue,
      resultContent: resultContent
    };

    const savedHistory = JSON.parse(localStorage.getItem("calculationHistory")) || [];
    // todo update submitted ids in savedHistory. add each item + 1.
    const updatedHistory = [newHistoryItem, ...savedHistory];
    
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));


    updateHistory(updatedHistory);
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
            onChange={(e) => setTax(e.target.value)} />
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
