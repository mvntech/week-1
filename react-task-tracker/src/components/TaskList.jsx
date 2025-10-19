import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <p className="no-tasks-message">NO TASKS FOUND! GET TO WORK!</p>
      ) : (
        <ul className="task-list-ul">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
