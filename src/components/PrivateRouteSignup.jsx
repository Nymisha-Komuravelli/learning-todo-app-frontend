import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";

/**
 *
 * Private Route to make the application to be accessible only when the user is authorized.
 * User navigates to the TodoApp component when  authorized.
 */
const PrivateRouteSignup = ({ component: Component, ...rest }) => {
  const [authorized, handleAuth] = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedin] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  return (
    <Route
      {...rest}
      render={(props) => {
        return authorized && isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} {...rest} />
        );
      }}
    />
  );
};

export default PrivateRouteSignup;
