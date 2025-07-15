import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <h1 className="num">{count}</h1>
      <button className="Button" onClick={decrease}>
        -
      </button>
      <button className="Button" onClick={increase}>
        +
      </button>
    </>
  );
}

export default App;
