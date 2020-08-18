import React from "react";
import "./LoginRoute.scss";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const LoginRoute = ({ children, ...rest }) => {
  const { userToken } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const { from } = location.state || { from: { pathname: "/" } };
        return !userToken ? children : <Redirect to={from} />;
      }}
    />
  );
};

export default LoginRoute;

LoginRoute.propTypes = {
  children: PropTypes.element,
};

LoginRoute.defaultProps = {
  children: null,
};
