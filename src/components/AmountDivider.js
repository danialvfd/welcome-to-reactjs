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
        <div>
          <label>مبلغ کل</label>
          <input
            type="number"
            placeholder="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)} />
        </div>
        <div>
          <label>تعداد نفرات</label>
          <input
            type="number"
            placeholder="personNum"
            value={personNumber}
            onChange={(e) => setPersonNum(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleCalculate}>محاسبه</button>

      {amountPerPerson !== null && (
        <p className="final-amount">
          Result = totalAmount / personNumber = {amountPerPerson} toman
        </p>
      )}
    </div>
  );
};

export default AmountDivider;