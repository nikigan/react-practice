import React from "react";
import "./AppRouter.scss";
import { Route, Switch } from "react-router-dom";
import ControlPanel from "../ControlPanel";
import Home from "../Home";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/control-panel" component={ControlPanel} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRouter;
