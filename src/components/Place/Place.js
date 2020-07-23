import React from "react";
import PropTypes from "prop-types";
import "./Place.scss";

const Place = ({ name }) => {
  return (
    <div className="place">
      <button type="button" className="place__link">
        {name}
      </button>
    </div>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Place;
