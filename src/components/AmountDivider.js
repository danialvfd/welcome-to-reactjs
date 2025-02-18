import { useState } from "react";
import "../assets/CalculatorStyles.css";

const AmountDivider = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [personNumber, setPersonNum] = useState("");
  const [amountPerPerson, setAmountPerPerson] = useState(null);

  const handleCalculate = () => {
    if (totalAmount && personNumber && personNumber > 0) {
      setAmountPerPerson((totalAmount / personNumber).toFixed(2));
    } else {
      setAmountPerPerson("null");
    }
  };
  return (
    <div className="box-container">
      <h2>Amount Divider</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="مبلغ کل"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="تعداد نفرات"
          value={personNumber}
          onChange={(e) => setPersonNum(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>محاسبه</button>

      {amountPerPerson !== null && (
        <p className="final-amount">
          مبلغ پرداختی هر نفر: {amountPerPerson} تومان
        </p>
      )}
    </div>
  );
};

export default AmountDivider;