import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../assets/CalculatorStyles.css";

const CalculationHistory = ({ history, updateHistory }) => {

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(history);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateHistory(items);
    localStorage.setItem("calculationHistory", JSON.stringify(items));
  };

  const handleDelete = (id) => {
    const updatedHistory = history.filter(item => item.id !== id);
    updateHistory(updatedHistory);
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
  };

  const handleEdit = (item) => {
    updateHistory(item);
  };

  return (
    <div className="main-container">
      <h2>History</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="history">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="history-container">
              {history.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="history-item">
                      <div className="history-actions">
                        <strong>Result: {item.finalAmount}</strong>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Remove</button>
                        <button onClick={() => handleDelete(item.id)}>Drag</button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CalculationHistory;
