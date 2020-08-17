import PropTypes from "prop-types";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./ProtectedRoute.scss";
import authService from "../../services/authService";

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) =>
          authService.isAuth() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
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
