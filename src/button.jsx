import React from "react";

function Button(props) {
  return (
    <button className="button-component" onClick={props.buttonClick}>
      {props.children}
    </button>
  );
}
export default Button;
