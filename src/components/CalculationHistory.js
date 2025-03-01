import React from "react";
import { useSelectedItem } from "../context/SelectedItemContext";
import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableHistoryItem from "../components/SortableHistoryItem";

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

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={history.map(item => item.id)} strategy={verticalListSortingStrategy}>
        <div className="main-container">
          <h2>History</h2>
          <ul className="history-container">
            {history.map((item, index) => (
              <SortableHistoryItem
                key={item.id}
                item={item}
                index={index}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default CalculationHistory;
