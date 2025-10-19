import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskTracker from './components/TaskTracker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskTracker />
  </StrictMode>,
)
