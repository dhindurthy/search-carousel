import React from "react";
import "./styles.scss";
import Button from "./button.jsx";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick(e) {
    // this.setState({ value: e.target.value });
  }
  render() {
    return (
      <section>
        <article />
        <Button>Previous</Button>
        <Button>Next</Button>
      </section>
    );
  }
}

export default Carousel;
