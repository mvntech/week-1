import React, { useState } from "react";
import TaskList from "./TaskList";
import { Plus } from "lucide-react";

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  // tasks stats
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="task-tracker-container">
      <h1>REACT TASK TRACKER</h1>

      <div className="task-tracker-buttons">
        <button
          onClick={() => setFilter("all")}
          className={`retro-button filter-button ${
            filter === "all" ? "active" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`retro-button filter-button ${
            filter === "active" ? "active" : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`retro-button filter-button ${
            filter === "completed" ? "active" : ""
          }`}
        >
          Completed
        </button>
      </div>

      <div className="add-task-wrapper">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="ENTER NEW MISSION OBJECTIVE"
          className="add-task-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button onClick={addTask} className="retro-button add-task-button">
          <Plus size={16} /> ADD IT
        </button>
      </div>

      <p className="task-stats">
        <span style={{ fontWeight: "bold" }}>STATS_REPORT:</span> Total:{" "}
        {totalTasks} | Completed: {completedTasks} | Pending: {pendingTasks}
      </p>

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleComplete}
      />
    </div>
  );
};

export default TaskTracker;
