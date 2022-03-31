import React from "react";
import Dashboard from "../Dashboard/Index";
import { Switch, Route, Redirect } from "react-router-dom";
const AppLayout = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};

export default AppLayout;
