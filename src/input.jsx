import React from "react";

function Input(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} list={props.list} onChange={props.onInputChange} />
    </React.Fragment>
  );
}
export default Input;
