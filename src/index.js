import React from "react";
import ReactDOM from "react-dom";
import CarouselDemo from "./carouseldemo.jsx";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <CarouselDemo />
      <p>Note: This is NOT accessible and the LEAST CSS applied</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
