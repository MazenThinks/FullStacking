import React from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function getTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  setInterval(getTime, 1000);

  return (
    <>
      <h1 className="title">{time}</h1>
      <button className="Button" onClick={getTime}>
        GET TIME
      </button>
    </>
  );
}

export default App;
