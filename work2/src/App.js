import "./App.css";
import { Component } from "react";
import NumberList from "./components/NumberList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.randomNumberList(),
    };
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  randomNumberList() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(this.randomNumber(1000));
    }
    return arr;
  }
  addRandomNumber = () => {
    const { value } = this.state;

    this.setState({
      value: [...value, this.randomNumber(1000)],
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        {value.length}
        <button onClick={this.addRandomNumber}>add</button>
        <NumberList value={value} />
      </div>
    );
  }
}

export default App;
