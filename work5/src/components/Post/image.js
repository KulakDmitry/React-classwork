import React from "react";

function Image({ src, caption }) {
  return (
    <img className="w-full object-cover max-h-screen" src={src} alt={caption} />
  );
}

export default Image;
