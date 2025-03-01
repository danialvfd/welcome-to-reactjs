import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableHistoryItem = ({ item, index, onEdit, onDelete }) => {
    const { setNodeRef, attributes, listeners, transform, transition } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <li ref={setNodeRef} style={style} className="history-item">
            <div className="drag-handle" {...attributes} {...listeners}>
                <i className="fas fa-arrows-alt"></i>
            </div>
            <div>
                <strong>{index + 1}- {item.resultContent}</strong>
            </div>
            <div className="history-actions">
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(index)}>Remove</button>
            </div>
        </li>
    );
};

export default SortableHistoryItem;
