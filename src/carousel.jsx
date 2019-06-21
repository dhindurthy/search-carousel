import React from "react";
import Button from "./button.jsx";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      isPrevDisabled: true,
      isNextDisabled: false
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick = type => {
    let activeKey = this.state.activeKey;
    let length = this.props.todos.length;
    if (type === "next" && activeKey < length - 1) {
      this.setState({ isPrevDisabled: false });
      activeKey = activeKey + 1;
    } else if (type === "prev" && activeKey > 0) {
      this.setState({ isNextDisabled: false });
      activeKey = activeKey - 1;
    }
    if (activeKey === length - 1 || activeKey === 0) {
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
                <li key={index}>{this.props.panelContent(i, index)}</li>
              )
          )}
        </ul>
        <div className="buttons">
          <Button
            disabled={this.state.isPrevDisabled && this.props.prevDisabled}
            buttonClick={this.buttonClick.bind(this, "prev")}
          >
            Previous
          </Button>
          {this.props.textBetweenButtons(this.state.activeKey)}

          <Button
            disabled={this.state.isNextDisabled && this.props.nextDisabled}
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

// Set default props
Carousel.defaultProps = {
  nextDisabled: true,
  prevDisabled: true
};
