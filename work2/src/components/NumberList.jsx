import React from "react";

const NumberList = (props) => {
  return (
    <ul>
      {props.value.map((e, idx) => (
        <li key={idx}>{e}</li>
      ))}
    </ul>
  );
};

export default NumberList;
