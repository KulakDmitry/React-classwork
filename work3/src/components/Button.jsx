import React from "react";

const Button = ({ children, color, changeColor }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={changeColor}>
      {children}
    </button>
  );
};

export default Button;
