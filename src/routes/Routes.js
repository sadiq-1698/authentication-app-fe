import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { useAuth } from "../contexts/authContext";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import Messenger from "../pages/Messenger/Messenger";

import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Switch>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>

        <ProtectedRoute
          path="/edit"
          component={EditProfile}
          auth={isLoggedIn}
        />
        <ProtectedRoute
          path="/messenger"
          component={Messenger}
          auth={isLoggedIn}
        />
        <ProtectedRoute path="/" component={Profile} auth={isLoggedIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
