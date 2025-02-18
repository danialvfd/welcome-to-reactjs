import { useState, useEffect } from "react";
import "../assets/CalculatorStyles.css";

const ShareCalculator = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = useState("percent");
  const [delivery, setDelivery] = useState("");
  const [tax, setTax] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("shareCalculatorData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setTotalAmount(parsedData.totalAmount);
      setDiscount(parsedData.discount);
      setDiscountType(parsedData.discountType);
      setDelivery(parsedData.delivery);
      setTax(parsedData.tax);
      setFinalAmount(parsedData.finalAmount);
    }
  }, []);

  const handleCalculate = () => {
    let amount = parseFloat(totalAmount) || 0;
    let discountAmount = parseFloat(discount) || 0;
    let deliveryCost = parseFloat(delivery) || 0;
    let taxValue = parseFloat(tax) || 0;

    if (discountType === "percent") {
      discountAmount = (amount * (discountAmount / 100));
    }

    if (discountType === "amount") {
      discountAmount = parseFloat(discount) || 0;
    }

    let finalPrice = (amount - discountAmount) + deliveryCost + (amount * (taxValue / 100));
    const finalAmountValue = finalPrice.toFixed(2);

    setFinalAmount(finalAmountValue);

    const dataToSave = {
      totalAmount,
      discount,
      discountType,
      delivery,
      tax,
      finalAmount: finalAmountValue
    };
    localStorage.setItem("shareCalculatorData", JSON.stringify(dataToSave));
  };

  return (
    <div className="main-container">
      <h2>Share Calculator</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="مبلغ کل"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="تخفیف"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <select
          value={discountType}
          onChange={(e) => setDiscountType(e.target.value)}
        >
          <option value="percentage">درصد</option>
          <option value="amount">مقدار</option>
        </select>
        <input
          type="number"
          placeholder="هزینه ارسال"
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
        />
        <input
          type="number"
          placeholder="مالیات"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>محاسبه</button>

      {finalAmount !== null && (
        <p className="final-amount">
          مبلغ نهایی: {finalAmount} تومان
        </p>
      )}
    </div>
  );
};
export default ShareCalculator;