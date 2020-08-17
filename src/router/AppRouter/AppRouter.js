import React from "react";
import "./AppRouter.scss";
import { Route, Switch } from "react-router-dom";
import ControlPanel from "../../pages/ControlPanel";
import Home from "../../pages/Home";
import EditPlace from "../../pages/EditPlace";
import EditDish from "../../pages/EditDish";
import LoginPage from "../../pages/LoginPage";
import ProtectedRoute from "../../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <ProtectedRoute path="/owner/places" exact>
        <ControlPanel />
      </ProtectedRoute>
      <ProtectedRoute path="/owner/places/new" exact>
        <EditPlace />
      </ProtectedRoute>
      <ProtectedRoute path="/owner/places/:id" exact>
        <EditPlace />
      </ProtectedRoute>
      <ProtectedRoute path="/owner/dishes/new" exact>
        <EditDish />
      </ProtectedRoute>
      <ProtectedRoute path="/owner/dishes/:id" exact>
        <EditDish />
      </ProtectedRoute>
      <ProtectedRoute path="/" exact>
        <Home />
      </ProtectedRoute>
    </Switch>
  );
};

export default AppRouter;
