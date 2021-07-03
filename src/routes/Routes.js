import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>

        {/* <ProtectedRoute path="/" component={TodoContainer} auth={isAuth} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
