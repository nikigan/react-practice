import PropTypes from "prop-types";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./ProtectedRoute.scss";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, ...rest }) => {
  const { userToken } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return userToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};

ProtectedRoute.defaultProps = {
  children: null,
};
