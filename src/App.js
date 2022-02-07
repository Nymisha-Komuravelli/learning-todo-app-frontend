import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "./App.css";
import { Row, Col, Menu, Button } from "antd";
import TodoApp from "components/TodoApp";
import Login from "components/Login";
import PrivateRoute from "components/PrivateRoute";
import Signup from "components/Signup";
import PrivateRouteLogin from "components/PrivateRouteLogin";
import PrivateRouteSignup from "components/PrivateRouteSignup";
import { AuthContext } from "components/AuthContext";

function App() {
  const [authorized, setAuthorized] = useState(
    JSON.parse(localStorage.getItem("authorized")) || false
  );

  /**
   *
   * Passing on authorized prop received from Login Page to Home Page.
   */
  const handleAuth = (authorized) => {
    setAuthorized(authorized);
    localStorage.setItem("authorized", "true");
  };

  return (
    <div className="App">
      <AuthContext.Provider value={[authorized, handleAuth]}>
        <Row style={{ height: "100vh" }}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
            <Switch>
              <PrivateRouteLogin
                path="/login"
                component={Login}
                exact
              />
              <PrivateRouteSignup
                path="/signup"
                component={Signup}
                exact
              />
              <PrivateRoute
                component={TodoApp}
                authorized={authorized}
              />
            </Switch>
          </Col>
        </Row>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
