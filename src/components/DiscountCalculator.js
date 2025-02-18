import { useState } from "react";
import "../assets/CalculatorStyles.css";

const DiscountCalculator = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountPercent, setDiscountPercent] = useState(null);

  const handleCalculate = () => {
    if (totalAmount && discount && discount > 0) {
      setDiscountPercent((discount * 100 / totalAmount).toFixed(2));
    } else {
      setDiscountPercent("null");
    }
  };
  return (
    <div className="box-container">
      <h2>Discount Calculator</h2>
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
      </div>
      <button onClick={handleCalculate}>محاسبه</button>

      {discountPercent !== null && (
        <p className="final-amount">درصد میزان تخفیف: %{discountPercent}</p>
      )}
    </div>
  );
};

export default DiscountCalculator;