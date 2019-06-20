import React from "react";
import "./styles.scss";
import Button from "./button.jsx";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      activeKey: 2
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  buttonClick = type => {
    // console.log(type);
    let activeKey = this.state.activeKey;
    // console.log(activeKey);
    // console.log(this.state.articles.length);
    let length = this.state.articles.length;
    this.setState({ nodisplay: "" });
    if (type === "next" && activeKey < length - 1) {
      activeKey = activeKey + 1;
    } else if (type === "prev" && activeKey > 0) {
      activeKey = activeKey - 1;
    } else {
      this.setState({ nodisplay: "no more to display" });
    }
    this.setState({ activeKey: activeKey });
  };
  onInputChange = e => {
    let articles = this.state.articles;
    for (var i = 0; i < articles.length; i++) {
      if (e.target.value === articles[i]) {
        this.setState({ activeKey: i });
      }
    }
  };
  componentDidMount() {
    this.setState({
      articles: ["abczzz", "defzzz", "ghizzz", "jklzzz", "defxxx"]
    });
  }

  render() {
    return (
      <section className="main">
        <section>
          <input list="something" onChange={this.onInputChange} />
          <datalist id="something">
            {this.state.articles.map((article, index) => (
              <option key={index}>{article}</option>
            ))}
          </datalist>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section>
          <ul>
            {this.state.articles.map(
              (article, index) =>
                this.state.activeKey === index && <li key={index}>{article}</li>
            )}
            <span>
              {this.state.activeKey + 1} of {this.state.articles.length}
            </span>
          </ul>
          <Button buttonClick={this.buttonClick.bind(this, "prev")}>
            Previous
          </Button>
          <Button buttonClick={this.buttonClick.bind(this, "next")}>
            Next
          </Button>
          <br />
          {this.state.nodisplay}
        </section>
      </section>
    );
  }
}

export default Carousel;
