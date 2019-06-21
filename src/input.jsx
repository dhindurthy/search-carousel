import React from "react";

function Input(props) {
  return <input list={props.list} onChange={props.onInputChange} />;
}
export default Input;
