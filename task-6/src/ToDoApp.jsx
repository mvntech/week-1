import React from 'react'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const ToDoApp = () => {
  // declaring states to create, add and delete tasks
  const [addTask, setAddTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // adding a task
  const newTask = () => {
    if(addTask.trim() === "") return;
      const task = { id: Date.now(), text: addTask };
      setTasks([...tasks, task]);
      setAddTask("");
  }

  // deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  return (
    <div className='ToDoApp'>
      <h1>To-do List</h1>
      
      <div className='input-group'>
        <input 
          type="text" 
          value={addTask} 
          onChange={(e) => setAddTask(e.target.value)} 
          placeholder='Enter a new task' 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              newTask();
            }
          }}
        />
        <button onClick={newTask} className='add-button'>
          <Plus size={20} />
        </button>
      </div>
      
      <div className='task-container'>
        {/* "conditionally render" content based on whether tasks exist */}
        {tasks.length === 0 ? (
          <p>No tasks yet! Add now?</p>
        ) : (
          <ul>
            {/* render the "list" of tasks using the .map() method */}
            {tasks.map(task => (
              // each list item must have a unique "key" for react’s reconciliation
              <li key={task.id}>
                <span>{task.text}</span>
                <button onClick={() => deleteTask(task.id)}>
                  <X size={16} />
                </button> 
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ToDoApp