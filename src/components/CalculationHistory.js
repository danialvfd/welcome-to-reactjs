import React from "react";
import "../assets/CalculatorStyles.css";

const CalculationHistory = ({ history, updateHistory }) => {
  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    updateHistory(updatedHistory);
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
  };
  const handleEdit = (item) => {
    // call context to update selectedItem
  };

  return (
    <div className="main-container">
      <h2>History</h2>
      <ul className="history-container">
        {history.map((item, index) => (
          <li key={index} className="history-item">
            <div className="history-actions">
              <strong>{index + 1}- {item.resultContent}</strong>
              <button>Drag</button>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculationHistory;
