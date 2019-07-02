import React from "react";
import "./styles.scss";
import Button from "./button.jsx";
import Input from "./input.jsx";
import Carousel from "./carousel.jsx";
import DataList from "./datalist.jsx";

class CarouselDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.setState({
      articles: [
        { name: "donkey" },
        { name: "buffalo" },
        { name: "pig" },
        { name: "cow" },
        { name: "sheep" },
        { name: "monkey" }
      ]
    });
  }

  render() {
    return (
      <section className="main">
        <Carousel
          leftButton="Previousa"
          rightButton="Next"
          todos={this.state.articles}
          textBetweenButtons={activeKey => (
            <span>
              {activeKey + 1} de {this.state.articles.length}
            </span>
          )}
          panelContent={(i, index) =>
            (index === 1 && (
              <section style={{ backgroundColor: "violet" }}>
                <h2>Custom Template</h2>
                <Input label="Something here" />
                <p>{i.name}</p>
              </section>
            )) ||
            (index === 4 && (
              <section style={{ backgroundColor: "orange" }}>
                <h2>Custom Template</h2>
                <img src="https://via.placeholder.com/150" alt="somethign" />
                <br />
                <Button>Sample button</Button>
                <p>{i.name}</p>
              </section>
            )) ||
            (index === 3 && (
              <section style={{ backgroundColor: "indigo", color: "white" }}>
                <Input
                  label="Typeahead Datalist"
                  id="animals"
                  list="something"
                  onChange={this.onInputChange}
                />
                <DataList id="something" articles={this.state.articles} />
              </section>
            )) || (
              <article style={{ backgroundColor: "yellow" }}>
                <h3>Form or Component or any UI customizable</h3>
                <h4>{i.name}</h4>
              </article>
            )
          }
        />
      </section>
    );
  }
}

export default CarouselDemo;
