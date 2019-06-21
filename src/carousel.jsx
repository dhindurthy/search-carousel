import React from "react";
import Onthefly from "./onthefly-component";
import Button from "./button.jsx";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      activeKey: 0,
      isPrevDisabled: false
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick = type => {
    // console.log(type);
    let activeKey = this.state.activeKey;
    // console.log(activeKey);
    // console.log(this.state.articles.length);
    let length = this.props.todos.length;
    this.setState({ isPrevDisabled: false });
    this.setState({ isNextDisabled: false });
    if (type === "next" && activeKey < length - 1) {
      activeKey = activeKey + 1;
    } else if (type === "prev" && activeKey > 0) {
      activeKey = activeKey - 1;
    } else if (activeKey === length - 1 || activeKey === 0) {
      if (type === "prev") {
        this.setState({ isPrevDisabled: true });
      }
      if (type === "next") {
        this.setState({ isNextDisabled: true });
      }
    }
    this.setState({ activeKey: activeKey });
  };

  render(props) {
    return (
      <section className="carousel">
        <ul id={this.props.id}>
          {this.props.todos.map(
            (i, index) =>
              this.state.activeKey === index && (
                <li key={index}>{this.props.putSomethingIn(i, index)}</li>
              )
          )}
        </ul>
        <div className="buttons">
          <Button
            disabled={this.state.isPrevDisabled}
            buttonClick={this.buttonClick.bind(this, "prev")}
          >
            Previous
          </Button>
          <span>
            {this.state.activeKey + 1} of {this.props.todos.length}
          </span>
          <Button
            disabled={this.state.isNextDisabled}
            buttonClick={this.buttonClick.bind(this, "next")}
          >
            Next
          </Button>
        </div>
      </section>
    );
  }
}
export default Carousel;
