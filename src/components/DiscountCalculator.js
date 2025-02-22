import { useState } from "react";
import "../assets/CalculatorStyles.css";

const DiscountCalculator = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountPercent, setDiscountPercent] = useState(null);

  const handleCalculate = () => {
    if (totalAmount && discount && discount > 0) {
      setDiscountPercent((discount * 100 / totalAmount).toFixed(1));
    } else {
      setDiscountPercent("null");
    }
  };
  return (
    <div className="box-container">
      <h2>Discount Calculator</h2>
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
      </div>
      <button onClick={handleCalculate}>محاسبه</button>

      {discountPercent !== null && (
        <p className="final-amount">Result = discount * 100 / totalAmount  = {discountPercent}%</p>
      )}
    </div>
  );
};

export default DiscountCalculator;