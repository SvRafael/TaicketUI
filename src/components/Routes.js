import React from "react";
import { Router, Switch, Route, Redirect } from "react-router";

import { history } from "../history";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import EventsCreate from "../views/EventsCreate";
import Events from "../views/Events";
import EventsShow from "../views/EventsShow";
import TicketsCreate from "../views/TicketsCreate";
import NotFound from "./NotFound";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect from="/" to="/login" exact />
      <Route component={Login} path="/login" exact />
      <Route component={Register} path="/register" exact />
      <Route component={Home} path="/home" exact />
      <Route component={Events} path="/events" exact />
      <Route component={EventsCreate} path="/events/create" exact />
      <Route component={EventsShow} path="/events/:id" exact />
      <Route
        component={TicketsCreate}
        path="/events/:id/tickets/create"
        exact
      />
      <Route component={NotFound} path="*" />
    </Switch>
  </Router>
);

export default Routes;
