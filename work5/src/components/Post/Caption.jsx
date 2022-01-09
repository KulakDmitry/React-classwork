import React from "react";
import PropTypes from "prop-types";

function Caption({ username, caption }) {
  return (
    <div className="p-4 pt-0">
      <span className="font-bold mr-1">{username}</span>
      <span>{caption}</span>
    </div>
  );
}

Caption.defaultProps = {
  caption: "",
};

Caption.propTypes = {
  username: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

export default Caption;
