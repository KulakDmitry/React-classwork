import React from "react";
import Button from "./Button";

const Message = ({ header, text }) => {
  function alertMessage(value) {
    alert(value);
  }
  return (
    <div>
      <h1 onMouseEnter={() => alertMessage(header)}>{header}</h1>
      <p onMouseEnter={() => alertMessage(text)}>{text}</p>
      <Button onClick={() => alertMessage("Click")}>Click</Button>
    </div>
  );
};

export default Message;
