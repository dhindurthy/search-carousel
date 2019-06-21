import React from "react";
import "./styles.scss";
import Button from "./button.jsx";
import Input from "./input.jsx";
import Carousel from "./carousel.jsx";

class CarouselDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      activeKey: 2
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = e => {
    let articles = this.state.articles;
    for (var i = 0; i < articles.length; i++) {
      if (e.target.value === articles[i].name) {
        this.setState({ activeKey: i });
      }
    }
  };
  componentDidMount() {
    this.setState({
      articles: [
        { name: "donkey" },
        { name: "buffalo" },
        { name: "pig" },
        { name: "cow" },
        { name: "sheep" }
      ]
    });
  }

  render() {
    return (
      <section className="main">
        <section>
          <Input list="something" onChange={this.onInputChange} />
          <datalist id="something">
            {this.state.articles.map((article, index) => (
              <option key={index}>{article.name}</option>
            ))}
          </datalist>
        </section>
        <Carousel
          todos={this.state.articles}
          textBetweenButtons={activeKey => (
            <span>
              {activeKey + 1} of {this.state.articles.length}
            </span>
          )}
          panelContent={(i, index) =>
            (index === 1 && (
              <p>
                <h2>Custom Template</h2>
                <Input />
                <br />
                {i.name}
              </p>
            )) ||
            (index === 3 && (
              <p>
                <h2>Custom Template</h2>
                <Button>Sample button</Button>
                <br />
                {i.name}
              </p>
            )) || (
              <section>
                <h3>Form or Component or any UI customizable by user</h3>
                <img src="https://via.placeholder.com/150" alt="somethign" />
                <h4>{i.name}</h4>
              </section>
            )
          }
        />
      </section>
    );
  }
}

export default CarouselDemo;
