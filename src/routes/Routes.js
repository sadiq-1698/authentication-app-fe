import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import Messenger from "../pages/Messenger/Messenger";

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
        <Route path="/edit" exact>
          <EditProfile />
        </Route>
        <Route path="/messenger" exact>
          <Messenger />
        </Route>
        <Route path="/" exact>
          <Profile />
        </Route>

        {/* <ProtectedRoute path="/" component={TodoContainer} auth={isAuth} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
