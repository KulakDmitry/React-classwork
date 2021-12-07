import "./App.css";
import React, { Component } from "react";
import Button from "../../work3/src/components/Button";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "pink",
    };
  }

  array = ["red", "green", "blue", "pink", "yellow", "orange"];

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

  stop = () => {
    clearInterval(this.intervalId);
  };

  start = () => {
    this.changeColor();
  };

  render() {
    const { color } = this.state;
    return (
      <div className="App">
        <button onClick={this.start}>start</button>
        <Button color={color} />
        <button onClick={this.stop}>stop</button>
      </div>
    );
  }
}

export default App;
