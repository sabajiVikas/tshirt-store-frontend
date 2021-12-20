import React from "react";
import { Link } from "react-router-dom";

import Base from "../core/Base";

import { isAuthenticated } from "../auth/helper/";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white text-success">
          Admin Navigation
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link
              to="/admin/create/category"
              className="text-center text-success"
            >
              <strong>Create Category</strong>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="text-center text-success">
              <strong>Manage Categories</strong>
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to="/admin/create/product"
              className="text-center text-success"
            >
              <strong>Create Product</strong>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="text-center text-success">
              <strong>Manage Products</strong>
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="text-center text-success">
              <strong>Manage Orders</strong>
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-success">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2 p-2">Name</span>{" "}
            <strong>{name}</strong>
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2 p-2">Email</span>{" "}
            <strong>{email}</strong>
          </li>
          <li className="list-group-item text-center">
            <span className="badge badge-danger mr-2 p-2">
              <strong>ADMIN AREA</strong>
            </span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="Admin Dashboard"
      description="Welcome to admin, manage all products here..."
      className="container bg-success p-3 my-3"
    >
      <div className="row">
        <div className="col-4">{adminLeftSide()}</div>
        <div className="col-8">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
