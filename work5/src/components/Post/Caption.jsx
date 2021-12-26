import React from "react";

function Caption({ username, caption }) {
  return (
    <div className="p-4 pt-0">
      <span className="font-bold mr-1">{username}</span>
      <span>{caption}</span>
    </div>
  );
}

export default Caption;
