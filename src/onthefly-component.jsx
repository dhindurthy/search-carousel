import React from "react";
import Button from "./button.jsx";
import Input from "./input.jsx";

function Onthefly(props) {
  return (
    <section>
      {props.component === "button" && <Button>Something</Button>}
      {props.component === "input" && <Input />}
    </section>
  );
}
export default Onthefly;
