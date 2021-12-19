import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";

import Home from "./core/Home";
import AdminDashboard from "./user/AdminDashboard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <AdminRoutes exact path="/admin/dashboard" component={AdminDashboard} />
        <PrivateRoutes exact path="/user/dashboard" component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
