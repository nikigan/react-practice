import React from "react";
import "./AppRouter.scss";
import { Route, Switch } from "react-router-dom";
import ControlPanel from "../../pages/ControlPanel";
import Home from "../../pages/Home";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/owner/places" component={ControlPanel} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRouter;
