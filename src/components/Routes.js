import React from "react";
import { Router, Switch, Route, Redirect } from "react-router";

import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import { history } from "../history";
import NotFound from "./NotFound";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect from="/" to="/login" exact />
      <Route component={Login} path="/login" exact />
      <Route component={Register} path="/register" exact />
      <Route component={Home} path="/home" exact />
      <Route component={NotFound} path="*" />
    </Switch>
  </Router>
);

export default Routes;
