import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* calling the "Counter" component and passing the initial prop */}
    <Counter initial={0} />
  </StrictMode>,
)
