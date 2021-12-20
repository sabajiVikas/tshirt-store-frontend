import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageCategory from "./admin/ManageCategory";
import ManageProduct from "./admin/ManageProduct";
import UpdateProduct from "./admin/UpdateProduct";

import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Cart from "./core/Cart";

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
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <AdminRoutes exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoutes
          exact
          path="/admin/create/category"
          component={AddCategory}
        />
        <AdminRoutes
          exact
          path="/admin/categories"
          component={ManageCategory}
        />
        <AdminRoutes
          exact
          path="/admin/create/product"
          component={AddProduct}
        />
        <AdminRoutes exact path="/admin/products" component={ManageProduct} />
        <AdminRoutes
          exact
          path="/admin/product/update/:productId"
          component={UpdateProduct}
        />
        <PrivateRoutes exact path="/user/dashboard" component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
