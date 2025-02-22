import { useState } from "react";
import "../assets/CalculatorStyles.css";

const ShareCalculator = ({ updateHistory }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("percent");
  const [delivery, setDelivery] = useState(0);
  const [tax, setTax] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [resultContent, setResultContent] = useState("");

  const handleCalculate = () => {
    let amount = parseFloat(totalAmount) || 0;
    let deliveryCost = parseFloat(delivery) || 0;
    let taxValue = parseFloat(tax) || 0;

    if (discountType === "percent") {
      setDiscountAmount(amount * (discountAmount / 100));
    }

    if (discountType === "amount") {
      setDiscountAmount(parseFloat(discount) || 0);
    }

    let finalPrice = (amount - discountAmount) + deliveryCost + (amount * (taxValue / 100));
    const finalAmountValue = finalPrice.toFixed(2);

    setFinalAmount(finalAmountValue);
    setResultContent(`${totalAmount} - ${discountAmount} + ${delivery} + (${totalAmount} * ${tax} / 100) = ${finalAmount}`);

    const newHistoryItem = {
      totalAmount,
      discount,
      discountType,
      delivery,
      tax,
      finalAmount: finalAmountValue,
      resultContent
    };

    const savedHistory = JSON.parse(localStorage.getItem("calculationHistory")) || [];
    const updatedHistory = [newHistoryItem, ...savedHistory];
    
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));

    updateHistory(updatedHistory);

    setTotalAmount(0);
    setDiscount(0);
    setDiscountType("percent");
    setDelivery(0);
    setTax(0);
    setDiscountAmount(0);
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
            <option value="percentage">درصدی</option>
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
