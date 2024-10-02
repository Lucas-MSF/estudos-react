import { useState } from "react";

const TestState = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>Value: {number}</p>
      <button onClick={() => setNumber(number+1)}>Click to add 1 at value</button>
    </div>
  )
}

export default TestState
