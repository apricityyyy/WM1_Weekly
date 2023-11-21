import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function changeColor() {
  let d = new Date();
  let hour = d.getHours();
  console.log(hour);

  if (hour >= 5 && hour <= 12) {
    return "blue";
  } else if (hour > 12 && hour < 18) {
    return "red";
  } else {
    return "green";
  }
}

root.render(
  <div style={{backgroundColor: changeColor()}}>
    <h2>Hello there</h2>
    <p>Welcome to our session</p>
  </div>
);