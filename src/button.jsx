import React from "react";

function Button(props) {
  return (
    <button
      className="button-component"
      disabled={props.disabled}
      onClick={props.buttonClick}
    >
      {props.children}
    </button>
  );
}
export default Button;
