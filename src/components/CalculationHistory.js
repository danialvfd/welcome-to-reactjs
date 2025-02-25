import React from "react";
import { useSelectedItem } from "../context/SelectedItemContext"; 
import { DndContext } from '@dnd-kit/core';
import { useSortable, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const CalculationHistory = ({ history, updateHistory }) => {
  const { setSelectedItem } = useSelectedItem(); 

  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    updateHistory(updatedHistory);
    localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = history.findIndex(item => item.id === active.id);
      const newIndex = history.findIndex(item => item.id === over.id);

      const updatedHistory = [...history];
      const [movedItem] = updatedHistory.splice(oldIndex, 1);
      updatedHistory.splice(newIndex, 0, movedItem);

      updateHistory(updatedHistory);
      localStorage.setItem("calculationHistory", JSON.stringify(updatedHistory));
    }
  };

  const SortableItem = ({ item, index }) => {
    const { setNodeRef } = useSortable({ id: item.id });

    return (
      <li ref={setNodeRef} className="history-item">
        <div className="drag-handle">⬍</div>
        <div className="history-actions">
          <strong>{index + 1}- {item.resultContent}</strong>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Remove</button>
        </div>
      </li>
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={history.map(item => item.id)} strategy={verticalListSortingStrategy}>
        <div className="main-container">
          <h2>History</h2>
          <ul className="history-container">
            {history.map((item, index) => (
              <SortableItem key={item.id} item={item} index={index} />
            ))}
          </ul>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default CalculationHistory;
