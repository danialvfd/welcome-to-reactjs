import React, { useState } from "react";
import {  DndContext,  closestCenter} from "@dnd-kit/core";
import {  SortableContext,  useSortable, verticalListSortingStrategy} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SimpleSortableList = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      const newItems = [...items];
      newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, active.id);
      setItems(newItems);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px",
    margin: "5px 0",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ccc",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

export default SimpleSortableList;
