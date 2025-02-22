import React from "react";
import "../assets/CalculatorStyles.css";

const CalculationHistory = ({ history, updateHistory }) => {
  const handleDelete = (id) => {
    const updatedHistory = history.filter((item) => item.id !== id);
    updateHistory(updatedHistory);
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
  };

  const handleEdit = (item) => {
    updateHistory(item);
  };

  return (
    <div className="main-container">
      <h2>History</h2>
      <ul className="history-container">
        {history.map((item, index) => (
          <li key={item.id} className="history-item">
            <div className="history-actions">
              <strong>{index}- {item.resultContent}</strong>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculationHistory;