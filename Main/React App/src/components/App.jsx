import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.jsx";

function App() {
  return (
    <>
      <Card
        name="hollow1"
        img="../../assets/hollow.jpg"
        phone="+123 456 789"
        email="b@hollow1.com"
      />

      <Card
        name="hollow2"
        img="../../assets/hollow2.jpg"
        phone="+123 456 789"
        email="b@hollow2.com"
      />
    </>
  );
}

export default App;
