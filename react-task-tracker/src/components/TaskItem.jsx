import React from "react";
import { X } from "lucide-react";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`task-item-li ${task.completed ? "completed" : ""}`}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          cursor: "pointer",
        }}
        onClick={() => onToggle(task.id)}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span style={{ flexGrow: 1 }}>{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-task-button"
        aria-label="Delete Task"
      >
        <X size={16} />
      </button>
    </li>
  );
};

export default TaskItem;
