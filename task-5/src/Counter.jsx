import React, { useState } from "react";

// Counter is a react component
const Counter = ({
  initial /* passing a prop from the parent element to the children element */ }) => {
  // using state variable "count" and setCount() method within useState() hook
  const [count, setCount] = useState(initial);

  // event handlers for event triggers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div>
      <h1>Counter: <span style={{color: '#535bf2'}}>{count}</span></h1>
      {/* event handling */}
      <div className="counter-buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
