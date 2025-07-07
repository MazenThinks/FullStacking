import React from "react";
import ReactDOM from "react-dom/";

const color = {
  color: "black",
};

if (new Date().getHours() < 12) {
  var Greeting = "Good Morning!";
  color.color = "red";
} else if (new Date().getHours() < 18) {
  var Greeting = "Good Afternoon!";
  color.color = "green";
} else {
  var Greeting = "Good Evening!";
  color.color = "blue";
}

const date = new Date();
console.log(`Current date and time:`);

ReactDOM.render(
  <>
    <h1 style={color}>{Greeting}</h1>
    <div></div>
  </>,
  document.getElementById("root")
);
