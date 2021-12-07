import React, { Component } from "react";

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.color === "yellow") {
      alert("YELLOW");
      return false;
    }
    return true;
  }

  render() {
    const { color } = this.props;
    return (
      <button style={{ cursor: "default", backgroundColor: color }}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
