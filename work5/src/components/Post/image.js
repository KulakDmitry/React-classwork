import React from "react";
import PropTypes from "prop-types";

function Image({ src, caption }) {
  return (
    <img className="w-full object-cover max-h-screen" src={src} alt={caption} />
  );
}

Image.defaulProps = {
  caption: "No caption",
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
};
export default Image;
