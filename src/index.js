import React from "react";
import ReactDOM from "react-dom";
import CarouselDemo from "./carouseldemo.jsx";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <CarouselDemo />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
