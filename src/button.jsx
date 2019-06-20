import React from "react";
import ReactDOM from "react-dom";

function Button(props) {
  return (
    <button className="button-component" onClick={props.buttonClick}>
      {props.children}
    </button>
  );
}
export default Button;
