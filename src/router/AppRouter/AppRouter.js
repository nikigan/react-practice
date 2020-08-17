import React from "react";
import "./AppRouter.scss";
import { Route, Switch } from "react-router-dom";
import ControlPanel from "../../pages/ControlPanel";
import Home from "../../pages/Home";
import EditPlace from "../../pages/EditPlace";
import EditDish from "../../pages/EditDish";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/owner/places" exact component={ControlPanel} />
      <Route path="/owner/places/new" exact component={EditPlace} />
      <Route path="/owner/places/:id" exact component={EditPlace} />
      <Route path="/owner/dishes/new" exact component={EditDish} />
      <Route path="/owner/dishes/:id" exact component={EditDish} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRouter;
