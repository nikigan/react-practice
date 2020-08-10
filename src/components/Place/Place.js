import React from "react";
import PropTypes from "prop-types";
import "./Place.scss";
import { Link } from "react-router-dom";

const Place = ({ name, id }) => {
  return (
    <div className="place">
      <Link to={`places/${id}`} type="button" className="place__link">
        {name}
      </Link>
    </div>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Place;
