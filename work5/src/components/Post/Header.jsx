import React from "react";
import PropTypes from "prop-types";

function Header({ username, userpics }) {
  return (
    <div className="p-4">
      <a href="#" className="flex items-center">
        <img
          src={userpics}
          alt={username}
          className="w-8 rounded-full h-8 object-cover mr-3"
        />
        <p className="font-bold">{username}</p>
      </a>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  userpics: PropTypes.string.isRequired,
};

export default Header;
