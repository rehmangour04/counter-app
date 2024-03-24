/** @format */
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const incrementButton = () => {
    setCount(count + 1);
  };
  const decrementButton = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button onClick={incrementButton}>Increment</button>
      <button onClick={decrementButton}>Decrement</button>
    </div>
  );
}
