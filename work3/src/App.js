import "./App.css";
import React, { Component } from "react";
import Button from "../../work3/src/components/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "grey",
    };
  }

  array = ["red", "green", "blue", "pink", "yellow", "grey"];

  randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  changeColor = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        color: this.array[this.randomNumber(this.array.length)],
      });
    }, 1000);
  };

  render() {
    const { color } = this.state;
    return (
      <div className="App">
        <Button
          changeColor={this.changeColor}
          color={color}
          {...(color === "yellow" && alert("YELLOW"))}
        >
          Click to start change color
        </Button>
      </div>
    );
  }
}

export default App;
